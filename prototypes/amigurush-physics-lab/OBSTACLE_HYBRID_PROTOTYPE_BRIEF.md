> **Nota:** borrador para auditoría humana. No es implementación ni persistencia en repo. No modifica `ART_DIRECTION.md` ni ningún documento existente. No autoriza cambios en el Physics Lab. Listo para revisión antes de hacerse canónico.

# OBSTACLE_HYBRID_PROTOTYPE_BRIEF.md

AmiguRush Physics Lab — Brief del prototipo aislado del obstáculo híbrido honesto.

---

## 1. Propósito del documento

Este documento define con precisión **qué se va a probar en el prototipo aislado del obstáculo híbrido honesto** de AmiguRush. Es el paso que `DESIGN_RECONCILIATION.md` (§15) autoriza y exige antes de cualquier cambio de obstáculo en el Physics Lab canónico.

Su función es única: preparar una futura tarea de implementación segura, acotada y reversible. No implementa nada. No modifica nada en el Physics Lab. No cambia ningún documento canónico. Es el plano del experimento — el experimento en sí viene después, en un entorno aislado, con este brief como única fuente de alcance.

---

## 2. Estado y alcance

**Autorizado por:** `DESIGN_RECONCILIATION.md` (PASS, commit `362d822`), §15 y §19.
**Autoriza:** un prototipo aislado del obstáculo híbrido. Solo eso.
**No autoriza:** ningún cambio en el Physics Lab canónico, en `ART_DIRECTION.md`, en la paleta, en la física, en la hitbox, en el spawn, en el score, en la telemetría, en los presets ni en ningún documento existente.

El Physics Lab canónico (rama `claude/wonderful-heisenberg-m6djxv`, HEAD `362d822`) permanece intacto durante y después de este prototipo, salvo que el resultado del QA (§21) desemboque en un nuevo Art Direction Lock aprobado — proceso que este brief no inicia ni preautoriza.

---

## 3. Hipótesis principal

> El obstáculo híbrido honesto puede aumentar la identidad visual por mundo sin sacrificar hitbox honesta, lectura del gap, muerte justa, retry inmediato, legibilidad móvil ni compatibilidad procedural.

Esta hipótesis es falsable: si el prototipo demuestra que cualquier variante del híbrido compromete la lectura del gap o la percepción de muerte justa, la hipótesis se rechaza para esa variante. El fallback documentado es la Dirección D actual.

---

## 4. Qué problema valida el prototipo

1. **¿Puede el cuerpo honesto coexistir con decoración temática exterior sin confundir el gap?**
2. **¿La muerte junto al obstáculo híbrido se percibe justa** a velocidad real y en clip/replay?
3. **¿El gap se lee instantáneamente** a velocidad real en pantalla de móvil, con decoración presente?
4. **¿La variación visual por mundo** (Pradera simple vs. Carnaval de alta carga) **mantiene el mismo nivel de legibilidad** sin degradarse en el caso complejo?
5. **¿El híbrido es reproducible proceduralmente** sin assets externos?

Estas cinco preguntas son las únicas que el prototipo debe responder. Cualquier otra pregunta queda fuera de alcance.

---

## 5. Qué NO valida este prototipo

- No valida la paleta canónica del Physics Lab (la paleta del prototipo puede diferir; no cambia la del canónico).
- No valida el personaje (Pompón o representación actual).
- No valida el HUD, los menús, el leaderboard ni ninguna pantalla de UI.
- No valida el backend, el ranking, los records ni ningún sistema social.
- No valida la física, los presets de dificultad, el spawn ni el score.
- No valida assets externos (fuera de alcance futuro).
- No valida fuentes externas ni audio.
- No valida la tienda, los cosméticos ni la monetización.
- No decide si el híbrido es "mejor" en términos de atractivo estético general: solo decide si es **seguro** en términos de fairness y legibilidad.

---

## 6. Jerarquía documental aplicable

Durante el prototipo, los documentos se aplican en este orden:

