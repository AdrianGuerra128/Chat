# VIRAL_GAME_LOOP.md

> Dirección de diseño del loop viral y adictivo de AmiguRush.
> Estado: borrador para revisión. Complementa `UNIVERSE_BIBLE.md` y `COMMUNITY_COMPETITION_LAYER.md`. No es backend, monetización ni implementación.

---

## 1. Propósito del documento

Este documento define **el loop viral y adictivo exacto de AmiguRush**: cómo una partida corta tipo Flappy se convierte en repetición, competencia, orgullo, clips y regreso semanal.

**Qué NO es:**
- No es backend (ni servidores, ni base de datos, ni antitrampa).
- No es monetización (ni tienda, ni ads, ni economía).
- No es UI final (ni medidas, ni assets de producción).
- No es implementación (ni código, ni arquitectura).

Es dirección de diseño de juego y de retención: define las **emociones, transiciones y reglas** del loop. Lo técnico vive en los specs futuros.

---

## 2. Tesis del loop viral

> **El mundo te abraza; el score te reta.**

AmiguRush enfrenta dos energías que la mayoría de juegos separa, y las hace convivir en el mismo segundo: la ternura del mundo tejido y la presión del número público. El envoltorio cozy hace que perder no duela; el núcleo implacable hace que ganar importe.

Cómo conviven:
- **Ternura:** baja la temperatura emocional; perder se siente "aww", no castigo. Es el antídoto del rage-quit.
- **Frustración justa:** la muerte siempre es culpa legible del jugador (hitbox honesta), no del azar. La frustración correcta alimenta el "otra vez"; la injusta expulsa.
- **Retry inmediato:** la frustración se canaliza en menos de 1 segundo, antes de que se enfríe.
- **Score chasing:** cada partida persigue un número que sube; el progreso es el bucle.
- **Ranking:** el número es público; tu posición frente a otros es la razón de volver.
- **Comunidad:** compites frente a una comunidad que te reconoce (esfera Staryuuki).
- **Clippeabilidad:** el "por poco" y el "nuevo récord" son material de clip sin esfuerzo.

Regla operativa: **cada fricción que se interpone entre morir y volver a intentar es veneno; cada elemento que hace público el progreso es combustible.**

---

## 3. Loop principal de 7 pasos

### 1. Ve una provocación: récord, rival, ranking o reto
- **Emoción:** provocación ("estás a 12 de [fan conocido]").
- **UI:** cabecera de menú con récord + rival; banner de reto semanal con countdown.
- **Trigger psicológico:** agravio social + meta cercana.
- **Riesgo:** dato pasivo que no motiva. → Mostrar delta y rival concreto, no solo el número.
- **Métrica esperada:** tasa "abrir → jugar".

### 2. Entra a jugar en menos de 1 segundo
- **Emoción:** impulso, cero fricción.
- **UI:** tap-to-play directo; sin menús intermedios ni interstitials.
- **Trigger psicológico:** gratificación inmediata.
- **Riesgo:** cualquier pantalla/anuncio que estorbe la entrada. → Entrada directa siempre.
- **Métrica esperada:** tiempo desde abrir hasta primer tap.

### 3. Juega una partida corta
- **Emoción:** foco, flow, tensión creciente.
- **UI:** HUD mínimo con score héroe; mundo legible; capa jugable nítida.
- **Trigger psicológico:** inmersión y dominio progresivo.
- **Riesgo:** UI que tape el gameplay o score escondido. → HUD limpio, número prominente.
- **Métrica esperada:** duración media de partida (debe ser corta, decenas de segundos).

### 4. Muere por poco
- **Emoción:** "¡casi!", tensión que pide desquite.
- **UI:** muerte instantánea y legible; la hitbox honesta hace la muerte justa.
- **Trigger psicológico:** near-miss (el casi-logro es más adictivo que ganar fácil).
- **Riesgo:** muerte percibida como injusta → abandono inmediato.
- **Métrica esperada:** retry rate como proxy de "muerte justa".

### 5. Ve score, delta y rival
- **Emoción:** evaluación rápida: "me faltó tan poco".
- **UI:** pantalla de muerte con score grande, récord, delta personal y delta al rival.
- **Trigger psicológico:** meta cuantificada y cercana.
- **Riesgo:** que el progreso no se sienta. → Siempre mostrar un delta o un "casi".
- **Métrica esperada:** sesiones que mejoran récord.

