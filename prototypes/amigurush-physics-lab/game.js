"use strict";

/* ============================================================
 * AmiguRush Physics Lab v0.2
 * Laboratorio aislado para calibrar la física base del juego.
 * Sin frameworks, sin assets externos. Canvas + JS puro.
 * v0.2: Fair Gap Calibration — spawn por distancia, maxGapShift.
 * ============================================================ */

// ---------- Constantes del mundo ----------
const W = 390;
const H = 844;
const CHARACTER_X = 110; // X fija del personaje
const FIXED_DT = 1 / 120; // paso de física fijo (independiente del framerate)
const MAX_FRAME_TIME = 0.25; // clamp para evitar espiral de la muerte en pestañas inactivas
const FLAP_SQUASH_TIME = 0.14; // s — duración del squash & stretch visual del flap

// ---------- Configuración de física (mutable en vivo) ----------
const config = {
  gravity: 2200,           // px/s²
  flapImpulse: -650,       // px/s
  maxFallSpeed: 900,       // px/s
  worldSpeed: 170,         // px/s
  gapSize: 175,            // px
  obstacleWidth: 72,       // px
  spawnInterval: 1.6,      // s (legacy, no controla spawn — ver spawnGapDistance)
  hitboxPadding: 10,       // px (reduce la hitbox: muerte más justa)
  characterRadius: 18,     // px
  ceilingDeath: false,
  floorDeath: true,
  debugMode: false,
  maxGapShift: 115,        // px — máximo salto vertical entre gaps consecutivos
  spawnGapDistance: 275,   // px — distancia entre spawns (reemplaza spawnInterval)
};

// Cada preset redefine todos los valores principales.
const PRESETS = {
  soft: {
    label: "Soft",
    gravity: 1700, flapImpulse: -520, maxFallSpeed: 720,
    worldSpeed: 150, gapSize: 190, obstacleWidth: 64,
    spawnInterval: 1.7, hitboxPadding: 10, characterRadius: 17,
    ceilingDeath: false, floorDeath: true,
    maxGapShift: 115, spawnGapDistance: 255,
  },
  classic: {
    label: "Classic",
    gravity: 2200, flapImpulse: -650, maxFallSpeed: 900,
    worldSpeed: 170, gapSize: 175, obstacleWidth: 72,
    spawnInterval: 1.6, hitboxPadding: 10, characterRadius: 18,
    ceilingDeath: false, floorDeath: true,
    maxGapShift: 115, spawnGapDistance: 275,
  },
  brutal: {
    label: "Brutal",
    gravity: 2700, flapImpulse: -760, maxFallSpeed: 1100,
    worldSpeed: 230, gapSize: 130, obstacleWidth: 80,
    spawnInterval: 1.15, hitboxPadding: 6, characterRadius: 19,
    ceilingDeath: true, floorDeath: true,
    maxGapShift: 90, spawnGapDistance: 265,
  },
  viral: {
    label: "Viral Candidate",
    gravity: 2350, flapImpulse: -680, maxFallSpeed: 930,
    worldSpeed: 185, gapSize: 160, obstacleWidth: 72,
    spawnInterval: 1.43, hitboxPadding: 9, characterRadius: 18,
    ceilingDeath: false, floorDeath: true,
    maxGapShift: 115, spawnGapDistance: 265,
  },
};

// Definición de sliders del panel: [clave, min, max, step]
const SLIDER_DEFS = [
  ["gravity",           800, 4000, 50],
  ["flapImpulse",     -1200, -200, 10],
  ["maxFallSpeed",      300, 1600, 25],
  ["worldSpeed",         60,  420, 10],
  ["gapSize",            80,  300, 5],
  ["obstacleWidth",      30,  140, 2],
  ["spawnGapDistance",  150,  500, 5],
  ["maxGapShift",        40,  400, 5],
  ["hitboxPadding",       0,   20, 1],
  ["characterRadius",     8,   40, 1],
];

// ---------- Estado del juego ----------
const STATE = { READY: "ready", PLAYING: "playing", DEAD: "dead" };

