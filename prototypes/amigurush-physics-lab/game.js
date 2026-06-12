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

// ---------- Configuración de física (mutable en vivo) ----------
const config = {
  gravity: 2200,           // px/s²
  flapImpulse: -650,       // px/s
  maxFallSpeed: 900,       // px/s
  worldSpeed: 180,         // px/s
  gapSize: 155,            // px
  obstacleWidth: 72,       // px
  spawnInterval: 1.35,     // s (legacy, no controla spawn — ver spawnGapDistance)
  hitboxPadding: 8,        // px (reduce la hitbox: muerte más justa)
  characterRadius: 18,     // px
  ceilingDeath: false,
  floorDeath: true,
  debugMode: false,
  maxGapShift: 135,        // px — máximo salto vertical entre gaps consecutivos
  spawnGapDistance: 245,   // px — distancia entre spawns (reemplaza spawnInterval)
};

// Cada preset redefine todos los valores principales.
const PRESETS = {
  soft: {
    label: "Soft",
    gravity: 1700, flapImpulse: -520, maxFallSpeed: 720,
    worldSpeed: 140, gapSize: 200, obstacleWidth: 64,
    spawnInterval: 1.7, hitboxPadding: 10, characterRadius: 17,
    ceilingDeath: false, floorDeath: true,
    maxGapShift: 120, spawnGapDistance: 240,
  },
  classic: {
    label: "Classic",
    gravity: 2200, flapImpulse: -650, maxFallSpeed: 900,
    worldSpeed: 180, gapSize: 155, obstacleWidth: 72,
    spawnInterval: 1.35, hitboxPadding: 8, characterRadius: 18,
    ceilingDeath: false, floorDeath: true,
    maxGapShift: 135, spawnGapDistance: 245,
  },
  brutal: {
    label: "Brutal",
    gravity: 2700, flapImpulse: -760, maxFallSpeed: 1100,
    worldSpeed: 240, gapSize: 125, obstacleWidth: 80,
    spawnInterval: 1.05, hitboxPadding: 5, characterRadius: 19,
    ceilingDeath: true, floorDeath: true,
    maxGapShift: 95, spawnGapDistance: 250,
  },
  viral: {
    label: "Viral Candidate",
    gravity: 2400, flapImpulse: -690, maxFallSpeed: 950,
    worldSpeed: 200, gapSize: 145, obstacleWidth: 72,
    spawnInterval: 1.25, hitboxPadding: 9, characterRadius: 18,
    ceilingDeath: false, floorDeath: true,
    maxGapShift: 125, spawnGapDistance: 250,
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

  // Feedback: flash + shake
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
function render() {
  ctx.clearRect(0, 0, W, H);
  drawBackground();
  drawObstacles();
  drawCharacter();
  if (config.debugMode) drawDebug();
}

function drawBackground() {
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#1a1e30");
  grad.addColorStop(1, "#12141f");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

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

    ctx.fillStyle = "#3b4263";
    roundRect(o.x, -8, w, gapTop + 8, 8);
    roundRect(o.x, gapBottom, w, H - gapBottom + 8, 8);

    // Bordes del gap resaltados (legibilidad del hueco)
    ctx.fillStyle = "#535d8c";
    ctx.fillRect(o.x, gapTop - 6, w, 6);
    ctx.fillRect(o.x, gapBottom, w, 6);
  }
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

  ctx.save();
  ctx.translate(CHARACTER_X, y);
  ctx.rotate(tilt);

  // Cuerpo: círculo con "puntadas" para sugerir amigurumi sin arte final
  ctx.fillStyle = "#ffb35c";
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(0,0,0,0.18)";
  ctx.lineWidth = 1.5;
  for (let i = 1; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(0, 0, R * (i / 3), 0, Math.PI * 2);
    ctx.stroke();
  }

  // Ojos
  ctx.fillStyle = "#22243a";
  ctx.beginPath();
  ctx.arc(R * 0.35, -R * 0.2, R * 0.14, 0, Math.PI * 2);
  ctx.arc(R * 0.72, -R * 0.2, R * 0.14, 0, Math.PI * 2);
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