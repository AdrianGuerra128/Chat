# AmiguRush — Art Direction Lock v0.1

> Documento de gobernanza visual. Congela la identidad alcanzada en v0.4.1 y define reglas para cualquier pase visual futuro. **No es un documento de implementación**: no cambia física, presets, fairness, spawn, score, hitbox ni telemetría.

> Nota: `ART_DIRECTION.md` sigue siendo el contrato visual canónico del Physics Lab. `UNIVERSE_BIBLE.md` complementa este documento con universo, cast, mundos y capa competitiva/social. Las decisiones nuevas del Universe Bible no reemplazan este Art Direction Lock hasta ser validadas y promovidas explícitamente.

## 1. North Star Visual

AmiguRush se ve y se siente como un **mundo de amigurumi tejido a mano, de noche, jugado con hilos cálidos sobre un fondo frío**. La identidad central es el contraste entre el calor del personaje (naranja/crema, vivo, expresivo) y la frialdad envolvente del mundo (violetas oscuros, azules profundos, obstáculos tejidos en tonos fríos-medios). El jugador debe sentir que está pilotando un muñeco de lana hecho a mano a través de un túnel de estambre infinito — táctil, suave, pero con tensión arcade real.

## 2. Los 7 Principios Visuales Innegociables

1. **El personaje es el sol del frame.** Siempre el elemento más cálido, más saturado y más legible en pantalla. Nada compite con él por atención.
2. **Canvas 2D puro, sin assets externos.** Toda la identidad vive en código: formas, gradientes, partículas y curvas dibujadas en runtime. Cero imágenes, cero fuentes externas, cero audio.
3. **La física y el arte nunca se tocan.** Hitbox, gravedad, impulso, spawn, fairness — invisibles al ojo, inmutables por diseño visual. Ningún cambio estético puede alterar un solo número de `config` o `PRESETS`.
4. **Legibilidad del gap por encima de la decoración.** El hueco entre obstáculos debe ser instantáneamente reconocible incluso con la textura tejida activa. Si una decoración reduce el contraste del gap, se descarta.
5. **Paso fijo para física, reloj visual para estética.** Cualquier animación (squash, partículas, parallax, hilos ondulantes) usa `frameTime`/`visualTime`, nunca `FIXED_DT`. La física sigue determinista a 120 Hz sin importar el framerate visual.
6. **Calidez progresiva, no saturación total.** Los acentos cálidos (personaje, partículas de paso, remates de costura) se usan con moderación. Si todo es cálido, nada destaca.
7. **Cada pase visual es aditivo y reversible.** Ninguna versión debe requerir deshacer la anterior. Se construye sobre lo congelado, no se reemplaza.

## 3. Paleta Visual Bloqueada

| Elemento | Color | Notas |
|---|---|---|
| Fondo (gradiente, lejos→cerca) | `#171225` → `#221d36` | Violeta-navy oscuro. No usar grises fríos planos. |
| Capa lejana "ovillos" | `rgba(108, 96, 158, 0.18)` | Parallax lento, decorativo |
| Capa cercana "motas de lana" | `rgba(255, 211, 150, 0.12)` | Cálida, sutil, no debe leerse como gameplay |
| Personaje — cuerpo | `#ffb35c` | **Intocable.** Es el ancla cromática del juego. |
| Personaje — contorno/hilo | `#d98c3f` | Define silueta y cola de lana |
| Personaje — rubor | `rgba(255, 110, 110, 0.22)` | Sutil, no debe leerse como daño |
| Obstáculos — cuerpo | `#4a4374` | Violeta medio-frío, distinto del fondo |
| Obstáculos — filas de lana | `rgba(255, 226, 200, 0.08)` | Textura interior, muy tenue |
| Obstáculos — hilos laterales | `rgba(155, 138, 210, 0.4)` | Borde tejido |
| Obstáculos — puntadas del gap | `#9b8ed0` | Remate visible, define el borde del hueco |
| Partículas de paso | `#ffe9a8`, `#ffd76a`, `#ffb35c` | Doradas/cálidas, celebración |
| Partículas de muerte | `#ffb35c`, `#ff5c6c`, `#e8eaf2` | Cálido + alerta + claro, explosión legible |
| Texto / HUD | `#e8eaf2` | Alto contraste sobre fondo oscuro |

Ninguno de estos valores cambia sin pasar por un nuevo Art Direction Lock explícito.

## 4. Personaje Principal

