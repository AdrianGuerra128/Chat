# AmiguRush Physics Lab v0.2

Laboratorio aislado para calibrar la física base de **AmiguRush** (arcade vertical tipo Flappy).
No es el juego completo: es la herramienta que decide si el core físico puede sentirse adictivo, justo y viral.

## Cómo correrlo

**Opción 1 — Abrir directo:**
Abre `index.html` en cualquier navegador moderno. No requiere build ni dependencias.

**Opción 2 — Servidor simple:**

```bash
cd prototypes/amigurush-physics-lab
python -m http.server 8000
# Abre http://localhost:8000
```

## Controles

| Acción | Input |
|---|---|
| Flap / empezar / reintentar | Tap, click sobre el canvas, o tecla Espacio |
| Ajustar física en vivo | Sliders del panel derecho (sin recargar) |
| Cambiar preset | Botones Soft / Classic / Brutal / Viral Candidate |
| Ver hitboxes y telemetría en vivo | Checkbox "Debug Mode" |

## Qué incluye

- Física con **paso fijo (120 Hz)** y acumulador: independiente del framerate.
- El flap **reemplaza** la velocidad vertical (cancela la caída): tap responsivo.
- `maxFallSpeed` con clamp.
- Hitbox circular con `hitboxPadding` que la **reduce** respecto al visual (muerte justa).
- Estados Ready / Playing / Dead con retry instantáneo.
- Score, best score persistente (`localStorage`), último score.
- Shake + flash al morir, causa de muerte visible.
- Telemetría al morir: tiempo vivo, score, causa, velocidad vertical, distancia al centro del gap, **gap shift**, **veredicto de fairness**, preset usado.
- Debug mode: hitboxes reales, FPS, velocidad vertical, valores actuales, línea central del próximo gap (azul), línea del `prevGapCenter` (naranja punteada), `maxGapShift`, `spawnGapDistance`.

## v0.2 — Fair Gap Calibration

**La física base no cambió.** Misma gravedad, flapImpulse, maxFallSpeed, hitboxPadding, characterRadius.
Solo cambió cómo se generan los obstáculos para que el juego sea más justo y medible.

### `maxGapShift`
Máximo salto vertical en píxeles entre el centro del gap anterior y el nuevo. Sin este parámetro, dos gaps consecutivos podían estar en extremos opuestos del nivel, haciendo imposible reaccionar. Con `maxGapShift`, la dificultad es proporcional a la velocidad y el tiempo de reacción disponible.

### `spawnGapDistance`
Distancia en píxeles entre spawns de obstáculos. En v0.1 el spawn era por tiempo (`spawnInterval`), lo que causaba que a mayor `worldSpeed` los obstáculos aparecieran más separados visualmente. Con spawn por distancia, el espacio entre obstáculos es constante en pantalla independientemente de la velocidad del mundo.

### Veredicto de fairness al morir
La pantalla de muerte ahora incluye:
- **Gap shift**: cuántos píxeles saltó el gap respecto al anterior.
- **Fairness**: `Justa` / `Margen mínimo` / `Shift extremo`.

## v0.2.1 — Preset & Early Difficulty Calibration

v0.2.1 calibra dificultad inicial y presets; no cambia el sistema de fairness ni la física del motor.

Objetivo: que **Classic** sea la base jugable real (jugador nuevo logra score 2–5 en los primeros intentos), **Viral Candidate** sea más intenso que Classic sin ser un muro, **Soft** siga siendo onboarding sin ser piloto automático, y **Brutal** quede como modo castigo. El config por defecto ahora coincide con Classic.

## v0.3 — Minimal Sensory Polish

Capa de feedback puramente visual. **No cambia física, presets, fairness ni dificultad**: la hitbox, el spawn justo (`maxGapShift` / `spawnGapDistance`), la telemetría y la lógica de score quedan intactos.

