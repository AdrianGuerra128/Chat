> **Nota:** borrador para auditoría humana. No es implementación ni persistencia en repo. No modifica `ART_DIRECTION.md` ni ningún documento existente. No autoriza cambios en el Physics Lab. Listo para revisión antes de hacerse canónico.

# DESIGN_RECONCILIATION.md

AmiguRush Physics Lab — Arbitraje formal del conflicto de obstáculos.

---

## 1. Propósito del documento

Este documento arbitra formalmente el conflicto documental sobre el diseño visual de los obstáculos de AmiguRush. Su misión es única y acotada: **decidir qué es canónico ahora, qué es aspiracional, qué requiere prototipo aislado y qué está prohibido** — respecto al diseño de obstáculos y solo a eso.

No modifica código, física, presets, hitbox, fairness, spawn ni telemetría. No reemplaza `ART_DIRECTION.md`. No autoriza por sí solo cambios en el Physics Lab. Es el documento que `VISUAL_DESIGN_BIBLE.md` (§2 y §11) establece como paso previo obligatorio antes de cualquier migración visual de obstáculos al prototipo.

---

## 2. Problema que resuelve

Existen tres documentos con PASS que describen los obstáculos de forma compatible pero no idéntica, y una regla canónica del Physics Lab que diverge de la visión de producto. Esa divergencia no es un error: es una evolución intencional capturada en distintas fases. El problema es que, sin un árbitro formal, cualquier diseñador o artista que lea el corpus documental puede no saber qué aplica hoy y qué es aspiracional.

Preguntas que este documento responde:
- ¿Qué forma de obstáculo rige en el Physics Lab hoy?
- ¿Pueden los mundos del Universe Bible tener obstáculos temáticos distintos?
- ¿Puede la decoración rodear la colisión sin mentir sobre ella?
- ¿Qué se puede prototipar sin tocar el Physics Lab?
- ¿Qué está prohibido por razones de fairness?

---

## 3. Jerarquía documental aplicable

Para arbitrar correctamente, se aplica esta jerarquía (de mayor a menor autoridad sobre el Physics Lab actual):

1. **`ART_DIRECTION.md` (PASS, commit `5707950`)** — Art Direction Lock vigente. Manda sobre el prototipo actual. No se altera por este documento.
2. **`VIRAL_GAME_LOOP.md` (PASS, commit `eb8b223`)** — Protege muerte justa, retry inmediato y cero ambigüedad. Sus requisitos son no-negociables para cualquier decisión de obstáculo.
3. **`VISUAL_DESIGN_BIBLE.md` (PASS, commit `66b6a06`)** — Dirección visual de producto/IP. Define reglas visuales futuras pero reconoce que toda migración pasa por este documento.
4. **`UNIVERSE_BIBLE.md` (PASS, commit `b2192c2`)** — Define mundos y sus arquetipos de obstáculo como dirección de IP. No tiene autoridad directa sobre el Physics Lab actual.
5. **`COMMUNITY_COMPETITION_LAYER.md` (PASS, commit `2d1c309`)** — No define obstáculos directamente, pero depende de que la muerte sea justa y la muerte se vea justa en cámara (clippeabilidad).

Regla de arbitraje: cuando un documento de jerarquía inferior proponga algo que un documento superior no permite aún, gana el superior. Este documento puede elevar aspiracional a canónico **solo si define candados que satisfacen todos los documentos de jerarquía superior.**

---

## 4. Fuentes canónicas y tensiones detectadas

### Lo que `ART_DIRECTION.md` establece (vigente)
- Obstáculos: **columnas tejidas** con cuerpo rectangular honesto.
- Dirección D aprobada: remate de ovillo/puntada gorda **en el borde del gap**.
- Canvas 2D procedural; sin assets externos; sin fuentes externas; sin audio.
- Máxima legibilidad del gap; no altera física ni hitbox.

