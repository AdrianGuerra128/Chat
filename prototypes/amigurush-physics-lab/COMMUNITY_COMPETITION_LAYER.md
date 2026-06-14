# COMMUNITY_COMPETITION_LAYER.md

> Dirección de producto para la capa competitiva, social y viral de AmiguRush.
> Estado: borrador para revisión. Complementa `UNIVERSE_BIBLE.md`. No es backend ni implementación.

---

## 1. Propósito del documento

Este documento define **cómo AmiguRush convierte un score-attack simple en una experiencia social, competitiva, viral y comunitaria.** Es dirección de producto y experiencia para la capa competitiva/comunitaria.

**Qué NO define:**
- No define backend (ni base de datos, ni servidores, ni APIs, ni antitrampa).
- No define implementación (ni código, ni arquitectura, ni stack).
- No define UI final (ni medidas exactas, ni assets de producción, ni layout pixel-perfect).
- No define monetización agresiva.

Es el puente entre el "por qué" del `UNIVERSE_BIBLE.md` (el componente competitivo es central) y los specs técnicos futuros (`LEADERBOARD_SPEC.md`). Aquí se decide la **experiencia y el sentido del sistema**; lo técnico viene después.

---

## 2. Tesis central

> **El récord es el campo de batalla adorable.**

AmiguRush no es "un juego cute". Es una arena de competición envuelta en lana. El mundo te abraza; el número te reta. Esa contradicción aparente no se evita: se usa como el encanto del producto.

Cómo conviven las fuerzas:
- **Cute / cozy** es el envoltorio: baja la temperatura del pique, hace que perder no duela y que ganar se sienta tierno. Es el antídoto contra la toxicidad.
- **Rivalidad** es el motor: tu posición frente a otros es lo que te hace volver.
- **Orgullo** es la recompensa emocional: tu nombre y tu récord son públicos y presumibles.
- **Score chasing** es el bucle: cada partida persigue un número que sube.
- **Twitch / community** es el escenario: compites frente a una comunidad que te reconoce (esfera Staryuuki).
- **Viralidad** es la consecuencia: la muerte por poco y el nuevo récord son clippeables.

La tesis en una frase operativa: **cada decisión de esta capa debe hacer que ganar se sienta adorable e importante a la vez.** Si solo es adorable, no motiva. Si solo es importante, se vuelve tóxico.

---

## 3. Objetivos de la capa competitiva

- **Aumentar retries:** que morir lleve siempre a otro intento en menos de 1 segundo.
- **Aumentar retención:** dar una razón recurrente para volver (ranking semanal, eventos).
- **Crear conversación:** que los scores y rivales den de qué hablar en la comunidad.
- **Generar clips:** que los momentos "por poco" y "nuevo récord" sean compartibles sin esfuerzo.
- **Activar comunidad:** conectar el juego con los streams y retos de Staryuuki.
- **Dar prestigio sin toxicidad:** estatus visible (top 1) sin humillar a nadie.
- **Conectar con eventos de stream:** que un stream pueda lanzar un reto que se juega en la app.
- **Hacer que cada score importe:** ningún intento es "vacío"; siempre hay un delta, una posición o un progreso que mostrar.

---

## 4. Tipos de ranking

### Récord personal
- **Qué muestra:** tu mejor puntuación histórica.
- **Dónde aparece:** HUD durante la partida, pantalla de muerte, cabecera del menú, pantalla Más Récords.
- **Por qué importa:** es el rival principal y siempre presente. Competir contra uno mismo es la base no-tóxica del loop: todos pueden superar su propio número.

### Ranking global
- **Qué muestra:** las mejores puntuaciones de toda la base de jugadores.
- **Cuándo usarlo:** como aspiración lejana y "salón de la fama"; referencia de techo.
- **Riesgos:** desmotiva si el jugador se ve en el puesto 80.000 y siente que es inalcanzable. Mitigación: **tu fila siempre visible** con tu posición, y nunca como pantalla principal de motivación diaria (esa es la de comunidad/semanal).

