# AmiguRush — Universe Bible v0.1

> Documento de producto / IP. Complementa a `ART_DIRECTION.md` (contrato visual) definiendo el universo narrativo, el cast, los mundos, la fórmula de producto, el loop viral y el pilar competitivo/social de AmiguRush. **No es un documento de implementación**: no crea prototipos, no cambia física, presets, fairness, spawn, score, hitbox, collision ni telemetría. Las decisiones aquí descritas son dirección de producto a futuro y requieren validación y promoción explícita antes de tocar código.

## 1. Premisa del Universo

AmiguRush ocurre en **El Ovillo** (*The Skein*): un universo nocturno e infinito hecho enteramente de lana, hilo y puntadas — sin bordes duros, sin metal, sin vidrio. Todo lo que existe fue tejido por alguien, en algún momento, con cariño y un poco de prisa. Los habitantes de El Ovillo son **amigurumis vivos**: pequeñas criaturas de crochet con personalidad propia, que se mueven por túneles de estambre tendidos entre ovillos gigantes que flotan como planetas.

La premisa central del juego: cada personaje "vuela" (en realidad, **rebota e impulsa**) a través de estos túneles tejidos, esquivando columnas de lana tensada — los obstáculos —, en una carrera personal contra su propio mejor tiempo y, eventualmente, contra el resto del mundo.

**Tono**: cálido, juguete, hecho-a-mano, ligeramente travieso. Nunca oscuro, nunca violento, nunca corporativo. La dificultad es real (el juego puede ser brutal), pero la *ambientación* siempre es acogedora — morir se siente como "se deshizo la puntada", no como una catástrofe.

## 2. Cast — Personaje Principal

### Lanita (nombre de trabajo)

- **Quién es**: el amigurumi naranja que ya existe en el Physics Lab (`#ffb35c` / `#d98c3f`). Es el protagonista y, narrativamente, el "tejido más reciente" de El Ovillo — todavía tiene una hebra suelta (su cola animada) porque nadie terminó de rematarlo.
- **Personalidad**: curioso, optimista, un poco torpe, persistente. No le teme a estrellarse — cada intento es información, no fracaso.
- **Rol de gameplay**: es el avatar por defecto y la cara de marca. Su silueta, paleta y expresión son **intocables** (ya protegidas por `ART_DIRECTION.md` §3-4).
- **Rol narrativo**: el "recién tejido" que explora El Ovillo por primera vez — esto justifica narrativamente que el jugador también esté aprendiendo las reglas del mundo.

## 3. Cast — Elenco Futuro (no implementado)

Estos personajes son **dirección de producto a futuro**, no contenido actual. Ninguno existe en el Physics Lab hoy. Se documentan para que cualquier expansión de cast tenga un marco consistente, no para autorizar su creación.

| Personaje (working name) | Rol | Nota |
|---|---|---|
| **Hilván** | Rival/ghost runner | Un amigurumi gris-azulado, más "prolijo" que Lanita — representa el fantasma del mejor corredor de un amigo o del propio jugador (ghost replay). |
| **Doña Aguja** | NPC narrador / tutorial | Un personaje tipo "tejedora mayor" que aparece solo en pantallas de menú/tutorial, nunca en gameplay activo — voz de la "regla del mundo". |
| **Nudos** (criaturas menores) | Obstáculos con personalidad | Versión futura de los obstáculos con micro-expresiones (ver §9, riesgo de legibilidad). |

Regla de cast: **cualquier personaje nuevo sigue la misma paleta y lenguaje de formas de `ART_DIRECTION.md` §3 y §7**, y ninguno puede competir visualmente con Lanita dentro del gameplay activo (principio §1 del Art Direction Lock: "el personaje es el sol del frame").

## 4. Mundos de El Ovillo

El Ovillo es un único espacio narrativo, pero se divide en **biomas** — variaciones temáticas del mismo lenguaje visual (lana + noche + violetas/naranjas), nunca escenarios completamente distintos.