const game = {
  state: STATE.READY,
  y: H * 0.45,
  vy: 0,
  obstacles: [],           // { x, gapCenter, prevGapCenter, gapShift, passed }
  spawnTimer: 0,           // legacy, no usado para spawn
  spawnDistanceLeft: 0,    // distancia restante hasta próximo spawn
  lastGapCenter: H / 2,   // último gapCenter spawneado (para maxGapShift)
  score: 0,
  best: 0,
  last: null,
  timeAlive: 0,
  activePreset: "classic",
  presetDirty: false,      // true si se ajustó algo manualmente tras aplicar preset
  death: null,             // telemetría de la última muerte
  flapQueued: false,
  bobPhase: 0,             // animación idle en READY
  flapVisualTimer: 0,      // s restantes del squash & stretch (solo render)
};

// ---------- DOM ----------
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const canvasFrame = document.getElementById("canvasFrame");
const scoreLabel = document.getElementById("scoreLabel");
const bestLabel = document.getElementById("bestLabel");
const lastLabel = document.getElementById("lastLabel");
const presetTag = document.getElementById("presetTag");
const readyOverlay = document.getElementById("readyOverlay");
const deathOverlay = document.getElementById("deathOverlay");
const deathCauseEl = document.getElementById("deathCause");
const telemetryEl = document.getElementById("telemetry");
const flashEl = document.getElementById("flash");
const debugPanel = document.getElementById("debugPanel");

// ---------- Persistencia ----------
const BEST_KEY = "amigurush-physics-lab-best";

function loadBest() {
  const raw = localStorage.getItem(BEST_KEY);
  game.best = raw ? parseInt(raw, 10) || 0 : 0;
}

function saveBest() {
  localStorage.setItem(BEST_KEY, String(game.best));
}

// ---------- Panel de controles ----------
const sliderInputs = {};

function buildControls() {
  const grid = document.getElementById("controlGrid");
  for (const [key, min, max, step] of SLIDER_DEFS) {
    const row = document.createElement("div");
    row.className = "control-row";

    const label = document.createElement("label");
    const name = document.createElement("span");
    name.textContent = key;
    const value = document.createElement("b");
    label.append(name, value);

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.step = step;
    input.value = config[key];

    input.addEventListener("input", () => {
      config[key] = parseFloat(input.value);
      value.textContent = formatValue(key, config[key]);
      markPresetDirty();
    });

    value.textContent = formatValue(key, config[key]);
    row.append(label, input);
    grid.appendChild(row);
    sliderInputs[key] = { input, value };
  }

  for (const id of ["ceilingDeath", "floorDeath", "debugMode"]) {
    const el = document.getElementById(id);
    el.checked = config[id];
    el.addEventListener("change", () => {
      config[id] = el.checked;
      if (id !== "debugMode") markPresetDirty();
      debugPanel.classList.toggle("hidden", !config.debugMode);
    });
  }

  document.querySelectorAll(".presets button").forEach((btn) => {
    btn.addEventListener("click", () => applyPreset(btn.dataset.preset));
  });

  document.getElementById("resetBest").addEventListener("click", () => {
    game.best = 0;
    saveBest();
    updateHud();
  });
}

function formatValue(key, v) {
  return String(Math.round(v));
}

function markPresetDirty() {
  if (!game.presetDirty) {
    game.presetDirty = true;
    updatePresetTag();
  }
}

function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;
  for (const key of Object.keys(p)) {
    if (key === "label") continue;
    config[key] = p[key];
  }
  game.activePreset = name;
  game.presetDirty = false;
  syncControls();
  updatePresetTag();
}

function syncControls() {
  for (const [key] of SLIDER_DEFS) {
    sliderInputs[key].input.value = config[key];
    sliderInputs[key].value.textContent = formatValue(key, config[key]);
  }
  for (const id of ["ceilingDeath", "floorDeath", "debugMode"]) {
    document.getElementById(id).checked = config[id];
  }
  document.querySelectorAll(".presets button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.preset === game.activePreset && !game.presetDirty);
  });
}

function updatePresetTag() {
  const label = PRESETS[game.activePreset].label + (game.presetDirty ? " (custom)" : "");
  presetTag.textContent = "Preset: " + label;
  document.querySelectorAll(".presets button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.preset === game.activePreset && !game.presetDirty);
  });
}

// ---------- Input ----------
function onTap() {
  if (game.state === STATE.READY) {
    startRun();
    flap();
  } else if (game.state === STATE.PLAYING) {
    flap();
  } else if (game.state === STATE.DEAD) {
    resetRun();
    startRun();
    flap();
  }
}

