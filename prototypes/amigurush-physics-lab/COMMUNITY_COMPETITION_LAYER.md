# AmiguRush — Community & Competition Layer v0.1

> Documento de dirección competitiva/social. Complementa a `UNIVERSE_BIBLE.md` (universo/IP) y a `ART_DIRECTION.md` (contrato visual) definiendo **cómo AmiguRush convierte el score-attack en una experiencia social, competitiva y viral**. **No es backend, no es implementación, no es UI final y no reemplaza `ART_DIRECTION.md`.** Todo lo aquí descrito es dirección de producto: requiere validación y promoción explícita antes de tocar código, y nada de esto altera física, presets, fairness, spawn, score, collision, hitbox ni telemetría.

## 1. Tesis Central

AmiguRush ya es competitivo sin saberlo. El loop "flap → esquiva → muere → reintenta", la fairness garantizada por `maxGapShift`, el `best`/`last` en `localStorage` y el reporte de muerte (score + fairness + preset) son, juntos, **toda la materia prima de una capa social** — solo falta nombrarla y darle forma.

La tesis: **AmiguRush no necesita un servidor para ser social.** Necesita que el estado que ya existe (tu marca, tu muerte, tu preset) sea *capturable y comparable*. La competencia es un subproducto natural del score-attack justo; el trabajo de esta capa es hacerla explícita, no inventarla.

## 2. Principios de la Capa Social

1. **Local-first, sin cuentas.** Coherente con el §Alcance del `README.md` ("sin tienda, login, backend, ranking"). La identidad del jugador es su dispositivo y su mejor marca, no un perfil.
2. **El desafío vive en la imagen.** Una captura de la pantalla de muerte (score + fairness + preset) es un reto completo y autocontenido. Quien la recibe tiene toda la información para igualarla. Cero infraestructura.
3. **Fairness como moneda de credibilidad.** El veredicto `Justa / Margen mínimo / Shift extremo` es lo que hace creíble una marca: "score 30 con Fairness: Justa" significa algo. La competencia se apoya en que las muertes son evitables, no aleatorias.
4. **El preset es la categoría.** Soft / Classic / Brutal / Viral ya son "ligas" balanceadas. Comparar marcas solo tiene sentido dentro del mismo preset, y eso ya está resuelto.
5. **Nada compite con el gameplay.** Toda capa social vive en menús, overlays de muerte y capturas — nunca dentro del frame de juego activo (respeta `ART_DIRECTION.md` §1: "el personaje es el sol del frame").
6. **Asíncrono por defecto.** No hay multijugador en tiempo real ni se asume conexión. La competencia es "tú contra una marca", no "tú contra una persona ahora mismo".

## 3. Los Tres Niveles de Competencia

AmiguRush escala socialmente en tres niveles, cada uno construido sobre lo anterior y sobre lo que **ya existe**:

### Nivel 1 — Contra ti mismo (existe hoy)
`best` y `last` en el HUD. El jugador ya compite contra su yo de hace 30 segundos. Es la base y no requiere nada nuevo.

### Nivel 2 — Contra una marca compartida (próximo, sin backend)
Un jugador comparte la captura de su muerte. Otro abre el juego, selecciona el mismo preset, e intenta superar ese número. El "match" vive enteramente en la imagen y en la memoria de los jugadores. Es el corazón del loop viral (§5).

### Nivel 3 — Contra una comunidad (eventual, requeriría backend — fuera de scope)
Leaderboards por preset, retos semanales, ghost replays compartibles. Esto **solo se consideraría si AmiguRush justifica inversión en infraestructura**, y está explícitamente fuera de cualquier roadmap del Physics Lab. Se documenta como horizonte, no como plan.

## 4. Mecánicas Sociales Derivadas (no implementadas)

Cada mecánica abajo deriva de un estado que ya existe. Ninguna está aprobada para implementación.

| Mecánica | Base existente | Qué agregaría | Riesgo |
|---|---|---|---|
| **Tarjeta de muerte compartible** | Overlay de muerte (score, fairness, preset, tiempo) | Un formato visual pensado para captura/screenshot (legible recortado) | Bajo — es presentación del estado actual |
| **Reto de preset** | Los 4 presets ya balanceados | "Te reto a superar X en Brutal" como convención social, no como feature de código | Ninguno — es convención cultural |
| **Ghost personal** | `last` score ya en HUD | Un indicador visual de "tu marca anterior" durante el run | Medio — no debe distraer del gameplay (ver §6) |
| **Racha personal** | `best` persistente | Contador de "días/sesiones mejorando" en menú | Bajo — vive en menú, no en juego |