1. **`ART_DIRECTION.md` (PASS)** — su contenido sobre física, hitbox, fairness, spawn y principios de arte sigue vigente. Solo las reglas visuales de obstáculos están en evaluación.
2. **`VIRAL_GAME_LOOP.md` (PASS)** — muerte justa y retry inmediato son no-negociables. Son los criterios de fallo del §19.
3. **`DESIGN_RECONCILIATION.md` (PASS)** — define los candados del híbrido honesto (§12 de ese documento). Este brief los operacionaliza.
4. **`VISUAL_DESIGN_BIBLE.md` (PASS)** — reglas visuales de contraste, saturación y zona muerta decorativa.
5. **`UNIVERSE_BIBLE.md` (PASS)** — arquetipos temáticos de obstáculo por mundo. Son la inspiración visual, no la hitbox.

El prototipo **no tiene autoridad documental**: sus resultados informan un posible nuevo Art Direction Lock, pero no lo crean.

---

## 7. Definición del obstáculo híbrido honesto

El obstáculo híbrido honesto se define por estas cuatro propiedades:

1. **Cuerpo de colisión:** siempre una columna recta y rectangular. La geometría de colisión no varía entre mundos ni entre variantes visuales.
2. **Piel visual:** la columna puede tener una textura o patrón procedural temático (lana, ovillo, cinta, fieltro) que varía por mundo. La piel no altera la geometría de colisión.
3. **Decoración exterior:** los motivos temáticos (aguja como remate, botón como acento, ovillo como forro) viven exclusivamente en la cara exterior del cuerpo (alejada del gap) y en los extremos no navegables de la columna.
4. **Zona muerta decorativa:** existe un margen explícito alrededor del espacio navegable (el gap) donde ningún elemento visual entra. La magnitud de ese margen es una variable del prototipo (ver §9).

Si alguna de estas cuatro propiedades se viola, el obstáculo deja de ser híbrido honesto y el prototipo falla en el criterio correspondiente.

---

## 8. Variables congeladas

Las siguientes variables **no cambian** durante el prototipo. Cambiarlas invalidaría los resultados:

- Hitbox del obstáculo (dimensiones de colisión).
- Tamaño y posición del gap.
- Velocidad de desplazamiento del obstáculo.
- Física del jugador (gravedad, impulso de tap).
- Presets de dificultad y spawn.
- Score, telemetría y fairness.
- Frecuencia y ritmo de aparición de obstáculos.
- Canvas 2D procedural como motor de renderizado.
- Principio fundamental: cuerpo de colisión rectangular y recto.

---

## 9. Variables permitidas

Las siguientes variables **pueden** modificarse en el prototipo para explorar el híbrido:

- **Textura/patrón del cuerpo:** diseño procedural que sugiere lana, ovillo, cinta o fieltro según el mundo.
- **Decoración exterior:** motivo temático en la cara externa de la columna y en los extremos.
- **Remate del extremo:** forma del extremo superior/inferior de la columna (aguja decorativa, ovillo, almena) siempre en el extremo no navegable.
- **Paleta visual del obstáculo:** color y tono del cuerpo y la decoración, por mundo.
- **Magnitud de la zona muerta decorativa:** el margen en píxeles (o porcentaje del gap) que se deja libre alrededor del espacio navegable. Se prueba con al menos dos valores (conservador y más ajustado) para encontrar el mínimo seguro.
- **Intensidad de la decoración:** qué tan prominente o discreta es la piel temática.

Cada variable se documenta en el resultado del prototipo con el valor específico que pasó o falló el QA.

---

## 10. Mundos mínimos a prototipar

El MVP del prototipo incluye **dos mundos obligatorios** y **uno opcional**:

- **Obligatorio 1 — Pradera Hilván:** caso simple, riesgo de prop puntiagudo.
- **Obligatorio 2 — Carnaval de Ovillos:** caso de alta carga visual, riesgo de saturación.
- **Opcional — Cuna Estelar:** caso de contraste oscuro, riesgo de bajo contraste.