### 6. Reintenta o comparte
- **Emoción:** "otra vez" (si quedó cerca) u orgullo (si batió récord).
- **UI:** CTA retry primario, gigante, sin loading; CTA compartir secundario (fase social).
- **Trigger psicológico:** canalización de frustración / presumir logro.
- **Riesgo:** interstitial que rompa el impulso; compartir activado antes de tener algo digno.
- **Métrica esperada:** retries por sesión; clips por récord batido.

### 7. Vuelve por ranking semanal / evento
- **Emoción:** "esta semana lo logro" / "el reto de Staryuuki".
- **UI:** notificación/banner de reto con countdown; reset semanal visible.
- **Trigger psicológico:** oportunidad renovada + compromiso social.
- **Riesgo:** notificaciones que quemen al usuario. → Pocas, relevantes, ancladas a eventos reales.
- **Métrica esperada:** retorno semanal (retención D7).

El loop reinicia en el paso 1.

---

## 4. Micro-loop de gameplay (dentro de una partida)

El segundo a segundo, donde vive la sensación Geometry Dash:
1. **Tap:** el jugador da impulso (gravedad constante tira hacia abajo).
2. **Corrección de altura:** ajusta con taps el momento y la fuerza.
3. **Lectura del gap:** identifica el hueco del próximo obstáculo.
4. **Riesgo:** decide la línea; el margen es estrecho.
5. **Pasar el obstáculo:** ejecuta el timing.
6. **Recompensa inmediata:** +1 al score, micro-feedback (sonido/partícula suave).
7. **Tensión creciente:** la velocidad/densidad sube; el margen se estrecha.
8. **Error:** un tap tarde/temprano rompe la línea.
9. **Muerte justa:** colisión con la forma visible (hitbox honesta).

**Por qué la muerte debe sentirse culpa del jugador:** solo la muerte atribuible a un error propio genera "yo puedo hacerlo mejor" → retry. Si el jugador siente que lo mató la decoración, el azar o un hitbox tramposo, la emoción es injusticia → abandono. La honestidad de la hitbox no es solo una regla visual: es **el cimiento del loop adictivo.** Cada muerte debe poder reconstruirse mentalmente como "fallé yo, ahí, por eso".

---

## 5. Loop de muerte / retry

La pantalla de muerte es la bisagra: convierte morir en "una más".

Debe incluir:
- **Score grande:** lo primero que se lee, en tipografía display.
- **Récord personal:** como referencia inmediata.
- **Delta contra récord:** "+8 sobre tu récord" o "-3 para igualarlo".
- **Delta contra rival:** "a 4 de [rival]" — el agravio que dispara el retry.
- **CTA retry:** primario, gigante, sin loading.
- **Tiempo máximo para volver a jugar:** menos de 1 segundo desde el tap en "Intentar de nuevo" hasta estar jugando. Idealmente inmediato.
- **Qué NO debe interrumpir el retry:** anuncios, interstitials, animaciones largas de muerte, pantallas de carga, pop-ups de recompensa, transiciones lentas "cozy". Nada se interpone entre la intención de reintentar y el siguiente tap.

La estética cute hace que la muerte no se sienta castigo (reduce rage-quit); los deltas hacen que se sienta superable (provocan retry).

---

## 6. Loop de récord personal

El jugador compite primero consigo mismo — la base no-tóxica del sistema:
- **Mejor score:** ancla siempre visible (HUD, muerte, menú).
- **Nuevo récord:** momento de celebración clippeable (confeti de lana, número que estalla).
- **Casi récord:** muerte a 1–3 puntos del récord; el near-miss más adictivo → retry casi garantizado.
- **Mejora incremental:** cada récord pequeño cuenta; la curva de progreso personal es continua.
- **Motivación incluso al perder:** siempre hay un delta ("a 2 de tu récord") o un parcial que celebrar; ninguna partida es "vacía".

Este loop funciona para todos los niveles de habilidad y no depende de otros jugadores: es el suelo del sistema, el que sostiene la retención cuando el ranking aún no engancha.

---

## 7. Loop de rivalidad comunitaria

Sobre el récord personal se monta la capa social, que multiplica la motivación:
- **Ranking de comunidad:** la tabla de la esfera Staryuuki; cercana, reconocible, caliente.
- **Nombres de fans:** rivales que el jugador reconoce; el nombre da narrativa al pique.
- **"Estás a X puntos":** el delta concreto al de arriba; meta cercana y accionable.
- **Top 1 / 2 / 3:** el podio aspiracional con corona y medallas tejidas.
- **Rival visible:** siempre hay un "siguiente" a batir, nunca un vacío.
- **Staryuuki como reto especial:** el score del creador como entrada destacada a superar — el agravio definitivo y el clip más codiciado.