- **Silueta**: circular con ligera irregularidad tipo ovillo — nunca un círculo perfecto geométrico, siempre con la sensación de "tejido a mano".
- **Expresión**: ojos brillantes con punto de luz (sparkle), mejilla sutil. Transmite curiosidad/esfuerzo, no miedo ni dolor.
- **Textura**: anillos de puntadas punteados que sugieren filas de crochet sin saturar el cuerpo. Sombreado inferior para dar volumen (luz desde arriba-izquierda implícita).
- **Ojos**: deben permanecer visibles y con brillo en todo momento, incluso durante squash/stretch.
- **Mejillas**: un solo blush sutil, no simétrico forzado, no debe convertirse en "cara kawaii genérica".
- **Cola/hebra de lana**: elemento animado con reloj visual (no física), con un nudo en la punta. Es la única parte del personaje con movimiento orgánico continuo.
- **Movimiento permitido**: squash & stretch en el flap (±~12%, 0.14s), oscilación de la cola. Nada más anima el cuerpo del personaje.
- **Mantener**: color `#ffb35c`/`#d98c3f`, anillos de puntadas, ojos con sparkle, cola animada.
- **Mejorar (futuro, no ahora)**: posible micro-rotación en caída/ascenso si se autoriza un pase de movimiento — **no incluido en v0.5**.
- **Nunca cambiar sin Art Direction Lock nuevo**: `characterRadius` (físico), paleta del personaje, presencia del sparkle en los ojos.

## 5. Obstáculos — Dirección de Diseño

| Opción | Descripción | Veredicto |
|---|---|---|
| A) Columnas tejidas puras | Cuerpo con filas de lana, sin remate especial en el gap | Insuficiente — el gap no se distingue del cuerpo |
| B) Ovillos/hilos verticales | Reemplazar columnas por pilas de ovillos apilados | Descartado — rompe la legibilidad rectangular del gap y complica la lectura de colisión visual |
| C) Herramientas de costura (agujas, tijeras) | Temática de costurero | Descartado — tono equivocado, conflictúa con "amigurumi tierno", introduce lectura de "objeto punzante" cerca del personaje |
| **D) Híbrido — columnas tejidas + remate de ovillo/puntada gorda en el borde del gap** | Cuerpo de columna se mantiene (`drawYarnColumn`), pero el borde que define el hueco recibe un remate más grueso y cálido (`drawStitchEdge` evolucionado) | **Elegida.** Mejora legibilidad del gap sin tocar la silueta general del obstáculo |

**Decisión final: Dirección D.** El cuerpo de la columna (`#4a4374`, filas `rgba(255,226,200,0.08)`, hilos laterales `rgba(155,138,210,0.4)`) permanece intacto. Solo el remate del gap (`#9b8ed0`) puede evolucionar — engrosarse, calentarse ligeramente, o ganar mayor definición de "puntada gorda" — siempre que el contraste contra el fondo y el cuerpo de la columna mejore o se mantenga, nunca empeore.

## 6. Fondo / Mundo

- **Concepto**: "mundo abstracto de lana nocturno" — un espacio violeta-navy infinito con motas y formas redondeadas que sugieren ovillos lejanos, sin convertirse en un escenario literal (no paisajes, no horizontes, no objetos reconocibles más allá de formas circulares suaves).
- **Máximo 2 capas de parallax.** Una capa lejana lenta (ovillos), una capa cercana más rápida (motas). No se añade una tercera capa sin Art Direction Lock nuevo.
- **Reglas de contraste**: el alpha combinado de ambas capas de fondo nunca debe acercarse al alpha de los obstáculos (`#4a4374` sólido) ni al del personaje. El fondo es ambiente, no protagonista.
- **En menú vs. en juego**: el fondo deriva lento en menús (`bgScroll += frameTime * 24`) y acompaña `worldSpeed` durante el juego — esta diferencia de ritmo se conserva como señal sutil de estado.

## 7. Lenguaje de Formas

- **Bordes**: preferentemente redondeados o con curvas suaves (`arc`, `quadraticCurveTo`). Esquinas duras solo en el cuerpo rectangular base de los obstáculos (estructura), nunca en remates o decoración.
- **Curvas**: la cola del personaje y los remates de puntada usan curvas continuas, no líneas quebradas.
- **Puntadas**: representadas como arcos punteados o semicírculos pequeños, siempre en grupos regulares (ritmo visual constante), nunca aleatorias en tamaño.
- **Hilo**: líneas finas (1-2px), semitransparentes, sugieren textura sin generar ruido.
- **Sombras**: una sola sombra de volumen por elemento, en la parte inferior, sutil. No sombras múltiples ni sombras proyectadas al fondo.
- **Brillos**: reservados para los ojos del personaje (sparkle) y, opcionalmente, partículas. No se añaden brillos a obstáculos ni fondo.
- **Densidad decorativa**: regla general — si un elemento decorativo no se puede describir en una frase corta y no aporta a la lectura del gap o del personaje, no se dibuja.
- **Tamaños**: las proporciones relativas actuales (personaje vs. gap vs. obstáculo) son la referencia. Cualquier elemento nuevo se dimensiona en relación a `characterRadius`, nunca en píxeles absolutos arbitrarios.

## 8. Reglas de Efectos Visuales