El prototipo se considera válido con los dos obligatorios. Cuna Estelar se añade si los dos primeros pasan y queda tiempo/recursos dentro del sandbox.

---

## 11. Pradera Hilván: objetivo visual y riesgos

**Arquetipo según `UNIVERSE_BIBLE.md`:** agujas de tejer bajas y espaciadas.
**Objetivo visual del híbrido:** columna con remate de aguja decorativa en el extremo superior/inferior, fuera del gap. La aguja refuerza la identidad de "herramienta de tejido" sin ser la forma que colisiona.

**Riesgos a verificar:**
- **Riesgo 1 — Aguja percibida como hitbox:** el jugador o el espectador de un clip puede asumir que la punta de la aguja es lo que mata, y no el borde del cuerpo rectangular. → Mitigación: la aguja está en el extremo, claramente fuera del espacio de gap; el cuerpo tiene un contraste visual claro como "lo que colisiona".
- **Riesgo 2 — Confusión del borde del gap:** el remate de aguja puede "señalar" hacia el interior del gap aunque no entre en él. → Mitigación: la zona muerta decorativa mantiene el remate separado del espacio navegable.
- **Riesgo 3 — Prop demasiado plano/genérico:** sin la aguja, la columna crema puede verse igual que en el Physics Lab base. → Mitigación: la piel procedural de lana del cuerpo aporta identidad incluso sin el remate.

**Qué se considera éxito en Pradera:** el gap se lee limpio, la aguja decorativa no genera duda sobre la hitbox, y una muerte junto al obstáculo se ve justa en clip.

---

## 12. Carnaval de Ovillos: objetivo visual y riesgos

**Arquetipo según `UNIVERSE_BIBLE.md`:** torres de ovillos apiladas.
**Objetivo visual del híbrido:** columna con forro procedural de ovillo (textura circular/enrollada) en la cara exterior y extremos. Los ovillos son el "revestimiento" del cuerpo recto; el gap permanece limpio.

**Riesgos a verificar:**
- **Riesgo 1 — Saturación que tapa el gap:** el mundo Carnaval tiene la paleta más vibrante del arco. La combinación de fondo saturado + obstáculo con forro de ovillo colorido puede reducir el contraste entre obstáculo y fondo, y entre obstáculo y gap. → Mitigación: el cuerpo del obstáculo mantiene un tono deliberadamente más neutro/oscuro que el fondo y el gap.
- **Riesgo 2 — Ruido visual:** múltiples elementos (fondo animado, ovillos en el cuerpo, remates) compiten con la lectura del gap. → Mitigación: la decoración del obstáculo es el elemento más discreto cerca del gap; la "zona de calma cromática" alrededor del gap está en el borde del obstáculo, no en el fondo.
- **Riesgo 3 — Ovillos que invaden el gap:** el forro circular puede percibirse como rebasando el borde honesto del cuerpo. → Mitigación: zona muerta decorativa explícita; el forro se aplica como textura 2D en la cara exterior, no como forma que sobresale.
- **Riesgo 4 — Muerte ambigua en clip:** en un clip de stream con fondo de carnaval, la muerte junto al obstáculo puede verse confusa. → Este es el criterio de QA más exigente para este mundo.

**Qué se considera éxito en Carnaval:** el gap se lee de manera inequívoca a pesar de la carga visual del fondo; el obstáculo es el elemento más legible de la capa jugable; la muerte en clip se ve justa.

---

## 13. Cuna Estelar (opcional): objetivo visual y riesgos

**Arquetipo según `UNIVERSE_BIBLE.md`:** estrellas de fieltro y agujas de luna.
**Objetivo visual del híbrido:** columna con piel oscura afelpada (fieltro navy) y borde luminoso procedural (hilo fosforescente o tono claro) como delimitador del gap. La lectura se hace por **contraste de luz**, no por color.

**Por qué es el caso más arriesgado:** sobre fondo navy, el riesgo de bajo contraste entre obstáculo y fondo es el mayor del arco. Si el cuerpo del obstáculo no contrasta suficientemente, el gap puede no leerse.