function flap() {
  // El impulso REEMPLAZA la velocidad vertical (no se suma): esto cancela
  // la caída actual y hace que el tap se sienta responsivo, nunca torpe.
  game.vy = config.flapImpulse;
  game.flapVisualTimer = FLAP_SQUASH_TIME;
}

canvas.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  onTap();
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    // Ignorar el espacio si el foco está en un control del panel
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "INPUT" || tag === "BUTTON") document.activeElement.blur();
    e.preventDefault();
    onTap();
  }
});

// ---------- Ciclo de vida del run ----------
function startRun() {
  game.state = STATE.PLAYING;
  game.timeAlive = 0;
  readyOverlay.classList.add("hidden");
  deathOverlay.classList.add("hidden");
}

function resetRun() {
  game.y = H * 0.45;
  game.vy = 0;
  game.obstacles = [];
  game.spawnTimer = 0;
  game.spawnDistanceLeft = 0;
  game.lastGapCenter = H / 2;
  game.score = 0;
  game.death = null;
  game.flapVisualTimer = 0;
  particles.length = 0;
  updateHud();
}

function die(cause) {
  game.state = STATE.DEAD;
  game.last = game.score;
  if (game.score > game.best) {
    game.best = game.score;
    saveBest();
  }

  const gapDist = nearestGapDistance();
  const nearest = game.obstacles.find((o) => !o.passed && o.x + config.obstacleWidth >= CHARACTER_X)
    || game.obstacles[game.obstacles.length - 1];
  const gapShift = nearest ? nearest.gapShift : null;

  let fairVerdict;
  if (gapShift !== null && gapShift > config.maxGapShift + 1) {
    fairVerdict = "Shift extremo";
  } else if (gapDist !== null && Math.abs(gapDist) <= hitboxRadius() + 8) {
    fairVerdict = "Margen mínimo";
  } else {
    fairVerdict = "Justa";
  }

  game.death = {
    cause,
    score: game.score,
    timeAlive: game.timeAlive,
    vyAtDeath: game.vy,
    gapDistance: gapDist,
    gapShift,
    fairVerdict,
    preset: PRESETS[game.activePreset].label + (game.presetDirty ? " (custom)" : ""),
  };

  showDeathOverlay();
  updateHud();

  // Feedback: partículas + flash + shake
  spawnParticles(CHARACTER_X, game.y, 18, ["#ffb35c", "#ff5c6c", "#e8eaf2"], 260, 0.6, 1.3);
  flashEl.classList.remove("active");
  void flashEl.offsetWidth; // reinicia la animación
  flashEl.classList.add("active");
  canvasFrame.classList.remove("shake");
  void canvasFrame.offsetWidth;
  canvasFrame.classList.add("shake");
}

function nearestGapDistance() {
  // Distancia vertical del personaje al centro del gap del obstáculo más cercano
  let nearest = null;
  let bestDx = Infinity;
  for (const o of game.obstacles) {
    const dx = Math.abs(o.x + config.obstacleWidth / 2 - CHARACTER_X);
    if (dx < bestDx) {
      bestDx = dx;
      nearest = o;
    }
  }
  return nearest ? game.y - nearest.gapCenter : null;
}

function showDeathOverlay() {
  const d = game.death;
  const causeText = { obstacle: "Obstacle", floor: "Floor", ceiling: "Ceiling" }[d.cause];
  deathCauseEl.textContent = "Causa: " + causeText;

  const gapLine = d.gapDistance !== null
    ? `Dist. centro gap: <b>${d.gapDistance >= 0 ? "+" : ""}${d.gapDistance.toFixed(0)} px</b> (${d.gapDistance > 0 ? "abajo" : "arriba"})`
    : "Dist. centro gap: <b>n/a</b>";

  const shiftLine = d.gapShift !== null
    ? `Gap shift: <b>${d.gapShift.toFixed(0)} px</b> / max <b>${config.maxGapShift}</b>`
    : "";

  const rows = [
    `Tiempo vivo: <b>${d.timeAlive.toFixed(2)} s</b>`,
    `Score: <b>${d.score}</b>`,
    `Vel. vertical: <b>${d.vyAtDeath.toFixed(0)} px/s</b>`,
    gapLine,
    shiftLine,
    `Fairness: <b>${d.fairVerdict}</b>`,
    `Preset: <b>${d.preset}</b>`,
  ].filter(Boolean);

  telemetryEl.innerHTML = rows.join("<br>");

  deathOverlay.classList.remove("hidden");
}