### Lo que `UNIVERSE_BIBLE.md` propone (aspiracional)
Obstáculos temáticos por mundo:
- Pradera Hilván: agujas de tejer bajas y espaciadas.
- Bosque de Botones: ramas tejidas con botones colgantes.
- Carnaval de Ovillos: torres de ovillos apiladas.
- Río de Cintas: cintas onduladas y corrientes.
- Castillo Patchwork: agujas de hierro tejido y almenas patchwork.
- Cuna Estelar: estrellas de fieltro y agujas de luna.

### Lo que `VISUAL_DESIGN_BIBLE.md` establece (dirección de producto)
- La forma visible es la hitbox (principio maestro).
- Zona muerta decorativa: margen alrededor del gap donde nada decora.
- Los obstáculos pueden verse handmade sin mentir: textura y remates en el borde exterior, no en la cara del gap.
- La diferencia obstáculo-actual vs. obstáculo-de-producto se resuelve **aquí**.

### Lo que `VIRAL_GAME_LOOP.md` exige (no-negociable)
- Muerte justa: el jugador debe poder decir "fallé yo, ahí, por eso."
- Hitbox honesta como cimiento del loop adictivo.
- La muerte debe verse justa en cámara lenta (Twitch/clips).
- Cero ambigüedad; cero frustración injusta.

### Tensión central detectada
`ART_DIRECTION.md` aprueba el remate de ovillo **en el borde del gap** (Dirección D). `VISUAL_DESIGN_BIBLE.md` y `VIRAL_GAME_LOOP.md` exigen que la decoración **no invada la zona de colisión**. ¿Son compatibles?

Análisis: depende de la definición de "borde del gap". Si el remate está en el **extremo exterior de la columna** (donde la columna termina y el gap comienza) pero no entra en el espacio del gap, es compatible. Si el remate curva o redondea hacia el interior del gap — reduciendo visualmente el espacio navegable respecto al espacio de colisión real — no lo es. Esta ambigüedad es la que este documento resuelve.

---

## 5. Criterios de decisión

Se evalúa cada opción contra cinco criterios, en orden de prioridad descendente:

1. **Honestidad de hitbox.** La forma visible no puede mentir sobre la colisión. Es el criterio más alto; ninguna opción lo puede sacrificar.
2. **Legibilidad en movimiento.** El gap y el cuerpo del obstáculo se leen al instante a velocidad real en pantalla pequeña.
3. **Legibilidad en cámara (Twitch).** La muerte se ve justa a velocidad real y en clip/replay.
4. **Identidad de IP / crochet.** El obstáculo comunica el universo handmade.
5. **Coste de producción.** Procedural siempre que sea posible; asset real solo cuando la identidad lo exige y el proceso lo permite.

Una opción que falle el criterio 1 está descartada, independientemente de los otros. Una que falle el 2 está descartada salvo que se pueda remediar con candados de diseño.

---

## 6. Opciones evaluadas

### Opción A: Agujas / props temáticos puros

Cada mundo tiene su propio obstáculo temático (agujas, ramas, cintas, estrellas), visualmente muy diferente entre sí, con formas que pueden ser no-rectangulares.

### Opción B: Columnas tejidas con trim (Dirección D actual)

Cuerpo rectangular honesto con remate de ovillo/puntada en el extremo exterior de la columna, en el borde del gap. La columna en sí no varía; el remate identifica visualmente el gap sin alterar la colisión. Es lo que rige hoy.

### Opción C: Obstáculo híbrido honesto

Cuerpo de colisión recto y consistente (rectangular, legible, no ambiguo) con **decoración temática en el exterior** del cuerpo, fuera de la zona de colisión. La forma de colisión no varía entre mundos; la piel visual sí. El gap se delimita por el borde honesto del cuerpo, y la decoración solo existe en la cara exterior (alejada del gap).

### Opción D: Variación temática por mundo sin cambiar colisión

Los obstáculos varían visualmente entre mundos (color, textura, motivo) pero la geometría de colisión y la silueta general son siempre una columna recta. La decoración varía el "sabor" (lana verde en el bosque, ovillo satinado en el carnaval) sin cambiar la forma que colisiona.