**Riesgos a verificar:**
- **Riesgo 1 — Bajo contraste obstáculo/fondo:** cuerpo oscuro sobre fondo oscuro. → Mitigación: borde luminoso del cuerpo como delimitador; la arista del obstáculo es el elemento más brillante de la capa jugable.
- **Riesgo 2 — Estrella decorativa confundida con hitbox:** una estrella de fieltro en el extremo puede parecer un prop que "punta" hacia el jugador. → Mitigación: las estrellas en el extremo, zona muerta decorativa estricta.
- **Riesgo 3 — Muerte invisible:** en un fondo muy oscuro, la muerte puede ocurrir sin que el espectador vea claramente el obstáculo. → Criterio de fallo directo.

**Cuándo incluirlo:** solo si Pradera y Carnaval pasan el QA. Cuna Estelar es el stress test de contraste; si los dos primeros fallan, Cuna Estelar no aporta información útil.

---

## 14. Reglas de zona muerta decorativa

La zona muerta decorativa es el margen alrededor del espacio navegable (el gap) donde ningún elemento visual entra. Es el candado más importante del híbrido honesto.

Reglas operativas para el prototipo:
- La zona muerta tiene un valor mínimo a determinar durante el prototipo. Se recomienda probar con **dos valores**: un margen conservador (amplio) y uno ajustado.
- El margen conservador es el punto de partida; se ajusta hacia abajo solo si el QA confirma que el ajustado también es seguro.
- El margen se aplica en ambas caras del gap (borde inferior de la columna superior y borde superior de la columna inferior).
- Dentro de la zona muerta: solo el cuerpo recto del obstáculo, sin textura orgánica, sin decoración, sin remates.
- El resultado del prototipo debe documentar qué valor de margen pasó el QA visual.

---

## 15. Reglas de lectura del gap

El gap debe leerse como el espacio seguro de navegación, sin ambigüedad, en todas las condiciones del prototipo:
- El borde del gap (arista del cuerpo) debe ser el elemento visual más claro en la zona de colisión, tanto en valor de luz como en contraste.
- No puede haber ningún elemento visual (decoración, textura, remate) que haga el gap parecer más estrecho de lo que la hitbox define.
- No puede haber ningún elemento visual que haga el gap parecer más ancho de lo que la hitbox define (falsa seguridad).
- La lectura del gap debe ser igualmente clara con el obstáculo en reposo y en movimiento a velocidad real.
- La lectura del gap debe ser igualmente clara en el mundo de mayor saturación (Carnaval) y en el de menor contraste (Cuna Estelar, si entra).

---

## 16. Reglas de decoración exterior

La decoración temática puede existir en las siguientes zonas únicamente:
- **Cara exterior de la columna:** la cara opuesta al gap. Aquí puede vivir el forro de ovillo, la textura de rama, el patrón de patchwork, etc.
- **Extremo superior de la columna superior:** el remate de aguja, almena o estrella. Nunca apuntando hacia el interior del gap.
- **Extremo inferior de la columna inferior:** ídem.
- **Superficie lateral exterior:** los laterales del cuerpo (paralelos al eje de desplazamiento) pueden tener textura procedural.

La decoración no puede existir en:
- La cara interna del cuerpo (la cara que da al gap).
- Dentro de la zona muerta decorativa (§14).
- Como elemento independiente flotando cerca del gap.
- Como forma tridimensional que sobresale del cuerpo hacia el espacio navegable.

---

## 17. Reglas de contraste y saturación

- **Contraste mínimo cuerpo/fondo:** el cuerpo del obstáculo debe ser distinguible del fondo del mundo sin esfuerzo. En mundos oscuros (Cuna Estelar), se logra por luminosidad del borde; en mundos saturados (Carnaval), por neutralidad relativa del cuerpo respecto al fondo.
- **Contraste mínimo gap/cuerpo:** el espacio del gap debe distinguirse del cuerpo del obstáculo. No pueden tener tono similar.
- **Saturación del cuerpo en Carnaval:** el cuerpo del obstáculo en el Carnaval usa una saturación deliberadamente más baja que el fondo para que no compita con él; el contraste se logra por valor (oscuridad/claridad), no por saturación.
- **Sin decoración que eleve la saturación cerca del gap:** los elementos más saturados de la decoración van en la cara exterior, lejos del gap.
- **Prueba de legibilidad en escala de grises:** el gap debe leerse correctamente en una captura en blanco y negro. Si no, el contraste no es suficiente.