// ---------- Partículas (solo feedback visual: no tocan física ni gameplay) ----------
const particles = [];

function spawnParticles(x, y, count, colors, speed, life, sizeScale = 1) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = speed * (0.35 + Math.random() * 0.65);
    particles.push({
      x, y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      life: 0,
      maxLife: life * (0.6 + Math.random() * 0.4),
      size: (2 + Math.random() * 2.2) * sizeScale,
      color: colors[(Math.random() * colors.length) | 0],
    });
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.life += dt;
    if (p.life >= p.maxLife) {
      particles.splice(i, 1);
      continue;
    }
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 600 * dt; // gravedad visual ligera, independiente de config.gravity
  }
}

function drawParticles() {
  for (const p of particles) {
    ctx.globalAlpha = 1 - p.life / p.maxLife;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function scorePop() {
  scoreLabel.classList.remove("pop");
  void scoreLabel.offsetWidth; // reinicia la animación CSS
  scoreLabel.classList.add("pop");
}

// ---------- Física (paso fijo, independiente del framerate) ----------
function physicsStep(dt) {
  game.timeAlive += dt;

  // Gravedad + clamp de caída
  game.vy += config.gravity * dt;
  if (game.vy > config.maxFallSpeed) game.vy = config.maxFallSpeed;
  game.y += game.vy * dt;

  // Spawn de obstáculos por distancia recorrida (v0.2: reemplaza spawnInterval)
  game.spawnDistanceLeft -= config.worldSpeed * dt;
  while (game.spawnDistanceLeft <= 0) {
    spawnObstacle();
    game.spawnDistanceLeft += config.spawnGapDistance;
  }

  // Mover obstáculos y contar score
  for (const o of game.obstacles) {
    o.x -= config.worldSpeed * dt;
    if (!o.passed && o.x + config.obstacleWidth < CHARACTER_X) {
      o.passed = true;
      game.score++;
      scorePop();
      spawnParticles(CHARACTER_X + 14, game.y, 8, ["#ffe9a8", "#ffd76a", "#ffb35c"], 160, 0.55);
      updateHud();
    }
  }
  game.obstacles = game.obstacles.filter((o) => o.x + config.obstacleWidth > -20);

  // Colisiones
  const r = hitboxRadius();

  if (config.floorDeath && game.y + r >= H) {
    game.y = H - r;
    die("floor");
    return;
  }
  if (config.ceilingDeath && game.y - r <= 0) {
    game.y = r;
    die("ceiling");
    return;
  }
  if (!config.ceilingDeath && game.y - r < 0) {
    // Techo sólido sin muerte: bloquea y corta el impulso
    game.y = r;
    if (game.vy < 0) game.vy = 0;
  }
  if (!config.floorDeath && game.y + r > H) {
    game.y = H - r;
    if (game.vy > 0) game.vy = 0;
  }

  for (const o of game.obstacles) {
    if (circleHitsObstacle(o, r)) {
      die("obstacle");
      return;
    }
  }
}

function hitboxRadius() {
  // El padding REDUCE la hitbox respecto al visual: el jugador siempre
  // percibe la muerte como justa (nunca muere "sin haber tocado").
  return Math.max(2, config.characterRadius - config.hitboxPadding);
}

function spawnObstacle() {
  const margin = 60;
  const half = config.gapSize / 2;
  const min = margin + half;
  const max = H - margin - half;

  // Clampear lastGapCenter al rango válido antes de calcular el shift
  const base = Math.max(min, Math.min(max, game.lastGapCenter));

  // El nuevo centro solo puede alejarse maxGapShift del anterior
  const low  = Math.max(min, base - config.maxGapShift);
  const high = Math.min(max, base + config.maxGapShift);
  const gapCenter = low + Math.random() * (high - low);
  const gapShift  = Math.abs(gapCenter - base);

  game.obstacles.push({
    x: W + 10,
    gapCenter,
    prevGapCenter: base,
    gapShift,
    passed: false,
  });
  game.lastGapCenter = gapCenter;
}

function circleHitsObstacle(o, r) {
  const gapTop = o.gapCenter - config.gapSize / 2;
  const gapBottom = o.gapCenter + config.gapSize / 2;
  // El obstáculo son dos rectángulos: superior [0, gapTop] e inferior [gapBottom, H]
  return (
    circleHitsRect(CHARACTER_X, game.y, r, o.x, 0, config.obstacleWidth, gapTop) ||
    circleHitsRect(CHARACTER_X, game.y, r, o.x, gapBottom, config.obstacleWidth, H - gapBottom)
  );
}

function circleHitsRect(cx, cy, r, rx, ry, rw, rh) {
  const nx = Math.max(rx, Math.min(cx, rx + rw));
  const ny = Math.max(ry, Math.min(cy, ry + rh));
  const dx = cx - nx;
  const dy = cy - ny;
  return dx * dx + dy * dy <= r * r;
}

// ---------- Render ----------
// Reloj y scroll puramente visuales (avanzan con tiempo de frame, nunca con física)
let visualTime = 0;
let bgScroll = 0;

const wrapMod = (a, n) => ((a % n) + n) % n;

function render() {
  ctx.clearRect(0, 0, W, H);
  drawBackground();
  drawObstacles();
  drawCharacter();
  drawParticles();
  if (config.debugMode) drawDebug();
}

function drawBackground() {
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#221d36");
  grad.addColorStop(1, "#171225");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Capa lejana de parallax: ovillos/colinas suaves en la base (tenues)
  const far = bgScroll * 0.15;
  ctx.fillStyle = "rgba(108, 96, 158, 0.18)";
  for (let i = 0; i < 6; i++) {
    const x = wrapMod(i * 165 + 40 - far, W + 340) - 170;
    const r = 70 + (i % 3) * 32;
    ctx.beginPath();
    ctx.arc(x, H + 18, r, Math.PI, 0);
    ctx.fill();
  }

  // Capa cercana de parallax: motas de lana flotantes (alpha bajo, no distraen)
  const near = bgScroll * 0.35;
  ctx.fillStyle = "rgba(255, 211, 150, 0.12)";
  for (let i = 0; i < 14; i++) {
    const x = wrapMod(i * 97 + 31 - near, W + 60) - 30;
    const y = ((i * 167 + 80) % (H - 160)) + 60;
    ctx.beginPath();
    ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2);
    ctx.fill();
  }

  // Línea de piso sutil
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, H - 1);
  ctx.lineTo(W, H - 1);
  ctx.stroke();
}