### Bioma actual: **El Pasillo Nocturno** (Night Skein)
El bioma ya implementado — fondo violeta-navy con parallax de ovillos y motas, columnas tejidas. Es el "nivel cero", el lugar donde todo amigurumi nuevo aprende a volar. **Es la base de todo lo demás y no se reemplaza.**

### Biomas futuros (solo dirección, no roadmap activo)

| Bioma | Variación | Restricción |
|---|---|---|
| **El Costurero** | Tonos más cálidos (ámbar/rojo tenue), obstáculos con forma de carretes | Misma paleta base; solo desplaza el balance cálido/frío dentro de los rangos ya definidos |
| **El Telar Helado** | Tonos más fríos (azul/cian tenue) | Debe mantener a Lanita como elemento más cálido del frame incluso aquí |
| **El Ovillo Profundo** | Variante "endless/brutal" — más oscuro, parallax más lento | Reutiliza preset Brutal; no es un bioma nuevo de arte, es un *filtro* sobre el bioma actual |

Cada bioma futuro es, en términos de implementación, **una variación de paleta de fondo/obstáculos sobre el mismo motor y la misma silueta de personaje** — nunca un reskin completo ni una mecánica nueva. Esto preserva la regla "Canvas 2D puro, sin assets" y evita que el roadmap de mundos se convierta en una excusa para reescribir el juego.

## 5. Fórmula de Producto

AmiguRush se construye en **tres capas**, y el Physics Lab de hoy es, deliberadamente, solo la capa 1.

1. **Capa Core (existe hoy)**: el loop arcade — flap, esquiva, muere, reintenta. Vive en `prototypes/amigurush-physics-lab/`. Esta capa es la que `ART_DIRECTION.md` protege visualmente y la que toda la física/fairness ya calibrada sostiene.
2. **Capa de Progresión (futuro)**: best score persistente (ya existe vía `localStorage`), y eventualmente desbloqueos cosméticos *dentro de la paleta bloqueada* (ej. variantes de color de la hebra de Lanita, no personajes nuevos) y biomas (§4). Sin tienda, sin pagos — esto es producto, no monetización.
3. **Capa Social/Competitiva (futuro)**: ver §7.

**La fórmula no cambia**: sesiones de 10-60 segundos, fracaso instantáneo y justo (`maxGapShift` ya lo garantiza), reintento sin friction. Cualquier capa nueva debe **preservar la duración de sesión y el tiempo-a-reintento actuales** — son el corazón del producto, no un detalle.

## 6. Loop Viral

El loop viral de AmiguRush se apoya en tres mecánicas, todas derivadas de lo que **ya existe** en el Physics Lab:

1. **El veredicto de fairness como gancho de compartir**: cada muerte ya genera un mini-reporte (`Tiempo vivo`, `Score`, `Gap shift`, `Fairness: Justa/Margen mínimo/Shift extremo`). Este reporte es, narrativamente, "tu certificado de qué tan cerca estuviste" — el formato ideal para un screenshot de muerte que se comparte diciendo "miren qué tan injusto/justo fue esto".
2. **"Casi lo logré"**: la fairness garantizada por `maxGapShift` significa que las muertes se sienten evitables, no aleatorias — esto es lo que genera el reflejo de "una más" y el impulso de mostrarle a alguien "mira, casi pasaba".
3. **Ghost/ritmo personal**: el "Last score" ya visible en el HUD es la semilla de un loop de "vencer a mi yo de hace 30 segundos" — la base para un futuro ghost runner (Hilván, §3) sin necesitar backend.

**Regla del loop viral**: nada de esto requiere servidores, cuentas ni compartir activo de datos. Todo el gancho viral vive en lo que el jugador *ve y puede capturar localmente* (overlay de muerte, score, fairness). Cualquier feature viral futura debe poder explicarse como "una captura de pantalla del estado actual del juego es suficiente para que tenga sentido".

## 7. Pilar Competitivo / Social

El pilar social de AmiguRush es **asíncrono y local-first**, consistente con "sin tienda, login, ranking ni backend" de `README.md` §Alcance.