---

## 18. Criterios de éxito

El prototipo se considera exitoso si **todos** los siguientes criterios se cumplen en ambos mundos obligatorios:

1. **Lectura del gap:** a velocidad real en pantalla de móvil (tamaño real), el gap se lee sin esfuerzo ni duda.
2. **Muerte justa en tiempo real:** una muerte junto al obstáculo, vista a velocidad real, se percibe como consecuencia de un error del jugador, no de una forma ambigua del obstáculo.
3. **Muerte justa en clip/replay:** la misma muerte, vista en clip a cámara lenta, se percibe justa. No hay elemento visual que parezca el agente de la colisión más allá del cuerpo rectangular honesto.
4. **Zona muerta decorativa efectiva:** ningún elemento de la decoración ha entrado en el margen definido alrededor del gap.
5. **Invarianza de fairness:** dos variantes visuales del mismo obstáculo (misma hitbox, distinta piel) producen la misma percepción de fairness.
6. **Reproducibilidad procedural:** el obstáculo híbrido se reproduce sin assets externos, usando solo Canvas 2D.
7. **Legibilidad en escala de grises:** la captura en blanco y negro del obstáculo en cada mundo muestra el gap legible.

El éxito en ambos obligatorios habilita la redacción de un nuevo Art Direction Lock. El éxito en uno solo habilita ese lock solo para el mundo que pasó.

---

## 19. Criterios de fallo

El prototipo falla (y la variante evaluada queda descartada o requiere rediseño) si cualquiera de los siguientes ocurre:

1. El gap no se lee al instante a velocidad real en pantalla de móvil.
2. Una muerte junto al obstáculo, en clip a cámara lenta, parece injusta o ambigua.
3. Cualquier elemento de decoración entra dentro de la zona muerta del gap.
4. La decoración hace el gap parecer visualmente más estrecho de lo que la hitbox define.
5. En Carnaval, el obstáculo se pierde visualmente contra el fondo en algún momento del loop.
6. En Cuna Estelar (si entra), el cuerpo no contrasta suficientemente con el fondo navy para ser leído sin esfuerzo.
7. El obstáculo no puede reproducirse proceduralmente (requiere asset externo para la variante evaluada).
8. La piel temática altera la percepción de fairness respecto a la Dirección D base.

El fallo en cualquier criterio bloquea la promoción de esa variante. Se documenta el criterio exacto que falló y se propone un ajuste específico (reducir decoración, aumentar zona muerta, cambiar tono) antes de retestar.

---

## 20. Evidencia requerida

El prototipo debe producir las siguientes evidencias para que el QA sea auditable:

1. **Captura estática a tamaño real de móvil** de cada mundo: Pradera y Carnaval (y Cuna si entra), con el obstáculo en el centro del frame y el gap claramente visible.
2. **Captura en escala de grises** de cada mundo (misma composición).
3. **Clip de gameplay a velocidad real** de al menos 10 segundos en cada mundo, mostrando el obstáculo en movimiento y al menos una muerte junto a él.
4. **Frame a cámara lenta** del instante de muerte en cada mundo (congelado en el frame de colisión).
5. **Captura de la zona muerta decorativa marcada:** una anotación visual que muestre el margen libre alrededor del gap en cada variante.
6. **Comparativa lado a lado** de la Dirección D actual vs. el híbrido, en Pradera y en Carnaval, a tamaño de móvil.
7. **Registro de los valores de zona muerta** probados (conservador y ajustado) y cuál pasó el QA.

Toda la evidencia se adjunta al resultado del prototipo antes de cualquier propuesta de Art Direction Lock.

---