La diferencia con el global: el de comunidad es **rivalidad personal** (gente que conoces); el global es aspiración lejana. El loop diario vive en el de comunidad.

---

## 8. Loop semanal

El motor de retención a medio plazo:
- **Reset semanal:** cada lunes el ranking vuelve a cero; nadie acumula ventaja eterna.
- **Evento de stream:** un reto que el creador lanza en directo y los fans juegan en el momento; conecta Twitch con la app.
- **Reto semanal:** objetivo destacado ("supera 50 sin tocar amarillo") con countdown.
- **Oportunidad para nuevos:** un jugador nuevo puede ser top semanal sin historial; principal herramienta anti-abandono.
- **Cómo evitar que el global desmotive:** el global se presenta como "salón de la fama" aspiracional, no como pantalla de motivación diaria; la pantalla principal de competición es la semanal/comunidad, donde la meta es alcanzable. Tu fila siempre visible en cualquier tabla.

---

## 9. Momentos clippeables

### Nuevo récord
- **En pantalla:** score nuevo grande + "¡NUEVO RÉCORD!" + confeti de lana + criatura celebrando.
- **Por qué se comparte:** orgullo, subidón presumible.
- **Riesgo si se diseña mal:** celebración tibia o tapada por UI → no invita a capturar.

### Muerte a 1 punto
- **En pantalla:** score + "a 1 de tu récord" resaltado.
- **Por qué se comparte:** la tragedia cómica del "por poco".
- **Riesgo:** que el delta no se vea claro → se pierde la narrativa.

### Superar a Staryuuki
- **En pantalla:** tu nombre saltando por encima del del creador en el ranking de comunidad.
- **Por qué se comparte:** hazaña de estatus máximo dentro de la comunidad.
- **Riesgo:** que la entrada del creador no sea reconocible → no hay hazaña.

### Entrar al top 3
- **En pantalla:** subida al podio con corona/medalla nueva y marco de prestigio.
- **Por qué se comparte:** logro visible de estatus.
- **Riesgo:** transición de podio poco legible → no se entiende el salto.

### Reto semanal completado
- **En pantalla:** sello/cinta bordada de "reto conseguido" + cosmético.
- **Por qué se comparte:** pertenencia y logro comunitario.
- **Riesgo:** reto confuso → no se entiende qué se logró.

### Run absurda (score altísimo)
- **En pantalla:** número desorbitado + reacción de la criatura.
- **Por qué se comparte:** asombro, "miren esto".
- **Riesgo:** sin contexto de escala (récord/ranking) no impresiona.

### Fallo gracioso pero justo
- **En pantalla:** el instante del error, legible, con la criatura en pose cómica.
- **Por qué se comparte:** humor memético; lo cute suaviza el fallo.
- **Riesgo:** si la muerte parece injusta, el clip genera queja, no risa. La hitbox honesta es lo que lo hace gracioso y no frustrante.

---

## 10. Triggers psicológicos

### Permitidos (sanos)
- **"Casi lo logro":** near-miss; el motor del retry.
- **"Puedo mejorar":** progreso incremental visible.
- **"Estoy cerca de alguien":** delta a un rival concreto.
- **Reset semanal:** oportunidad renovada.
- **Reconocimiento social:** nombre y récord públicos.
- **Colección cosmética:** skins y coleccionables (sin ventaja).
- **Orgullo de comunidad:** pertenecer y representar a la esfera Staryuuki.

### Prohibidos
- **Vergüenza:** humillar al jugador por perder.
- **FOMO agresivo:** presión temporal angustiante.
- **Pay-to-win:** comprar puntuación o ventaja.
- **Presión excesiva:** agobio por notificaciones o metas inalcanzables.
- **Rachas castigadoras:** penalizar dejar de jugar.
- **Ranking humillante:** exponer derrotas o "perdiste contra X" agresivo.

La frontera: motivar con metas cercanas y orgullo, **nunca** con miedo, vergüenza o castigo.

---

## 11. Métricas de diseño

Dirección de métricas (no analytics técnico) que indicarían que el loop funciona:
- **Retries por sesión:** alto → la muerte invita a volver.
- **Tiempo hasta primer retry:** bajo → el retry es inmediato y sin fricción.
- **Partidas por sesión:** alto → el micro-loop engancha.
- **Porcentaje de muertes con retry:** alto → la muerte se percibe justa y superable.
- **Récords batidos por usuario:** sostenido → la curva de progreso motiva.
- **Regreso semanal:** alto → el loop semanal y los eventos funcionan.
- **Interacción con leaderboard:** alta → el ranking motiva, no decora.
- **Screenshots / clips generados:** presentes → los momentos clippeables cumplen.