| Efecto | Estado | Reglas futuras |
|---|---|---|
| Squash & stretch (flap) | **Congelado** | ±12%, 0.14s. No se intensifica ni se extiende sin Art Direction Lock nuevo. |
| Score pop | **Congelado** | Animación CSS `scorePop` actual es definitiva para v0.5. |
| Partículas de paso | Conservar, máx. 12 | Pueden ajustarse tamaño/vida levemente (±20%) sin nuevo lock, pero no superar 12 partículas por evento. |
| Partículas de muerte | Conservar | Tamaño/cantidad actuales (18 partículas, `sizeScale` 1.3) son el techo para v0.5. |
| Retraso del overlay de muerte (~150ms) | **Propuesto, no implementado** | Toca el flujo de muerte/retry — requiere su propio QA. Ver Roadmap §10, `v0.5.1`. |
| Parallax de fondo | Congelado en 2 capas | Ver §6. |
| Feedback del flap (más allá de squash) | No existe | No se añade sin Art Direction Lock nuevo (ej. estela, destello). |

## 9. Do / Don't

**Do:**
- Mantener todo el arte en Canvas 2D procedural.
- Priorizar siempre la legibilidad del gap y del personaje.
- Conservar la separación estricta entre reloj de física (`FIXED_DT`) y reloj visual (`frameTime`/`visualTime`).
- Documentar en el README cualquier cambio visual, igual que las versiones anteriores.
- Hacer QA visual con screenshots antes de declarar un pase visual terminado.

**Don't:**
- No introducir assets externos (imágenes, sprites, fuentes, audio).
- No añadir skins, tienda, login, ranking ni backend.
- No añadir nueva UI fuera del HUD y panel de control existentes.
- No tocar `config`, `PRESETS`, hitbox, spawn, fairness o telemetría en un pase "visual".
- No saturar el fondo con elementos que compitan visualmente con el personaje o el gap.
- No sacrificar legibilidad por estética — si hay duda, gana la legibilidad.

## 10. Roadmap Visual Seguro

- **v0.5 — Obstacle Identity Pass**: implementar únicamente la dirección D descrita en §5: columnas tejidas con remate de ovillo/puntada gorda en la cara del gap, cuerpo de columna intacto. Nada más. QA completo con screenshots.
- **v0.5.1 o estudio posterior**: estudiar el retraso del overlay de muerte (~150ms) para que las partículas de muerte respiren antes de que aparezca la tarjeta. Esto toca el flujo de muerte/retry, por lo que requiere QA específico y **no debe mezclarse con v0.5**.
- **v0.6 — espera a arte real**: cualquier pase que dependa de assets externos, animaciones complejas de personaje (rotación, idle, expresiones múltiples) o nuevas mecánicas visuales mayores **espera a que exista arte real de referencia** y requiere QA visual completo antes de integrarse.

## 11. Criterios de Aprobación Visual

Un pase visual se considera aprobado solo si:

1. `node --check game.js` pasa sin errores.
2. Cero errores de consola en Playwright (carga, juego, muerte, retry, debug).
3. Los 11 parámetros físicos/preset core (`gravity`, `flapImpulse`, `maxFallSpeed`, `worldSpeed`, `gapSize`, `obstacleWidth`, `spawnGapDistance`, `maxGapShift`, `hitboxPadding`, `characterRadius`, `ceilingDeath`/`floorDeath`) son idénticos antes y después (diff-auditados).
4. El gap es igual o más legible que en la versión anterior (verificado con screenshot de obstáculos cercanos).
5. El personaje sigue siendo el elemento más cálido y legible del frame.
6. La paleta bloqueada en §3 no cambia sin un nuevo Art Direction Lock.
7. Las corridas automatizadas (Classic/Viral/Soft/Brutal) producen `avgScore`/`maxGapShift`/`violations` consistentes con la versión anterior (sin regresión de dificultad).
8. El README documenta el cambio con el mismo formato de versiones previas.

## 12. Recomendación Final

v0.4.1 queda como **base visual congelada**. El siguiente pase autorizado es **v0.5 — Obstacle Identity Pass, dirección D únicamente** (§5, §10): evolucionar el remate del gap (`drawStitchEdge`) sin tocar el cuerpo de la columna, el personaje, la paleta de fondo, el HUD ni la deuda de presets. El estudio de retraso del overlay de muerte queda explícitamente fuera de v0.5 (ver `v0.5.1`).

El mayor riesgo identificado es la **erosión incremental**: pequeños ajustes "inocentes" acumulados (un color aquí, un alpha allá) que con el tiempo desvían la identidad visual sin que ningún pase individual parezca una ruptura. Este documento es la referencia contra la cual auditar cada pase futuro — cualquier cambio que contradiga §3, §5 o §9 requiere un nuevo Art Direction Lock explícito, no una excepción silenciosa.