### Ranking semanal
- **Por qué es clave:** reinicia la competición cada semana; da a todos una oportunidad fresca de llegar al top.
- **Cómo resetea oportunidades:** el lunes el mundo vuelve a cero; el veterano no acumula ventaja eterna.
- **Por qué evita que los nuevos se rindan:** un jugador nuevo puede ser top semanal sin haber jugado meses. Es la principal herramienta anti-abandono.

### Ranking de comunidad Staryuuki
- **Por qué es el más importante emocionalmente:** compites contra gente que reconoces (fans, nombres conocidos, el propio creador). El agravio "estás a 12 de [fan conocido]" pega más que un desconocido global.
- **Cómo conecta con Twitch:** se ancla a la comunidad del stream; los retos del directo viven aquí; el creador puede ser una entrada destacada a batir.
- **Cómo se diferencia del global:** es más pequeño, más cercano, más caliente. El global es aspiración; el de comunidad es rivalidad personal.

### Ranking de amigos
- **Futuro posible:** competir contra tu círculo cercano (lista de amigos).
- **Cuándo implementarlo:** después de la fase de comunidad, cuando exista identidad social estable (avatares, nombres) y demanda real.
- **Riesgo si se hace demasiado pronto:** exige sistema de amigos/social graph (backend, invitaciones) y, si la base es pequeña, los rankings de amigos quedan vacíos y se sienten muertos. No es MVP.

---

## 5. Pantalla "Más Récords"

**No es una pantalla secundaria. Es una pantalla de motivación y rivalidad** — el campo de batalla adorable hecho UI.

- **Rol estratégico:** convierte el score-attack solitario en rivalidad social. Es de las pantallas que más razones de volver concentra.
- **Jerarquía visual:** el podio top 3 domina arriba; debajo, la lista; siempre visible, la fila del propio jugador con su delta al de arriba. El número y el nombre mandan sobre la decoración.
- **Top 1:** corona de hilo dorado + marco de estrellas de fieltro + peana más alta + su skin destacada. "Rey/reina de la semana".
- **Top 2 y 3:** medallas tejidas (plata/bronce), marcos más sobrios, peanas más bajas.
- **Coronas:** de hilo, tejidas — nunca metal frío.
- **Medallas:** de lana; estatus sin romper el cozy.
- **Banderas:** parches de fieltro pequeños junto al nombre (no banderas realistas que rompan el estilo).
- **Nombres de fans:** grandes y legibles. El nombre es el trofeo social.
- **Puntos:** prominentes, en tipografía display; el número es héroe.
- **Botón "Intentar batir récord":** CTA primario, omnipresente; devuelve al juego en menos de 1s.
- **Botón "Atrás":** secundario, claro pero discreto; nunca compite con el CTA primario.
- **Cómo debe sentirse:** ternura + prestigio. Acogedora pero con estatus real; al verla quieres jugar, no solo mirar.
- **Qué no debe pasar:** que se sienta un menú de consulta pasivo; que sature de medallas/coronas; que el texto pequeño sobre lana pierda legibilidad; que el jugador no encuentre su propia posición; que no haya salida directa al juego.

---

## 6. Pantalla de muerte / resultado

Es la bisagra del loop: **convierte la frustración de morir en el siguiente intento.** Debe ser rápida, honesta y motivadora.

Debe mostrar:
- **Score de la partida:** grande, lo primero que se lee.
- **Récord personal:** como referencia, junto al score.
- **Diferencia contra récord personal:** "+8 sobre tu récord" o "-3 para igualarlo".
- **Diferencia contra el próximo rival:** "a 4 de [rival]" — el agravio que provoca el retry.
- **Posición aproximada:** dónde quedaría ese score en el ranking relevante (comunidad/semanal).
- **CTA "Intentar de nuevo":** primario, gigante, sin loading; un tap y a jugar.
- **CTA futuro "Compartir":** secundario; activo en la fase social (no MVP), para clip/screenshot.
- **Feedback positivo aunque pierda:** siempre algo que celebrar (un "casi", un progreso, un récord parcial). Morir nunca es un callejón vacío.

Cómo conecta muerte → retry: la pantalla no es un muro, es un trampolín. El score y los deltas crean el "me faltó tan poco", y el CTA primario lo canaliza en el acto. La estética cute hace que la muerte no se sienta castigo, reduciendo el rage-quit.