---

## 7. Evaluación comparativa

| Criterio | Opción A (Agujas puras) | Opción B (Dirección D actual) | Opción C (Híbrido honesto) | Opción D (Variación temática) |
|---|---|---|---|---|
| Honestidad de hitbox | ⚠ Riesgo alto | ✅ Honesta | ✅ Honesta (con candados) | ✅ Honesta |
| Legibilidad en movimiento | ⚠ Variable | ✅ Alta | ✅ Alta (cuerpo recto) | ✅ Alta |
| Legibilidad en cámara | ⚠ Depende del mundo | ✅ Alta | ✅ Alta | ✅ Alta |
| Identidad de IP | ✅ Alta | 🟡 Media | ✅ Alta | 🟡 Media-alta |
| Coste de producción | 🔴 Alto (asset por mundo) | ✅ Bajo (procedural) | 🟡 Medio (cuerpo + piel) | 🟡 Medio (variación por mundo) |

**Opción A — por qué es peligrosa:** las agujas de tejer, estrellas de fieltro y ramas orgánicas son formas no-rectangulares cuya silueta de colisión es ambigua. El jugador no puede leer al instante dónde termina el obstáculo y empieza el gap; en movimiento, la forma hace que la muerte se sienta "al aire" o injusta aunque la hitbox sea un rectángulo. En Twitch/clips, una muerte cerca de una punta de aguja o un remate de estrella se ve cuestionable. Falla los criterios 1 y 2 bajo las condiciones reales del juego, y es cara de producir. No es la respuesta.

**Opción B — por qué es segura pero limitada:** la Dirección D es la decisión canónica más honesta que tiene el proyecto. El cuerpo recto garantiza legibilidad; el remate en el borde del gap es un guiño visual de identidad que no miente si está correctamente colocado (fuera del espacio navegable). Su límite: la variación visual entre mundos es baja (el obstáculo se parece mucho en todos), lo que puede generar monotonía visual a largo plazo. Es correcta como base, no como destino final.

**Opción C — por qué puede ser la mejor solución con candados:** el cuerpo de colisión es siempre recto y claro (hereda la honestidad de B); la piel visual puede variar por mundo (hereda la identidad de A); la decoración existe en el exterior del cuerpo, sin tocar el gap (resuelve el conflicto entre ambas). Es más cara que B y más segura que A. Su único riesgo es de ejecución: que la decoración "crezca" hacia el gap por descuido. Ese riesgo se mitiga con candados de diseño explícitos (§12). Es la dirección correcta para el producto, **bajo la condición de prototiparse aislado y validarse antes de promover al Physics Lab**.

**Opción D — por qué es una buena versión intermedia:** más identidad que B a bajo costo, pero menos temática que C. Adecuada si C resulta demasiado costosa en la fase de asset pass.

---

## 8. Decisión recomendada

La recomendación de este documento es la siguiente, estructurada en tres niveles:

**Para el Physics Lab actual (hoy):**
Mantener `ART_DIRECTION.md` intacto. La Dirección D (columnas tejidas + remate visible del borde del gap) sigue siendo el obstáculo canónico del prototipo. No se toca código, no se cambia la geometría, no se introducen assets externos.

**Para el producto / IP (dirección aspiracional):**
El **obstáculo híbrido honesto (Opción C)** es la dirección de producto. Define la forma hacia la que evolucionará el obstáculo cuando el proceso de prototipado la valide. No es un permiso de implementación: es la forma correcta, pendiente de validación.

**Para el siguiente paso:**
Construir un **prototipo aislado** del obstáculo híbrido (§15) que demuestre que el cuerpo recto permanece honesto a velocidad real y en cámara lenta, que la decoración exterior no confunde el gap, y que la muerte se siente justa. Si ese prototipo pasa QA (§16), se puede redactar un nuevo Art Direction Lock que lo promueva al Physics Lab.

---

## 9. Qué queda canónico ahora