- **Hoy**: `best` y `last` score en `localStorage` — la competencia es contra uno mismo. Esto ya es, sin saberlo, la primera capa del pilar social: "¿superaste tu mejor marca?"
- **Próximo nivel conceptual (no implementado)**: un "desafío" es simplemente una captura de pantalla de la pantalla de muerte (score + fairness + preset) compartida fuera del juego — el receptor abre el juego, juega el mismo preset, y trata de superar ese número. **Cero infraestructura**: el desafío vive en la imagen, no en una cuenta.
- **Eventual (años, no meses)**: si AmiguRush justifica backend algún día, el primer feature social real sería un leaderboard por preset (Classic/Viral/Soft/Brutal son, de hecho, "modos de competencia" ya nombrados y balanceados) — pero esto está explícitamente **fuera de cualquier roadmap visual o de Physics Lab actual**.

**Pilar competitivo interno**: los cuatro presets ya funcionan como una escalera de dificultad reconocible ("¿ya pasaste de Soft a Classic? ¿Ya sobreviviste en Brutal?") — esto es, en sí mismo, progresión social informal sin necesitar un sistema nuevo.

## 8. Relación con ART_DIRECTION.md y el Physics Lab

- `ART_DIRECTION.md` sigue siendo el **contrato visual canónico**. Este documento no lo modifica, no lo reemplaza y no introduce excepciones a su paleta, principios o reglas de Do/Don't.
- Ninguna idea de este documento (cast futuro, biomas, capas de progresión, pilar social) está aprobada para implementación. Son **dirección**, no **roadmap activo**.
- El roadmap activo sigue siendo el de `ART_DIRECTION.md` §10 (v0.5 → v0.5.1 → v0.6). Este Universe Bible no agrega, adelanta ni reordena ese roadmap.
- Cualquier futuro pase que quiera tomar algo de aquí (un bioma, un personaje, una mecánica social) debe primero pasar por un **Art Direction Lock incremental** que confirme que no rompe §1-§9 de `ART_DIRECTION.md`.

## 9. Riesgos y Límites

- **Riesgo de "scope creep narrativo"**: el mayor peligro de un documento de IP es que invite a justificar features porque "encajan en el universo". La regla es la inversa: el universo se ajusta para justificar lo que el gameplay y el arte ya soportan, no al revés.
- **Cast futuro y legibilidad**: cualquier personaje nuevo en pantalla durante gameplay activo (rivales, obstáculos con cara) corre el riesgo de competir visualmente con Lanita o con el gap — violaría §1 y §4 de `ART_DIRECTION.md`. Por eso "Nudos" (obstáculos con personalidad) está marcado explícitamente como riesgo, no como plan.
- **Biomas y identidad**: si un bioma futuro se siente "como un juego distinto" en lugar de "el mismo juego en otra parte de El Ovillo", se rompe la promesa de §4. La prueba de aceptación de cualquier bioma: un jugador debe reconocer instantáneamente que es AmiguRush.
- **Pilar social sin backend**: es una fortaleza (cero infraestructura, cero costo, cero superficie de privacidad) pero limita qué tan "viral" puede llegar a ser sin inversión futura. Esto es una decisión consciente, no una limitación temporal a resolver con urgencia.

## 10. Recomendación Final

Este Universe Bible existe para que, cuando llegue el momento de pensar en "qué sigue después del Physics Lab", exista un marco narrativo y de producto consistente con todo lo ya construido — en lugar de improvisar una historia que no encaje con la paleta, el personaje o el loop ya calibrados.

**Hoy, nada cambia.** El Physics Lab sigue siendo la prioridad, `ART_DIRECTION.md` sigue gobernando el arte, y el roadmap activo sigue siendo v0.5 → v0.5.1 → v0.6. Este documento solo asegura que, cuando ese roadmap se agote, la siguiente conversación sobre "qué es AmiguRush más allá de la física" empiece desde un lugar coherente — no desde cero.