function drawObstacles() {
  for (const o of game.obstacles) {
    const gapTop = o.gapCenter - config.gapSize / 2;
    const gapBottom = o.gapCenter + config.gapSize / 2;
    const w = config.obstacleWidth;

    drawYarnColumn(o.x, -8, w, gapTop + 8);
    drawYarnColumn(o.x, gapBottom, w, H - gapBottom + 8);

    // Borde del gap con puntadas tipo crochet (legibilidad del hueco intacta:
    // las puntadas se centran en la línea del borde, solo decoración)
    drawStitchEdge(o.x, gapTop, w, false);
    drawStitchEdge(o.x, gapBottom, w, true);
  }
}

// Columna de obstáculo con textura de tejido procedural (solo visual:
// la hitbox sigue siendo el rectángulo completo de circleHitsObstacle)
function drawYarnColumn(x, y, w, h) {
  if (h <= 0) return;
  ctx.fillStyle = "#4a4374";
  roundRect(x, y, w, h, 8);

  // Filas de lana: curvas horizontales suaves, un solo stroke por columna
  ctx.strokeStyle = "rgba(255, 226, 200, 0.08)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let yy = y + 6; yy < y + h - 4; yy += 8) {
    ctx.moveTo(x + 3, yy);
    ctx.quadraticCurveTo(x + w / 2, yy + 2.5, x + w - 3, yy);
  }
  ctx.stroke();

  // Borde lateral tipo hilo
  ctx.strokeStyle = "rgba(155, 138, 210, 0.4)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 1.5, y + 4);
  ctx.lineTo(x + 1.5, y + h - 4);
  ctx.moveTo(x + w - 1.5, y + 4);
  ctx.lineTo(x + w - 1.5, y + h - 4);
  ctx.stroke();
}