## 21. QA visual obligatorio

Antes de considerar que el prototipo pasa, se aplica este checklist. Un solo ítem sin cumplir bloquea la promoción:

- [ ] Gap legible a velocidad real en pantalla de móvil (tamaño real).
- [ ] Gap legible en escala de grises (contraste por valor, no solo por color).
- [ ] Muerte junto al obstáculo percibida como justa a velocidad real.
- [ ] Muerte junto al obstáculo percibida como justa en clip/frame congelado.
- [ ] Ningún elemento de decoración dentro de la zona muerta del gap.
- [ ] La decoración no hace el gap parecer más estrecho que la hitbox.
- [ ] El obstáculo contrasta visualmente con el fondo en todas las condiciones de cada mundo probado.
- [ ] El obstáculo se reproduce sin assets externos (Canvas 2D procedural).
- [ ] Comparativa con Dirección D: la percepción de fairness es equivalente o mejor.
- [ ] La variante fue evaluada en pantalla de móvil, no solo en monitor de diseñador.
- [ ] La variante fue evaluada a velocidad real de gameplay, no en modo estático ni ralentizado.
- [ ] Los valores de zona muerta decorativa están documentados con los valores exactos que pasaron.

---

## 22. Reglas de branch / sandbox

- El prototipo se desarrolla en **un branch de sandbox aislado**, separado de `claude/wonderful-heisenberg-m6djxv`.
- El nombre del branch debe indicar claramente que es experimental (p. ej. `sandbox/obstacle-hybrid-prototype`).
- **No se hace merge** al branch canónico durante ni después del prototipo, salvo que exista un nuevo Art Direction Lock aprobado.
- El sandbox puede ser descartado sin consecuencias si el prototipo falla.
- El sandbox **no debe modificar** `ART_DIRECTION.md`, `UNIVERSE_BIBLE.md`, `VISUAL_DESIGN_BIBLE.md`, `DESIGN_RECONCILIATION.md`, `COMMUNITY_COMPETITION_LAYER.md` ni `VIRAL_GAME_LOOP.md`.
- Cualquier archivo generado durante el prototipo (código, assets de prueba, capturas) es evidencia de prototipo, no código de producción.
- La implementación del sandbox se guía **exclusivamente** por este brief. Cualquier ampliación de alcance fuera de este documento requiere una nueva revisión del brief antes de proceder.

---

## 23. Qué queda prohibido

- Tocar el Physics Lab canónico (rama `claude/wonderful-heisenberg-m6djxv`).
- Hacer merge del sandbox al canónico.
- Modificar `ART_DIRECTION.md`.
- Cambiar física, presets, hitbox, spawn, fairness, score o telemetría.
- Introducir assets externos (imágenes, sprites importados).
- Introducir fuentes externas.
- Introducir audio.
- Usar decoración como hitbox (aguja, estrella, rama como forma de colisión).
- Colocar decoración dentro de la zona muerta del gap.
- Declarar el híbrido aprobado sin pasar el QA del §21.
- Declarar el híbrido aprobado en un mundo sin haberlo probado en ese mundo.
- Usar el resultado del prototipo como autorización automática para cambiar `ART_DIRECTION.md`.
- Ampliar el alcance del prototipo (UI, leaderboard, menús, personaje) sin revisar este brief.
- Proponer backend, monetización, ads, pay-to-win ni tienda.

---

## 24. Resultado esperado del prototipo

Al finalizar el prototipo, el equipo debe poder responder estas cinco preguntas con evidencia documentada:

1. ¿El obstáculo híbrido honesto es seguro en Pradera Hilván? (sí/no + evidencia del §20.)
2. ¿El obstáculo híbrido honesto es seguro en Carnaval de Ovillos? (sí/no + evidencia del §20.)
3. ¿Qué valor de zona muerta decorativa pasó el QA en cada mundo?
4. ¿Hay algún criterio del §19 que falló? Si sí, ¿cuál y en qué variante?
5. ¿El híbrido es reproducible proceduralmente sin assets externos?