## 5. Loop Viral (expansión de UNIVERSE_BIBLE §6)

El loop viral de AmiguRush tiene tres tiempos, todos anclados a estado capturable:

1. **El gancho "casi lo logré"**: la fairness garantizada hace que cada muerte se sienta evitable. Esto produce el reflejo de "una más" (retención) y el impulso de mostrarlo (viralidad). Sin fairness justa, no hay loop viral creíble — por eso `maxGapShift` es, indirectamente, una feature de marketing.
2. **La captura como unidad de difusión**: la pantalla de muerte es autosuficiente. Una imagen = un reto completo. No hace falta explicar reglas: el preset y el score lo dicen todo.
3. **El reto como respuesta**: quien recibe la captura no "ve un puntaje", recibe un desafío implícito en su mismo preset. La asimetría ("¿puedes superar esto?") cierra el loop y genera la siguiente captura.

**Regla del loop**: cualquier feature viral futura debe pasar la prueba de "una sola captura de pantalla del estado actual basta para que el reto tenga sentido". Si necesita una cuenta, un link o un servidor para entenderse, no pertenece a esta capa.

## 6. Riesgos y Líneas Rojas

- **Distracción del core**: cualquier elemento social dentro del frame de juego (ghost, contadores, badges) corre el riesgo de competir con Lanita o con la legibilidad del gap. Línea roja: **nada social se dibuja durante el gameplay activo salvo lo que ya existe en el HUD** (`best`/`last`/score/preset). Un ghost personal, si algún día se hace, debe ser tan sutil que no entre en conflicto con `ART_DIRECTION.md` §1 y §6.
- **Scope creep hacia backend**: el Nivel 3 (comunidad) es seductor pero es una trampa de scope. Mientras AmiguRush sea un Physics Lab + producto local-first, **el Nivel 3 no se toca**. Documentarlo no lo autoriza.
- **Falsa urgencia viral**: la ausencia de backend limita el techo viral, pero esa es una decisión consciente (cero costo, cero superficie de privacidad, cero infra). No es un problema a resolver con prisa.
- **Integridad de marcas**: sin servidor no hay validación anti-trampa. Esto es aceptable en Niveles 1-2 (la competencia es social/de confianza, no oficial). Cualquier marca "oficial" requeriría Nivel 3, que está fuera de scope.
- **Coherencia de fairness**: la credibilidad de toda la capa depende de que el veredicto de fairness siga siendo honesto. Cualquier cambio futuro a `maxGapShift` o al cálculo de fairness es, de hecho, un cambio a la capa competitiva — y debe tratarse con ese peso.

## 7. Relación con los Documentos Existentes

- `ART_DIRECTION.md` sigue siendo el **contrato visual canónico**. Esta capa no introduce excepciones a su paleta, principios ni reglas Do/Don't. Cualquier UI social futura debe pasar por un Art Direction Lock incremental.
- `UNIVERSE_BIBLE.md` define el universo y ya esboza el loop viral (§6) y el pilar social (§7); este documento **expande y operacionaliza** esa dirección sin contradecirla.
- El roadmap activo sigue siendo el de `ART_DIRECTION.md` §10 (v0.5 → v0.5.1 → v0.6). Esta capa **no se adelanta** a ese roadmap ni lo reordena.
- Nada de este documento está aprobado para implementación. Es dirección competitiva/social, no un backlog.

## 8. Recomendación Final

La capa social de AmiguRush ya está latente en el código: vive en el overlay de muerte, en los presets balanceados y en la fairness garantizada. El trabajo futuro **no es construir un sistema social, es hacer visible el que ya existe** — empezando por el Nivel 2 (marca compartida vía captura), que no requiere una sola línea de backend.

**Hoy, nada cambia.** El Physics Lab sigue siendo la prioridad, `ART_DIRECTION.md` sigue gobernando el arte, y el roadmap activo sigue siendo v0.5 → v0.5.1 → v0.6. Este documento solo asegura que, cuando AmiguRush esté listo para pensar en comunidad, la conversación empiece desde "potenciemos lo que ya tenemos" y no desde "construyamos un backend que probablemente no necesitamos".