- **Obstáculo del Physics Lab:** columnas tejidas con remate en el borde del gap (Dirección D de `ART_DIRECTION.md`).
- **Canvas 2D procedural, sin assets externos, sin fuentes externas, sin audio.**
- **Cuerpo de colisión: rectangular y honesto.**
- **Remate del gap:** en el extremo exterior de la columna; no invade el espacio navegable.
- Ninguna de las opciones A, C o D está autorizada en el Physics Lab hasta que pasen el prototipo aislado y QA del §16.

---

## 10. Qué queda aspiracional

- **Obstáculo híbrido honesto (Opción C):** cuerpo recto honesto + piel visual por mundo + zona muerta decorativa. Es la dirección de producto.
- **Variación visual por mundo:** Pradera con agujas espaciadas, Bosque con motivos de rama/botón, Carnaval con carácter de ovillo, Río con fluidez de cinta, Castillo con solidez de patchwork, Cuna con lectura por contraste luminoso. Aspiracional hasta validación.
- **Assets reales de obstáculo:** tiles de lana, remates temáticos. Aspiracionales hasta que el proceso de asset pass esté autorizado.

---

## 11. Qué queda prohibido

Los siguientes enfoques están **prohibidos** por razones de fairness, legibilidad o honestidad, independientemente de su valor estético:

- **Obstáculos con forma de colisión no-rectangular** (agujas puntiagudas, estrellas, ramas irregulares) cuya silueta de colisión no sea legible sin conocer la hitbox técnica.
- **Decoración que invada la cara interna del gap** (el espacio de navegación entre las dos columnas).
- **Decoración que reduzca visualmente el espacio navegable** respecto al espacio de colisión real (cualquier forma que haga el gap parecer más estrecho de lo que la hitbox permite).
- **Obstáculos que en cámara lenta o en clip se vean injustos**, aunque técnicamente la hitbox sea rectangular.
- **Assets externos, fuentes externas o audio** en el Physics Lab actual, salvo aprobación explícita.
- **Cambios en física, presets, hitbox, spawn, fairness o telemetría** por razones estéticas.

---

## 12. Reglas del obstáculo híbrido honesto

Estas reglas son los **candados de diseño** que hacen al Opción C segura. Si alguna se viola, el obstáculo deja de ser híbrido honesto y pasa a ser Opción A con sus riesgos.

1. **Cuerpo de colisión:** siempre rectangular y recto. La geometría de colisión no varía entre mundos.
2. **Zona muerta decorativa:** existe un margen de N píxeles (a definir en el spec técnico futuro) alrededor del gap donde ninguna decoración, lana, remate, botón ni prop puede entrar.
3. **Decoración en el exterior:** los motivos temáticos (agujas, botones, ramas, estrellas) viven en la cara **opuesta al gap** del cuerpo de la columna. Nunca en la cara interna.
4. **Remates en el extremo:** los remates de ovillo/puntada están en el extremo superior/inferior de la columna, reforzando el límite del cuerpo — nunca curvando hacia el espacio de navegación.
5. **Lectura en movimiento:** a velocidad real y en pantalla pequeña (móvil), el gap debe leerse instantáneamente, sin que la decoración compita.
6. **Lectura en cámara lenta:** la muerte junto al obstáculo debe verse justa en clip/replay, sin que ningún adorno parezca el agente de la colisión.
7. **Contraste del cuerpo:** el cuerpo de colisión siempre contrasta suficientemente con el fondo del mundo, independientemente de la piel visual.
8. **Invarianza de justicia:** cambiar la piel visual del obstáculo no puede alterar la percepción de fairness. Si una variación de piel hace que la muerte se sienta diferente, la variación está mal, no la hitbox.

---

## 13. Relación con mundos / biomas

El Universe Bible define arquetipos de obstáculo por mundo. Este documento los reinterpreta bajo el candado del híbrido honesto:

- **Pradera Hilván:** columna con piel de aguja de tejer gruesa. Las puntas de la aguja son decorativas, en el extremo exterior; el cuerpo es recto.
- **Bosque de Botones:** columna con piel de rama tejida y botones en la cara exterior. Ningún botón cuelga hacia el gap.
- **Carnaval de Ovillos:** columna con piel de ovillo satinado apilado. Los ovillos son el "forro" del cuerpo; el gap es limpio.
- **Río de Cintas:** columna con piel de cinta de raso en la cara exterior; las cintas se mueven pero el cuerpo es estático y recto.
- **Castillo Patchwork:** columna con piel de patchwork acolchado y remate de almena; la almena está en el extremo exterior.
- **Cuna Estelar:** columna con piel de fieltro afelpado y borde luminoso; lectura por contraste de luz contra el fondo navy. Sin decoración en el gap.

En todos los casos: **el cuerpo que colisiona es el mismo; la piel que se ve varía.** La silueta de navegación (lo que el jugador squints para leer el gap) siempre es rectangular y honesta.

---

## 14. Relación con hitbox, fairness y muerte justa

Este es el núcleo del conflicto y su resolución:

`VIRAL_GAME_LOOP.md` establece que la muerte debe ser **culpa legible del jugador**. Para que eso ocurra, la forma visible del obstáculo debe ser exactamente la forma de colisión — o más generosa. Nunca más restrictiva.

La Dirección D actual (columnas + remate en el borde) cumple esto si el remate está correctamente posicionado en el extremo exterior. El híbrido honesto lo cumple si respeta los candados del §12. Lo que viola este principio:
- Cualquier decoración que entre en el gap (hace la colisión parecer diferente al espacio visual disponible).
- Cualquier forma que en cámara lenta muestre la decoración como agente de la colisión.
- Cualquier piel que haga el gap parecer de tamaño diferente al que la hitbox define.

**Candado de fairness:** antes de cualquier cambio de obstáculo, el prototipo aislado se prueba específicamente en este punto. Si una persona viendo un clip de muerte junto al obstáculo puede dudar de si la colisión fue justa, el obstáculo no pasa QA.

---

## 15. Relación con prototipo aislado

El prototipo aislado del obstáculo híbrido es el paso de validación que convierte lo aspiracional en canónico. Sus requisitos:

- **Entorno:** separado del Physics Lab canónico. No toca código de producción.
- **Objetivo único:** demostrar que el híbrido honesto pasa los criterios 1 y 2 (honestidad de hitbox y legibilidad en movimiento) a velocidad real en pantalla de móvil, y el criterio 3 (legibilidad en cámara) en replay/clip.
- **Qué se prueba:** al menos dos mundos con pieles distintas (se recomienda Pradera Hilván como caso simple y Carnaval de Ovillos como caso de mayor carga visual).
- **Qué se mide cualitativamente:** ¿el gap se lee al instante? ¿La muerte junto al obstáculo se ve justa? ¿La decoración en el exterior no distrae del gap?
- **Fallback:** si el híbrido no pasa en algún mundo, ese mundo regresa a Opción D (variación cromática/textural, cuerpo sin decoración orgánica). Si falla en todos, se mantiene Dirección D del Art Direction Lock.
- **Resultado esperado del prototipo:** un nuevo Art Direction Lock específico de obstáculos que reemplaza la Dirección D con el híbrido validado — **nunca** un cambio directo al Physics Lab sin ese lock.

---

## 16. Checklist de QA visual antes de promover cambios

Antes de que cualquier cambio de obstáculo llegue al Physics Lab, debe pasar todas las verificaciones siguientes:

- [ ] El cuerpo de colisión es rectangular y su silueta se lee instantáneamente.
- [ ] El gap es visible sin necesidad de procesar la decoración.
- [ ] Ninguna decoración entra en la zona muerta del gap (N píxeles alrededor del espacio navegable).
- [ ] La decoración en la cara exterior del cuerpo no distrae la lectura del gap.
- [ ] Una muerte junto al obstáculo, vista en clip a velocidad real, se percibe justa.
- [ ] Una muerte junto al obstáculo, vista en clip a cámara lenta, se percibe justa.
- [ ] El obstáculo contrasta suficientemente con el fondo del mundo en todas las condiciones de luz/capa.
- [ ] Cambiar la piel del obstáculo no altera la percepción del gap ni de la muerte.
- [ ] El prototipo fue probado en pantalla de móvil a tamaño real (no en monitor de diseñador).
- [ ] El prototipo fue probado a velocidad real de gameplay (no en modo lento ni estático).
- [ ] Ninguna variación de piel introduce assets externos sin autorización explícita.

Un solo check sin cumplir bloquea la promoción.

---

## 17. Qué NO tocar todavía

- **Código del Physics Lab.** Ninguna decisión de este documento autoriza tocar el prototipo actual.
- **Física, presets, hitbox, fairness, spawn, score, telemetría.** Fuera del alcance de cualquier decisión visual.
- **`ART_DIRECTION.md`.** Sigue siendo el Art Direction Lock vigente. Solo se actualiza tras un nuevo lock aprobado post-prototipo.
- **Assets externos, fuentes externas, audio.** Siguen bloqueados en el Physics Lab.
- **Opciones A pura o variantes de A** sin rectángulo de colisión honesto.
- **Decoración en el gap** de ningún tipo.

---

## 18. Relación con documentos existentes

- **`ART_DIRECTION.md`:** mantiene autoridad total sobre el Physics Lab actual. Este documento no lo modifica; define el camino para que en el futuro se actualice de forma segura.
- **`UNIVERSE_BIBLE.md`:** sus arquetipos de obstáculo por mundo son ahora interpretados como **pieles del híbrido honesto**, no como formas de colisión independientes.
- **`VISUAL_DESIGN_BIBLE.md`:** el §11 de ese documento establecía este `DESIGN_RECONCILIATION.md` como paso previo; ese requisito queda satisfecho por este documento.
- **`VIRAL_GAME_LOOP.md`:** sus exigencias de muerte justa y retry son los criterios 1–3 de §5; las reglas del §12 y el checklist del §16 los protegen explícitamente.
- **`COMMUNITY_COMPETITION_LAYER.md`:** la clippeabilidad de la muerte (que la muerte se vea justa en cámara para Twitch/comunidad) está cubierta por el criterio 3 y el checklist del §16.

---

## 19. Recomendación final

**Decisión en tres líneas:**
El Physics Lab mantiene la Dirección D actual (columnas + remate, `ART_DIRECTION.md` intacto). El producto se dirige hacia el obstáculo híbrido honesto (Opción C con candados del §12). Antes de cualquier cambio en el prototipo, el híbrido se valida en entorno aislado con el checklist del §16; si pasa, se emite un nuevo Art Direction Lock; si no pasa, el fallback es Opción D o se mantiene la Dirección D.

**Secuencia de pasos:**
1. Persistir este `DESIGN_RECONCILIATION.md` en repo (tras esta auditoría).
2. Arrancar el **prototipo aislado** del obstáculo híbrido (al menos dos mundos: Pradera + Carnaval).
3. Aplicar el checklist del §16 al prototipo.
4. Si pasa: redactar nuevo Art Direction Lock de obstáculos y someter a revisión.
5. Si no pasa: documentar qué falló y corregir la definición del híbrido o retroceder a Opción D.
6. Solo después de ese lock aprobado: considerar cualquier cambio en el Physics Lab.

**Qué queda prohibido hasta que el proceso se complete:**
- Cambiar los obstáculos del Physics Lab.
- Introducir formas no-rectangulares de colisión.
- Introducir decoración en el gap.
- Interpretar este documento como autorización de implementación.

**Qué desbloquea este documento ahora mismo:**
- Claridad sobre qué se puede prototipar (el híbrido, en entorno aislado).
- Un lenguaje compartido para hablar de obstáculos sin ambigüedad.
- La seguridad de que el Physics Lab no se toca hasta que el proceso de validación se complete.