---

## 7. Loop viral de 7 pasos

### 1. Ve ranking / rival / reto
- **Emoción:** provocación ("estás a 12 de [fan]").
- **UI:** cabecera de menú con récord + rival; banner de reto semanal con countdown.
- **Riesgo:** que el dato se sienta pasivo. Mitigación: mostrar el delta, no solo el número.
- **Métrica esperada:** mayor tasa de "abrir → jugar".

### 2. Juega en menos de 1 segundo
- **Emoción:** impulso inmediato, cero fricción.
- **UI:** tap-to-play directo; sin menús intermedios.
- **Riesgo:** pantallas o anuncios que estorben la entrada.
- **Métrica esperada:** tiempo desde abrir hasta primer tap.

### 3. Falla por poco
- **Emoción:** tensión, "casi lo logro".
- **UI:** muerte instantánea, legible; hitbox honesta que hace la muerte justa.
- **Riesgo:** muerte percibida como injusta (decoración invade el gap) → abandono.
- **Métrica esperada:** muertes percibidas como justas (vía retry rate alto).

### 4. Retry inmediato
- **Emoción:** "otra vez", canalización de la frustración.
- **UI:** CTA primario en la pantalla de muerte, sin loading.
- **Riesgo:** interstitial/anuncio que rompa el impulso.
- **Métrica esperada:** retries por sesión.

### 5. Supera score o queda cerca
- **Emoción:** logro o "tan cerca".
- **UI:** pantalla de muerte con score + deltas; celebración si hay récord.
- **Riesgo:** que el progreso no se note; score escondido.
- **Métrica esperada:** sesiones que mejoran récord.

### 6. Comparte / reta / aparece en ranking
- **Emoción:** orgullo, ganas de presumir.
- **UI:** momento "nuevo récord" clippeable; CTA compartir (fase social); entrada al ranking.
- **Riesgo:** activar compartir antes de que haya algo digno de presumir.
- **Métrica esperada:** clips/compartidos por récord batido.

### 7. Vuelve por ranking semanal o evento de stream
- **Emoción:** "esta semana lo logro" / "el reto de Staryuuki".
- **UI:** notificación/banner del reto con countdown; reset semanal visible.
- **Riesgo:** notificaciones molestas que quemen al usuario.
- **Métrica esperada:** retorno semanal (retención D7).

El loop reinicia en el paso 1.

---

## 8. Eventos de comunidad / Twitch

Diseño de **experiencia y sentido**, no de backend.

- **Reto semanal:** un objetivo destacado ("supera 50 sin tocar amarillo") con countdown; renueva la razón de volver.
- **Reto del stream:** un objetivo que el creador lanza en directo y los fans juegan en el momento; conecta el stream con la app en tiempo real.
- **"Bate el score de Staryuuki":** el score del creador aparece como entrada destacada a superar; el agravio definitivo.
- **Torneo de fans:** ventana competitiva con tabla propia y ganadores reconocidos públicamente.
- **Temporada limitada:** un mundo/tema activo por tiempo, con su ranking y cosmético; da frescura periódica.
- **Evento de cumpleaños:** del juego, del creador o del jugador; momento cálido con recompensa cosmética.
- **Skin / reward cosmético por participación:** recompensa por sumarse, **siempre cosmética, nunca ventaja**.

Principio: los eventos son **ganchos de retorno y de comunidad**, no fuentes de poder. Ninguno altera la justicia del juego.

---

## 9. Prestigio visual

Ganar debe **verse**. El estatus es la recompensa, y debe leerse sin romper el tono cozy.

- **Corona tejida:** de hilo dorado para el top 1; firma de "rey/reina de la semana".
- **Marco especial top 1:** marco de estrellas de fieltro alrededor del avatar/fila.
- **Medallas top 2 / top 3:** de lana, plata/bronce; estatus claro, jerarquía limpia.
- **Cinta bordada de ranking:** banda/listón tejido que rotula la posición o el evento.
- **Efectos de celebración:** suaves, blandos, sin estridencia plástica.
- **Confeti de lana:** partículas tejidas al batir récord o al subir de podio.
- **"Nuevo récord" como momento clippeable:** el número estalla, la criatura celebra, la composición queda lista para screenshot/clip.