// Remate tipo ovillo/puntada gorda en el borde del gap: trama de crochet
// más gruesa. Los bumps crecen hacia el cuerpo del obstáculo (nunca hacia
// el hueco), así que el gap sigue tan limpio y legible como antes.
function drawStitchEdge(x, y, w, bumpsUp) {
  const r = 8;
  const spacing = 14;

  // Hilo guía bajo los remates, mismo tono que los bordes laterales tejidos
  ctx.strokeStyle = "rgba(155, 138, 210, 0.4)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x + 2, y);
  ctx.lineTo(x + w - 2, y);
  ctx.stroke();

  // Remates gordos (puntadas) traslapados, tipo cadena de ovillo
  ctx.fillStyle = "#9b8ed0";
  ctx.beginPath();
  for (let xx = x + 4; xx + spacing <= x + w - 2; xx += spacing) {
    const cx = xx + spacing / 2;
    ctx.moveTo(cx + r, y);
    ctx.arc(cx, y, r, 0, Math.PI, !bumpsUp);
  }
  ctx.fill();

  // Ojal interior de cada puntada, con el tono del cuerpo de la columna
  ctx.fillStyle = "#4a4374";
  ctx.beginPath();
  const innerR = r * 0.4;
  const innerOffset = bumpsUp ? innerR + 2 : -(innerR + 2);
  for (let xx = x + 4; xx + spacing <= x + w - 2; xx += spacing) {
    const cx = xx + spacing / 2;
    ctx.moveTo(cx + innerR, y + innerOffset);
    ctx.arc(cx, y + innerOffset, innerR, 0, Math.PI * 2);
  }
  ctx.fill();
}

function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fill();
}

