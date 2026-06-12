# AmiguRush Physics Lab v0.1

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
- Telemetría al morir: tiempo vivo, score, causa, velocidad vertical, distancia al centro del gap más cercano, preset usado.
- Debug mode: hitboxes reales, FPS, velocidad vertical, valores actuales, línea central del próximo gap.

## Presets

| Parámetro | Soft | Classic | Brutal | Viral Candidate |
|---|---|---|---|---|
| gravity (px/s²) | 1700 | 2200 | 2700 | 2400 |
| flapImpulse (px/s) | -520 | -650 | -760 | -690 |
| maxFallSpeed (px/s) | 720 | 900 | 1100 | 950 |
| worldSpeed (px/s) | 140 | 180 | 240 | 200 |
| gapSize (px) | 200 | 155 | 125 | 145 |
| obstacleWidth (px) | 64 | 72 | 80 | 72 |
| spawnInterval (s) | 1.70 | 1.35 | 1.05 | 1.25 |
| hitboxPadding (px) | 10 | 8 | 5 | 9 |
| characterRadius (px) | 17 | 18 | 19 | 18 |
| ceilingDeath | no | no | sí | no |
| floorDeath | sí | sí | sí | sí |

Ajustar cualquier slider tras aplicar un preset lo marca como `(custom)` para que la telemetría refleje que los valores ya no son los del preset puro.

## Alcance

Todo el prototipo vive en esta carpeta. Sin tienda, login, backend, ranking, skins, frameworks ni assets externos — por diseño.