Cómo lograr prestigio sin romper el cozy: usar **materiales textiles para los símbolos de estatus** (corona de hilo, medalla de lana, cinta bordada) en lugar de metal frío y brillos plásticos; mantener la jerarquía clara con pocos elementos grandes en vez de muchos pequeños; dejar que el número y el nombre, no la decoración, carguen el peso del estatus.

---

## 10. Anti-toxicidad y competencia sana

Reglas duras:
- **Competir contra uno mismo primero:** el récord personal es el rival principal y siempre presente.
- **No humillar al jugador:** deltas que motivan ("a 12"), nunca que avergüenzan; sin "has perdido contra X" agresivo.
- **Mostrar progreso aunque pierda:** siempre hay un "casi", un parcial o un avance que celebrar.
- **Rankings semanales para renovar oportunidades:** nadie queda sepultado para siempre.
- **No chat público en el leaderboard:** elimina el principal vector de toxicidad.
- **No pay-to-win:** el dinero nunca compra puntuación ni ventaja.
- **Las skins nunca dan ventaja:** son cosméticas; jamás alteran hitbox, velocidad ni legibilidad.
- **Lenguaje positivo:** copys cálidos, de ánimo; el tono del juego baja la temperatura del pique.
- **Evitar presión excesiva:** sin contadores de derrotas, sin rachas que castiguen, sin notificaciones agobiantes.

La ternura del crochet no es solo estética: **es la herramienta principal de moderación emocional.** Úsala a propósito.

---

## 11. Shareability / clips

Qué hace compartible a AmiguRush:
- **Score visible:** siempre grande y claro en cámara.
- **Muerte justa:** la hitbox honesta hace que el clip se vea limpio, sin "me mató el aire".
- **Retry rápido:** el ritmo de intentos genera material continuo.
- **Ranking reconocible:** una tabla legible que el chat entiende de un vistazo.
- **Nombre del rival:** el "a 4 de [fan]" da narrativa al clip.
- **Momento "por poco":** la casi-victoria es el corazón del clip.
- **Nuevo récord:** el subidón presumible.
- **Top semanal:** el "lo logré esta semana" como hito.
- **Estética cute que suaviza la rivalidad:** lo adorable hace el contenido amable y memético, no agresivo.

Momentos clippeables propuestos:
- "Casi récord": muerte a 1–3 puntos del récord personal.
- "Nuevo récord": el estallido de celebración con confeti de lana.
- "Subida de podio": pasar de top 4 a top 3 (corona/medalla nueva).
- "Bate el score de Staryuuki": el instante exacto de superar al creador.
- "Reto del stream conseguido": cumplir el objetivo en directo.

---

## 12. MVP vs futuro

### MVP competitivo (lo mínimo)
- Récord personal.
- Score visible (HUD + muerte).
- Pantalla de resultado/muerte con deltas y CTA retry.
- Leaderboard local/placeholder visual (sin backend): demuestra la experiencia.
- CTA "Intentar batir récord".
- Pantalla Más Récords como mockup/prototipo.

### Fase comunidad
- Ranking semanal.
- Ranking de comunidad (Staryuuki).
- Eventos de stream.
- Podio top 1 / 2 / 3 completo.

### Fase social avanzada
- Ranking de amigos.
- Compartir / clips.
- Torneos.
- Temporadas.
- Recompensas cosméticas por participación.

### No hacer todavía
- Backend complejo.
- Tienda ligada al ranking.
- Pay-to-win.
- Chat.
- Matchmaking.
- Ligas/divisiones complicadas.

---

## 13. Reglas visuales para la capa competitiva

Debe respetar la estética pastel crochet del `UNIVERSE_BIBLE.md`.