function drawCharacter() {
  const R = config.characterRadius;
  // Bob suave en READY para que la pantalla inicial se sienta viva
  const y = game.state === STATE.READY ? game.y + Math.sin(game.bobPhase) * 6 : game.y;

  // Rotación según velocidad vertical: clave del game feel tipo Flappy
  const tilt = game.state === STATE.PLAYING
    ? Math.max(-0.45, Math.min(0.9, game.vy / 900))
    : 0;

  // Squash & stretch sutil del flap: solo escala de render, la hitbox
  // (characterRadius - hitboxPadding) no se ve afectada.
  const squash = game.flapVisualTimer > 0 ? game.flapVisualTimer / FLAP_SQUASH_TIME : 0;
  const scaleX = 1 + 0.12 * squash;
  const scaleY = 1 - 0.12 * squash;

  ctx.save();
  ctx.translate(CHARACTER_X, y);
  ctx.rotate(tilt);
  ctx.scale(scaleX, scaleY);

  // Hebra de hilo suelta (cola): detrás del cuerpo, ondea con reloj visual
  const wag = Math.sin(visualTime * 6) * 0.25;
  ctx.strokeStyle = "#d98c3f";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-R * 0.85, R * 0.35);
  ctx.quadraticCurveTo(
    -R * 1.6, R * (0.7 + wag),
    -R * 2.1, R * (0.45 + wag * 1.8)
  );
  ctx.stroke();
  // Nudito al final de la hebra
  ctx.fillStyle = "#d98c3f";
  ctx.beginPath();
  ctx.arc(-R * 2.1, R * (0.45 + wag * 1.8), 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Cuerpo: bola de lana amigurumi
  ctx.fillStyle = "#ffb35c";
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fill();

  // Sombreado inferior suave (volumen)
  ctx.fillStyle = "rgba(120, 60, 10, 0.16)";
  ctx.beginPath();
  ctx.arc(0, R * 0.35, R * 0.92, Math.PI * 0.15, Math.PI * 0.85);
  ctx.fill();

  // Textura de tejido: anillos concéntricos punteados (puntadas)
  ctx.strokeStyle = "rgba(0,0,0,0.22)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 4]);
  for (let i = 1; i <= 3; i++) {
    ctx.beginPath();
    ctx.arc(0, 0, R * (i / 3.6), 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Contorno tipo hilo (yarn outline)
  ctx.strokeStyle = "#d98c3f";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.stroke();

  // Ojos con brillo
  ctx.fillStyle = "#22243a";
  ctx.beginPath();
  ctx.arc(R * 0.35, -R * 0.2, R * 0.15, 0, Math.PI * 2);
  ctx.arc(R * 0.72, -R * 0.2, R * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.beginPath();
  ctx.arc(R * 0.31, -R * 0.26, R * 0.05, 0, Math.PI * 2);
  ctx.arc(R * 0.68, -R * 0.26, R * 0.05, 0, Math.PI * 2);
  ctx.fill();

  // Mejilla sutil
  ctx.fillStyle = "rgba(255, 110, 110, 0.22)";
  ctx.beginPath();
  ctx.arc(R * 0.5, R * 0.18, R * 0.18, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawDebug() {
  const r = hitboxRadius();

  // Hitbox real del personaje
  ctx.strokeStyle = "#7ee787";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(CHARACTER_X, game.y, r, 0, Math.PI * 2);
  ctx.stroke();

  // Hitboxes de obstáculos
  ctx.strokeStyle = "#ff5c6c";
  for (const o of game.obstacles) {
    const gapTop = o.gapCenter - config.gapSize / 2;
    const gapBottom = o.gapCenter + config.gapSize / 2;
    ctx.strokeRect(o.x, 0, config.obstacleWidth, gapTop);
    ctx.strokeRect(o.x, gapBottom, config.obstacleWidth, H - gapBottom);
  }

  // Línea central del gap del próximo obstáculo (el primero no pasado)
  const next = game.obstacles.find((o) => !o.passed && o.x + config.obstacleWidth >= CHARACTER_X);
  if (next) {
    // Línea azul: gapCenter actual
    ctx.strokeStyle = "#58a6ff";
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(0, next.gapCenter);
    ctx.lineTo(W, next.gapCenter);
    ctx.stroke();
    // Línea naranja punteada: prevGapCenter (de dónde vino el gap anterior)
    if (next.prevGapCenter !== undefined) {
      ctx.strokeStyle = "#ff9640";
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.moveTo(0, next.prevGapCenter);
      ctx.lineTo(W, next.prevGapCenter);
      ctx.stroke();
    }
    ctx.setLineDash([]);
  }
}

function updateDebugPanel() {
  if (!config.debugMode) return;
  const next = game.obstacles.find((o) => !o.passed && o.x + config.obstacleWidth >= CHARACTER_X);
  const spawnSecs = (config.spawnGapDistance / config.worldSpeed).toFixed(2);
  debugPanel.textContent = [
    `FPS: ${fps.toFixed(0)}`,
    `vy: ${game.vy.toFixed(0)} px/s`,
    `y: ${game.y.toFixed(0)}`,
    `hitbox r: ${hitboxRadius()} px`,
    `gravity: ${config.gravity}`,
    `flap: ${config.flapImpulse}`,
    `maxFall: ${config.maxFallSpeed}`,
    `worldSpeed: ${config.worldSpeed}`,
    `gap: ${config.gapSize}  width: ${config.obstacleWidth}`,
    `spawnDist: ${config.spawnGapDistance} px (~${spawnSecs}s)`,
    `maxGapShift: ${config.maxGapShift} px`,
    next ? `next gapShift: ${next.gapShift.toFixed(0)} px` : `next gapShift: -`,
    `obstacles: ${game.obstacles.length}`,
  ].join("\n");
}

// ---------- HUD ----------
function updateHud() {
  scoreLabel.textContent = game.score;
  bestLabel.textContent = game.best;
  lastLabel.textContent = game.last === null ? "-" : game.last;
}

// ---------- Main loop (acumulador con paso de física fijo) ----------
let lastTime = performance.now();
let accumulator = 0;
let fps = 60;

function frame(now) {
  let frameTime = (now - lastTime) / 1000;
  lastTime = now;
  if (frameTime > MAX_FRAME_TIME) frameTime = MAX_FRAME_TIME;

  // FPS suavizado
  if (frameTime > 0) fps = fps * 0.95 + (1 / frameTime) * 0.05;

  if (game.state === STATE.PLAYING) {
    accumulator += frameTime;
    while (accumulator >= FIXED_DT && game.state === STATE.PLAYING) {
      physicsStep(FIXED_DT);
      accumulator -= FIXED_DT;
    }
  } else {
    accumulator = 0;
    game.bobPhase += frameTime * 3;
  }

  // Efectos puramente visuales: avanzan con tiempo de frame, no con el paso de física
  if (game.flapVisualTimer > 0) {
    game.flapVisualTimer = Math.max(0, game.flapVisualTimer - frameTime);
  }
  updateParticles(frameTime);
  visualTime += frameTime;
  // El parallax acompaña la velocidad del mundo al jugar; deriva lenta en menús
  bgScroll += frameTime * (game.state === STATE.PLAYING ? config.worldSpeed : 24);

  render();
  updateDebugPanel();
  requestAnimationFrame(frame);
}

// ---------- Init ----------
loadBest();
buildControls();
applyPreset("classic");
resetRun();
updateHud();
requestAnimationFrame(frame);