Señal de alarma: muchas partidas pero pocos retries tras muerte = la muerte se siente injusta o el retry tiene fricción. Es la métrica que más protege el core.

---

## 12. Riesgos principales

- **Juego bonito pero no adictivo.** → Proteger el núcleo arcade: timing exigente, dificultad creciente, retry inmediato. Lo cute envuelve, no ablanda el core.
- **Ranking decorativo.** → Deltas y rivales concretos, CTA de retry omnipresente, tu fila siempre visible.
- **Muerte injusta.** → Hitbox honesta (forma visible = colisión); zona muerta decorativa alrededor del gap.
- **Retry interrumpido.** → Nada entre morir y reintentar: sin ads, sin loading, sin animaciones largas.
- **Demasiada UI.** → Jerarquía clara, score héroe, una acción primaria por pantalla.
- **Comunidad tóxica.** → Sin chat público, rival = uno mismo primero, lenguaje positivo, reset semanal.
- **Competencia sin recompensa emocional.** → Prestigio visible (corona/medalla tejida), celebración de récord clippeable.
- **Estética demasiado suave que mata la tensión.** → Núcleo duro / envoltorio blando: el segundo a segundo aprieta aunque el mundo sea tierno.

---

## 13. MVP del loop viral

Lo mínimo para probar el loop, sin backend:
- Score visible (HUD + muerte).
- Retry inmediato (menos de 1s, sin fricción).
- Récord personal persistente local.
- Pantalla de muerte con score + deltas + CTA retry.
- Mock leaderboard (datos locales/placeholder).
- Botón "Intentar batir récord".
- Ranking de comunidad fake/placeholder para el prototipo (demuestra la experiencia sin servidor).

Con esto se valida lo esencial: ¿la muerte invita a volver? ¿el delta provoca retry? ¿el leaderboard motiva aun siendo placeholder?

---

## 14. Qué NO hacer todavía

- Backend real.
- Monetización.
- Tienda ligada a poder.
- Ads entre retries.
- Ranking de amigos.
- Chat.
- Ligas/divisiones complejas.
- Temporadas monetizadas.
- Skins con ventaja.

Todo esto llega después de validar el loop con el MVP. Ninguno debe contaminar la prueba del core.

---

## 15. Relación con documentos existentes

- **`UNIVERSE_BIBLE.md`:** define el universo, cast y la fórmula del producto; este documento ejecuta su promesa de "adictivo + competitivo + viral" como loop concreto.
- **`COMMUNITY_COMPETITION_LAYER.md`:** define la capa social (rankings, récords, eventos); este documento define el **movimiento temporal** que la atraviesa (cómo se encadenan los pasos en el tiempo). Son complementarios: uno es el sistema, el otro es el ritmo.
- **`ART_DIRECTION.md`:** contrato visual; el loop respeta sus reglas (hitbox honesta, legibilidad).
- **Futuro `LEADERBOARD_SPEC.md`:** traduce el loop de rivalidad/semanal a especificación técnica (allí entra el backend).
- **Futuro `UI_KIT_SPEC.md`:** provee los componentes (HUD, pantalla de muerte, leaderboard, podio) que materializan cada paso del loop.

Este documento define **diseño de juego y retención, no implementación.**

---

## 16. Recomendación final

- **Qué prototipo hacer primero:** el **bucle muerte → retry → récord** jugable, con la pantalla de muerte (score + deltas + CTA) y un mock de Más Récords. Es el corazón adictivo y el de mayor apalancamiento. En paralelo, el prototipo de **obstáculo híbrido** valida la muerte justa que sostiene todo el loop.
- **Qué documento guardar en repo:** este `VIRAL_GAME_LOOP.md` ahora, junto a `UNIVERSE_BIBLE.md`, `VISUAL_DESIGN_BIBLE.md` y `COMMUNITY_COMPETITION_LAYER.md`, como dirección. Los specs técnicos entran después.
- **Qué NO tocar todavía:** backend, monetización, ads, chat, amigos, ligas, temporadas. Y no diluir el core arcade.
- **Cómo saber si el loop está listo para implementación:** cuando el prototipo demuestre que (1) la muerte se percibe justa, (2) el retry es inmediato y se usa, (3) el delta provoca "una más", (4) el leaderboard —aun placeholder— motiva, (5) un récord se siente clippeable, y (6) nada en el flujo se percibe tóxico. Cumplidos esos seis, el loop pasa a spec técnico.

Principios que este documento protege por encima de todo: **el retry inmediato, la muerte justa y la competencia sana.** Si una decisión futura amenaza cualquiera de los tres, está mal.