- **Leaderboard:** filas tipo tarjeta crema con costura punteada, esquinas redondeadas, sombra suave; ritmo limpio y aireado.
- **Nombres:** tipografía display redonda, grandes y legibles; el nombre es protagonista junto al número.
- **Banderas:** parches de fieltro pequeños junto al nombre; nunca banderas vectoriales realistas.
- **Coronas:** de hilo dorado, tejidas; solo el top 1.
- **Medallas:** de lana, plata/bronce; top 2 y 3.
- **Botones:** píldoras tejidas; CTA primario en color de acción (rosa), "Atrás" secundario (azul); jerarquía inequívoca.
- **Legibilidad:** placa/halo detrás del texto sobre lana; contraste suficiente; mínimo legible en móvil.
- **Evitar saturación:** pocos elementos grandes con jerarquía clara; no amontonar medallas, coronas y banderas a la vez; una acción primaria por pantalla.

---

## 14. Relación con otros documentos

- **`UNIVERSE_BIBLE.md`:** documento padre. Establece que la capa competitiva es central; este documento la desarrolla en detalle de producto.
- **`ART_DIRECTION.md`:** documento canónico de decisiones visuales aprobadas. Esta capa debe respetar sus reglas; sus decisiones se promueven allí una vez validadas.
- **Futuro `VIRAL_GAME_LOOP.md`:** profundiza el loop de 7 pasos (§7) con métricas y detalle de cada transición.
- **Futuro `LEADERBOARD_SPEC.md`:** traduce esta dirección a especificación técnica (aquí, y solo aquí, entra el backend).
- **Futuro UI Kit:** provee los componentes (filas, botones, podio) que materializan estas reglas visuales.

Este documento define **producto y experiencia, no implementación.** Lo técnico vive en los specs futuros.

---

## 15. Riesgos principales

- **El ranking se vuelve tóxico.** → Sin chat, sin humillación, rival = uno mismo primero, lenguaje positivo, semanal que renueva.
- **El ranking parece decorativo y no motiva.** → Mostrar deltas y rivales concretos, CTA de retry omnipresente, tu fila siempre visible.
- **Demasiada UI.** → Jerarquía clara, una acción primaria por pantalla, pocos elementos grandes.
- **Score escondido.** → El número es héroe en HUD, muerte y ranking.
- **Compartir demasiado temprano.** → Compartir es fase social, no MVP; primero que exista algo digno de presumir.
- **Backend prematuro.** → MVP con leaderboard local/placeholder; backend solo en `LEADERBOARD_SPEC.md`.
- **Recompensas mal diseñadas.** → Siempre cosméticas, nunca ventaja; nada de pay-to-win.
- **La comunidad se desconecta del juego.** → Anclar eventos de stream al gameplay real; el creador como rival a batir dentro de la app.

---

## 16. Criterios de aprobación

La capa competitiva está lista para pasar a prototipo cuando:
- El jugador **entiende su score** de un vistazo.
- El jugador **entiende a quién superar** (rival/posición/delta claros).
- El jugador **puede reintentar rápido** (menos de 1s, sin fricción).
- El **leaderboard motiva** (provoca jugar, no solo mirar).
- Se siente **prestigioso pero cozy** (estatus real sin romper el tono).
- **No se percibe tóxico** (sin humillación, sin presión agobiante).
- Una **captura de pantalla se entiende sin explicación** (legible y narrativa por sí sola).
- **Conecta con Staryuuki/community** (rankings de comunidad y ganchos de stream presentes).

---

## 17. Recomendación final

- **Qué documento crear después:** `VIRAL_GAME_LOOP.md`, que detalla el loop de 7 pasos con métricas y transiciones. Después, cuando se prototipe, `LEADERBOARD_SPEC.md` (allí entra el backend).
- **Qué prototipo hacer primero:** la **pantalla de muerte/resultado + Más Récords** como mockup visual con leaderboard placeholder (sin backend). Es el corazón del loop competitivo y el de mayor apalancamiento. En paralelo, el prototipo de obstáculo híbrido valida la justicia de la muerte que alimenta este loop.
- **Qué NO tocar todavía:** backend, chat, matchmaking, ligas, tienda ligada a ranking, compartir real, ranking de amigos. Y no diluir el core arcade.
- **Qué debe entrar al repo:** este `COMMUNITY_COMPETITION_LAYER.md` ahora, junto a `UNIVERSE_BIBLE.md` y `VISUAL_DESIGN_BIBLE.md`, como dirección. Los specs técnicos entran después, cuando el prototipo valide la experiencia.