- **Squash & stretch del flap**: al tapear, el personaje se estira horizontalmente y se aplasta verticalmente (~12%) durante 0.14 s. Solo escala de render; `characterRadius` y la hitbox real no cambian.
- **Score pop**: el número de score hace un pop (CSS `scorePop`) cada vez que incrementa.
- **Partículas al pasar obstáculo**: 8 chispas doradas de vida corta cerca del personaje.
- **Partículas de muerte**: explosión de 18 partículas alrededor del personaje; no bloquea el retry.
- **Tarjeta de muerte suavizada**: fade + scale corto (0.18 s) al aparecer el overlay.

Las partículas viven en canvas, sin imágenes ni assets, avanzan con tiempo de frame (no con el paso de física) y se limpian al reiniciar el run.

## v0.4 — Amigurumi Identity Mini-Pass

Identidad visual procedural, 100% Canvas 2D, sin imágenes ni assets externos. **Sin cambios de física, presets, fairness, spawn, score, hitbox ni telemetría.**

- **Personaje crochet**: contorno tipo hilo, anillos de puntadas punteados, sombreado de volumen, ojos con brillo, mejilla sutil y una hebra de lana suelta que ondea (animada con reloj visual, no con física).
- **Obstáculos tejidos**: textura procedural de filas de lana, bordes laterales tipo hilo y remate de puntadas (semicírculos) en los bordes del gap. Las puntadas decoran hacia el interior del obstáculo: el hueco sigue tan legible y justo como antes.
- **Fondo con profundidad**: dos capas de parallax procedural (ovillos/colinas lejanas + motas de lana flotantes) que acompañan `worldSpeed` al jugar y derivan lento en menús. Alpha muy bajo para no competir con el gameplay.
- **Partículas de paso más visibles**: ligeramente más grandes, más brillantes y de vida un poco más larga (Codex QA las reportó casi invisibles en v0.3).

## v0.4.1 — Visual Microtuning

Microajustes detectados por QA visual de v0.4. **Sin cambios de física, presets, fairness, spawn, score, collision, hitbox ni telemetría.**

- **Label corregido**: `index.html` ya no dice "v0.2"; title y tarjeta inicial dicen v0.4.
- **Parallax más visible**: alpha de ovillos 0.10→0.18 y de motas 0.06→0.12; ahora la profundidad se percibe sin competir con el gameplay.
- **Obstáculos más crochet**: puntadas del borde del gap más grandes (radio 4.5→6) y más claras/cálidas; cuerpo y filas de lana con tono violeta cálido en lugar de gris frío.
- **Paleta más cálida**: gradiente de fondo hacia morado sutil (navy frío → violeta oscuro), conservando contraste. El personaje naranja no cambió.
- **Partículas de muerte 30% más grandes** para que sobrevivan al blur del overlay.

## Presets

| Parámetro | Soft | Classic | Brutal | Viral Candidate |
|---|---|---|---|---|
| gravity (px/s²) | 1700 | 2200 | 2700 | 2350 |
| flapImpulse (px/s) | -520 | -650 | -760 | -680 |
| maxFallSpeed (px/s) | 720 | 900 | 1100 | 930 |
| worldSpeed (px/s) | 150 | 170 | 230 | 185 |
| gapSize (px) | 190 | 175 | 130 | 160 |
| obstacleWidth (px) | 64 | 72 | 80 | 72 |
| spawnGapDistance (px) | 255 | 275 | 265 | 265 |
| maxGapShift (px) | 115 | 115 | 90 | 115 |
| hitboxPadding (px) | 10 | 10 | 6 | 9 |
| characterRadius (px) | 17 | 18 | 19 | 18 |
| ceilingDeath | no | no | sí | no |
| floorDeath | sí | sí | sí | sí |

> Nota: `spawnInterval` se mantiene en config solo como documentación legacy.
> El spawn real usa `spawnGapDistance`.

Ajustar cualquier slider tras aplicar un preset lo marca como `(custom)` para que la telemetría refleje que los valores ya no son los del preset puro.

## Alcance

Todo el prototipo vive en esta carpeta. Sin tienda, login, backend, ranking, skins, frameworks ni assets externos — por diseño.