El resultado se documenta en un **Prototype Result Report** (nuevo documento, fuera del alcance de este brief) que adjunta toda la evidencia del §20 y anota cada ítem del checklist del §21 con pass/fail y observaciones.

---

## 25. Decisión posterior al prototipo

Las decisiones posibles después del prototipo son exactamente cuatro:

**A. Éxito en ambos mundos obligatorios:**
Se redacta un nuevo Art Direction Lock específico de obstáculos que reemplaza la Dirección D con el obstáculo híbrido validado. El nuevo lock cita este brief y el Prototype Result Report como fuentes. Solo entonces se considera cualquier cambio en el Physics Lab canónico.

**B. Éxito parcial (un mundo pasa, el otro falla):**
El nuevo Art Direction Lock se redacta solo para el mundo que pasó. El mundo que falló mantiene la Dirección D hasta un nuevo ciclo de prototipo.

**C. Fallo en ambos mundos:**
El híbrido honesto en su definición actual se descarta o se redefine. La Dirección D sigue vigente. Se documenta qué falló y se propone una iteración específica del hybrid design antes de un nuevo prototipo.

**D. Fallo por prohibición (se tocó algo de §23):**
El prototipo se invalida, el resultado no es auditable y no puede usarse como base para ninguna decisión. Se resetea y se reintenta dentro del alcance correcto.

En ningún caso el resultado del prototipo **automáticamente** modifica `ART_DIRECTION.md`. Esa modificación requiere siempre un proceso explícito de revisión y aprobación.

---

## 26. Relación con documentos existentes

- **`ART_DIRECTION.md` (PASS):** manda sobre el Physics Lab canónico durante y después del prototipo. Este brief no lo modifica.
- **`DESIGN_RECONCILIATION.md` (PASS):** autoriza este prototipo en su §15 y §19. Este brief operacionaliza sus candados del §12.
- **`VISUAL_DESIGN_BIBLE.md` (PASS):** los §11, §14 y §17 de ese documento (obstáculos, zona muerta, contraste) se aplican directamente aquí.
- **`VIRAL_GAME_LOOP.md` (PASS):** la muerte justa (criterio de éxito §18, ítem 2 y 3) y el retry inmediato son los requisitos más duros del prototipo.
- **`UNIVERSE_BIBLE.md` (PASS):** provee los arquetipos temáticos visuales de Pradera y Carnaval. Son la inspiración de la piel del híbrido, no la hitbox.
- **`COMMUNITY_COMPETITION_LAYER.md` (PASS):** la clippeabilidad de la muerte (muerte justa en clip, evidencia §20 ítem 4) protege la viralidad y la confianza de la comunidad.

---

## 27. Recomendación final

**El prototipo es el próximo paso.** Es el único camino seguro para convertir el obstáculo híbrido de aspiracional a canónico, y este brief es su única fuente de alcance.

**Qué hacer ahora:**
1. Persistir este `OBSTACLE_HYBRID_PROTOTYPE_BRIEF.md` en repo (tras esta auditoría).
2. Crear el branch de sandbox (`sandbox/obstacle-hybrid-prototype` o similar).
3. Implementar el obstáculo híbrido honesto en Pradera Hilván primero (caso más simple).
4. Aplicar el checklist del §21 a Pradera.
5. Si pasa, proceder con Carnaval de Ovillos.
6. Producir toda la evidencia del §20.
7. Documentar el Prototype Result Report.
8. Decidir según §25.

**Qué no hacer:**
- No tocar el canónico hasta tener el Result Report completo y un nuevo Art Direction Lock aprobado.
- No ampliar el alcance del sandbox más allá de los obstáculos y los mundos definidos aquí.
- No declarar éxito antes de tener toda la evidencia del §20 y el checklist del §21 completo.

**Cómo saber que el brief se está respetando:** si en algún momento durante el prototipo alguien propone cambiar la física, introducir assets externos, tocar el canónico, o colocar decoración en el gap — ese es el momento de detener el trabajo, releer §23, y corregir el rumbo antes de continuar.
