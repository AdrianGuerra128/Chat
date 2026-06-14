# AmiguRush Universe Bible v0.1

> Documento canónico de universo, cast y dirección competitiva de AmiguRush.
> Estado: borrador para revisión. No es implementación. No reemplaza aún `ART_DIRECTION.md` (ver §15).

---

## 1. Resumen ejecutivo

AmiguRush es un juego móvil casual de **tap-to-survive** ambientado en un mundo tejido a mano (amigurumi / crochet). Su esqueleto jugable es Flappy Bird, su sensación es la precisión de reflejo de Geometry Dash, y su loop es el de un endless runner de partidas cortas y *score chasing*.

No es "solo cute". La estética pastel handmade es el envoltorio emocional, pero el núcleo es un juego de precisión exigente y, sobre todo, **competitivo y social**: está pensado para una comunidad tipo Twitch/creator (esfera Staryuuki) donde el récord es público, presumible y clippeable.

El componente competitivo/social es **central, no secundario**. La pantalla de récords no es un menú de consulta: es el campo de batalla donde vive la razón para volver. Por eso esta Bible eleva el leaderboard, los rankings semanales/de comunidad y los retos de stream a pilar de producto.

Decisiones que toma este documento:
- **Universo:** un sistema de 6 mundos tejidos que forman un solo arco emocional y de dificultad.
- **Cast:** un único héroe de marca (Pompón) rodeado de un roster con roles que no se solapan.
- **Progresión:** los mundos escalan como una montaña rusa controlada (no "cada vez más fuerte" a secas), y cada mundo es un paquete de eventos, skins y coleccionables.

---

## 2. Fórmula base del producto

AmiguRush es la intersección deliberada de cinco fuerzas. Ninguna debe ahogar a las otras.

- **Flappy Bird — esqueleto jugable.** Input de un tap, gravedad, obstáculos con gaps, lectura inmediata, muerte rápida, retry instantáneo.
- **Geometry Dash — precisión / tensión / ritmo.** Sensación de carrera de reflejos: timing ajustado, "fallé por poco, otra vez", curva de tensión real.
- **Doodle Jump / endless runners — loop.** Partidas cortas, repetición rápida, score que sube, dificultad creciente, récord personal como ancla.
- **Amigurumi / crochet — identidad visual y emocional.** Cute, físico, táctil, blandito, cozy, coleccionable, compartible, memorable.
- **Staryuuki / Twitch / community — motor social y viral.** Rankings, récords, retos semanales, nombres visibles, orgullo comunitario, clips, "yo supero ese score".

Regla de oro de la fórmula: **el alma es cozy; el núcleo es implacable.** El crochet envuelve todo, pero nunca decide quién vive o muere.

---

## 3. North Star del universo

Una criatura de lana corre por un mundo tejido a mano: la esquivas por un pelo, mueres al instante y vuelves a intentarlo — persiguiendo un récord que toda tu comunidad puede ver. El mundo te abraza; el score te reta. La piel es handmade y coleccionable; el corazón es preciso y competitivo.

---

## 4. Principios de diseño del universo (innegociables)

- **Cute pero competitivo.** Lo adorable no excusa lo blando: el juego pica y se presume.
- **Cozy por fuera, preciso por dentro.** Calidez antes/después de la partida; precisión durante.
- **Legibilidad primero.** Si no se lee a tamaño móvil y en movimiento, no entra.
- **Score chasing visible.** El número es protagonista, no un dato escondido.
- **Comunidad como motor.** El nombre y el récord son públicos; competir es el combustible.
- **Estética handmade premium.** Saturación contenida, materiales textiles, acabado consistente.
- **Nada de decoración que mate gameplay.** La forma visible es la hitbox; el adorno jamás invade la zona de colisión.

---

## 5. Mundos / biomas

Seis mundos tejidos. Cada uno con material, paleta y arquetipo de obstáculo coherentes con la regla de hitbox honesta (cuerpo recto honesto, decoración fuera del gap).

### 01 · Pradera Hilván
- **Rol en el arco:** onboarding. Bienvenida y tutorial.
- **Emoción:** calma, ternura, seguridad.
- **Dificultad / intensidad:** muy baja (●○○○○).
- **Paleta:** verde suave, crema, cielo pastel, durazno.
- **Materiales:** lana basta, rocío de hilo.
- **Fondos:** amanecer de lana, colinas tejidas suaves, nubes de algodón.
- **Obstáculos:** agujas de tejer bajas y muy espaciadas.
- **Decoración:** florecitas de fieltro, briznas de lana.
- **Eventos / skins:** skins base, tutorial cosmético, eventos de bienvenida.
- **Riesgo visual principal:** verse demasiado vacío o "de relleno" por ser el más simple.

### 02 · Bosque de Botones
- **Rol en el arco:** dominio temprano. El jugador afina el control.
- **Emoción:** curiosidad, exploración.
- **Dificultad / intensidad:** baja-media (●●○○○).
- **Paleta:** verde azulado, marrón madera, mostaza, crema.
- **Materiales:** fieltro y botones de madera.
- **Fondos:** espesura tejida, troncos de hilo, dosel de hojas de fieltro.
- **Obstáculos:** ramas tejidas con botones colgantes (botón decorativo fuera del gap).
- **Decoración:** botones, hojas de fieltro, setas de lana al fondo.
- **Eventos / skins:** skins "boscosas", coleccionables de botones.
- **Riesgo visual principal:** paleta apagada que pierda el atractivo pastel si se oscurece de más.

### 03 · Carnaval de Ovillos
- **Rol en el arco:** pico viral. El mundo bandera para clips.
- **Emoción:** euforia, dopamina, fiesta.
- **Dificultad / intensidad:** media-alta (●●●○○).
- **Paleta:** rosa, amarillo, turquesa, lavanda (saturación máxima del arco).
- **Materiales:** ovillos satinados, papel crepé, banderines de hilo.
- **Fondos:** carpa de carnaval tejida, norias de ovillo en parallax, luces de bombilla-botón.
- **Obstáculos:** torres de ovillos apiladas (cuerpo recto) con cintas rítmicas que marcan el compás; giran y brillan, nunca invaden el gap.
- **Decoración:** confeti de lana, banderines, estrellas.
- **Eventos / skins:** las skins de evento más vistosas; eventos de comunidad/stream.
- **Riesgo visual principal:** sobrecarga decorativa que tape la lectura del gameplay.

### 04 · Río de Cintas
- **Rol en el arco:** variedad dinámica. Rompe el ritmo con movimiento.
- **Emoción:** fluidez, hipnosis suave.
- **Dificultad / intensidad:** media-alta (●●●○○).
- **Paleta:** azul, aqua, menta, crema.
- **Materiales:** cintas de raso, agua de hilo.
- **Fondos:** corriente de raso, riberas de lana, cascadas de cinta.
- **Obstáculos:** cintas onduladas y corrientes (bordes honestos, movimiento lateral).
- **Decoración:** burbujas de hilo, nenúfares de fieltro.
- **Eventos / skins:** skins acuáticas, coleccionables de cinta.
- **Riesgo visual principal:** que el movimiento de las cintas confunda la lectura de la hitbox.

### 05 · Castillo Patchwork
- **Rol en el arco:** prestigio. Desafío serio.
- **Emoción:** reto, solemnidad, orgullo.
- **Dificultad / intensidad:** alta (●●●●○).
- **Paleta:** morado, oro, vino, gris piedra.
- **Materiales:** patchwork acolchado, hilo metálico.
- **Fondos:** murallas acolchadas, estandartes de retazos, torres de quilt.
- **Obstáculos:** agujas de hierro tejido y almenas patchwork.
- **Decoración:** escudos de retazos, antorchas de hilo dorado.
- **Eventos / skins:** skins "reales", marcos de prestigio para leaderboard.
- **Riesgo visual principal:** que el oro/metal rompa el código cozy y se sienta frío.

### 06 · Cuna Estelar
- **Rol en el arco:** endgame / premium. Cierre de prestigio.
- **Emoción:** ensueño tenso, calma vibrante, "un último intento".
- **Dificultad / intensidad:** máxima (●●●●●).
- **Paleta:** navy profundo, lavanda, dorado fieltro, rosa polvo.
- **Materiales:** fieltro afelpado, estrellas bordadas, hilo fosforescente.
- **Fondos:** cielo navy con constelaciones de fieltro, luciérnagas de hilo, móvil de cuna girando lento.
- **Obstáculos:** estrellas de fieltro y "agujas de luna" que brillan tenue (lectura por contraste de luz).
- **Decoración:** lunas de lana, polvo estelar bordado.
- **Eventos / skins:** las skins más raras; eventos nocturnos de Staryuuki.
- **Riesgo visual principal:** bajo contraste sobre fondo oscuro que dañe la legibilidad del obstáculo.

---

## 6. Arco emocional y de dificultad

Los mundos entrelazan tres curvas para evitar la fatiga del "cada vez más difícil" plano:
- **Dificultad:** sube de forma monótona de 1 a 6.
- **Saturación:** sube hasta el Carnaval (pico) y se enfría hacia el Río y la noche.
- **Energía emocional:** calma → euforia → calma tensa.

Lectura del arco:
1. **Onboarding — Pradera Hilván.** Calma; aprender el tap sin castigo.
2. **Dominio temprano — Bosque de Botones.** Afinar control; primera variedad.
3. **Pico viral — Carnaval de Ovillos.** Máxima energía y saturación; el mundo de clips.
4. **Variedad dinámica — Río de Cintas.** Cambio de ritmo con movimiento; enfría la saturación.
5. **Prestigio — Castillo Patchwork.** Desafío serio; estatus.
6. **Endgame / premium — Cuna Estelar.** Dificultad máxima, tono en calma; el fondo oscuro hace que el score brille.

Regla: los mundos nuevos respetan la curva (se insertan donde encajan en el arco), nunca al azar. Cada mundo es además un paquete de eventos, skins y coleccionables.

---

## 7. Cast principal

Roster jerarquizado por rol, no por gusto. Si dos personajes cumplen el mismo rol, uno sobra.

### Pompón — héroe principal
- **Rol:** protagonista y ancla de marca. Rostro del ícono, splash y marketing. Uno solo.
- **Personalidad:** valiente pero tierno; optimista, con un punto travieso.
- **Silueta:** conejo crema, orejas + auriculares rosas + estrella en la frente. Reconocible en negro y a 16px.
- **Función en el ecosistema:** identidad de la IP; motor de skins (color y accesorio varían infinito, la silueta base nunca cambia).
- **Uso potencial:** protagonista jugable por defecto, cara de marca, base de skins.
- **Qué nunca debe pasar:** cambiar su silueta base; perder los auriculares/estrella como rasgo firma; volverlo un conejo genérico.

### Tejo — osito
- **Rol:** ancla emocional y anfitrión.
- **Personalidad:** comfort cálido, tranquilo, confiable.
- **Silueta:** ancha, tipo tanque.
- **Función:** guía del tutorial y de la pausa; jugable secundario.
- **Uso potencial:** anfitrión de onboarding, personaje jugable, figura de tienda.
- **Qué nunca debe pasar:** que su silueta ancha cambie la hitbox respecto a Pompón (la silueta cambia, la justicia no).

### Estela — unicornio / pegaso
- **Rol:** figura aspiracional.
- **Personalidad:** elegante, mágica, deseable.
- **Silueta:** esbelta, con cuerno/alas.
- **Función:** tier premium y personaje de eventos especiales.
- **Uso potencial:** skin premium, evento, figura de monetización.
- **Qué nunca debe pasar:** regalarla (pierde su valor aspiracional); que sus alas/cuerno rompan la legibilidad de silueta en gameplay.

### Mei — muñequita / chibi girl
- **Rol:** avatar de comunidad.
- **Personalidad:** expresiva, social, cercana; la "cara del jugador".
- **Silueta:** única humanoide del cast.
- **Función:** identidad social altamente personalizable (pelo, ropa, colores); cara de los clips.
- **Uso potencial:** avatar personalizable, identidad de perfil, protagonista de contenido social.
- **Qué nunca debe pasar:** volverse anime genérico; perder coherencia plush/crochet con el resto del cast.

### Madeja — rival
- **Rol:** rival memético.
- **Personalidad:** travieso, "villano adorable".
- **Silueta:** ovillo enredado con carita.
- **Función:** aparece en el leaderboard como rival a batir; material memético.
- **Uso potencial:** NPC rival, figura de eventos, sticker/meme de comunidad.
- **Qué nunca debe pasar:** volverlo amenazante o feo (rompe el tono); que compita con Pompón por el rol de marca.

---

## 8. Regla de personajes (construcción del cast)

Para que todo el cast se sienta de la misma familia:
- **Proporciones:** cabeza grande, cuerpo pequeño (~1:1.3). Baby / plush.
- **Ojos:** grandes, con brillo de fieltro, separados, expresivos. Son el ~80% del carisma.
- **Expresividad:** vía cejas y boca bordadas simples; nada de rasgos realistas.
- **Textura:** lana mate con puntos de croché visibles. Cero brillo plástico.
- **Accesorios:** firma e identificables (los auriculares de Pompón); diferencian skins sin alterar la silueta base.
- **Legibilidad en gameplay:** debe leerse a 16px y en silueta negra; la cara mira a cámara.

**Skin buena vs. skin genérica:** una buena skin cambia color, material y accesorio manteniendo intacta la silueta y la legibilidad — aporta personalidad sin confundir la lectura. Una skin genérica recolorea sin identidad, rompe la silueta, mete brillos plásticos o detalle que se vuelve ruido, o (peor) altera la percepción de la hitbox.

---

## 9. Pilar competitivo / social

Concepto: **el récord como campo de batalla adorable.** La pantalla de récords no es secundaria; convierte un score-attack solitario en rivalidad social y es la razón de volver. Debe sentirse como ternura + prestigio a la vez: el mundo es blando, pero tu posición importa.

Componentes (como dirección visual/producto; sin backend):
- **Récord personal:** siempre visible (HUD de juego y pantalla de muerte). Es el rival principal.
- **Ranking global:** la tabla grande; tu fila siempre visible aunque estés lejos.
- **Ranking semanal:** reset semanal → todos tienen oportunidad recurrente de top.
- **Ranking de comunidad:** vista filtrada a la comunidad Staryuuki; la pantalla más emocional.
- **Top 1 / 2 / 3:** podio con jerarquía clara. Top 1 con corona de hilo + marco de estrellas + peana más alta ("rey de la semana"); top 2 y 3 con medallas tejidas plata/bronce y marcos sobrios.
- **Coronas:** de hilo dorado, tejidas — nunca metal frío.
- **Medallas:** de lana, plata/bronce; estatus sin romper el cozy.
- **Banderas:** parches de fieltro pequeños junto al nombre (no banderas realistas).
- **Nombres de fans:** grandes y legibles. El nombre es el trofeo social.
- **Botón "intentar batir récord":** CTA omnipresente desde cualquier vista → de vuelta al juego en menos de 1s. El leaderboard nunca es un callejón sin salida.
- **Retos de stream:** objetivo destacado semanal vinculable a un stream (banner con countdown).
- **Eventos de Staryuuki:** modo evento con tabla temporal y cosmético exclusivo.

Reglas anti-toxicidad:
- El récord personal es el rival principal (compites contigo primero).
- Deltas que motivan ("a 12 puntos"), nunca que humillan; sin contadores de derrotas.
- Tu fila siempre visible (nunca "fuera de tabla").
- Sin chat público en el ranking.
- El semanal reparte oportunidades.
- La calidez visual del crochet baja la temperatura del pique: úsala a propósito.
- Insignias, coronas y marcos son **cosméticos, jamás ventaja**.

---

## 10. Loop viral del jugador (7 pasos)

1. **Ve provocación en el ranking.** El ranking de comunidad le dice "estás a 12 puntos de [fan conocido]" — un agravio, no un número pasivo.
2. **Juega en menos de 1s.** Tap-to-play, cero fricción.
3. **Falla por poco.** Tensión tipo Geometry Dash; muerte instantánea, legible y percibida como justa (hitbox honesta).
4. **Retry inmediato.** Un tap desde la pantalla de muerte; sin loading ni interstitial.
5. **Mejora su score.** La pantalla de muerte grita el número y el delta ("+8 sobre tu récord / -4 para superar a X").
6. **Comparte / reta.** Al batir récord, un momento clippeable: la criatura celebra, el número estalla, listo para screenshot/clip.
7. **Vuelve por el evento o el ranking semanal.** Banner/notificación del reto de Staryuuki con countdown → razón recurrente para reabrir. El loop reinicia en el paso 1.

---

## 11. Key Art maestra

La pieza madre del universo: una sola imagen que contiene todo.
- **Formato:** vertical/cuadrado para portada de tienda y póster, con crop horizontal para banners.
- **Composición:** capas de profundidad en diagonal.
- **Personaje principal:** Pompón al frente y centro, en plena carrera/salto (héroe indiscutible).
- **Personajes secundarios:** el roster (Tejo, Estela, Mei, Madeja) flanqueando a media distancia.
- **Capas del mundo / mundos visibles:** los seis mundos recediendo en diagonal hacia el fondo (de la pradera al amanecer hasta la cuna estelar de noche) para mostrar el arco completo.
- **Componente competitivo/social:** una cinta/leaderboard de récord flotante con coronas tejidas.
- **Coleccionables:** ovillos y estrellas de fieltro salpicados como partículas de recompensa.
- **Tono emocional:** cálido, épico-pero-adorable, aspiracional.
- **Objetivo comunicativo:** dejar claro en un vistazo que AmiguRush es un MUNDO con profundidad y una COMPETICIÓN con estatus, no un mini-juego.
- **Uso futuro:** pieza madre para ilustración, marketing, UI y futuras implementaciones.

---

## 12. Art Direction Lock

**Siempre (fijo):**
- Pastel cálido, saturación baja-media.
- Materiales textiles dominantes.
- Costura punteada como firma.
- Volumen blando + sombra suave.
- Bordes redondeados.
- Legibilidad y hitbox honesta por encima de todo.

**Puede variar:**
- Paleta dominante por mundo.
- Material y mood por mundo.
- Color y accesorio de criaturas.
- Densidad decorativa (dentro de un límite).
- Intensidad de luz por ambientación.
- Props y coleccionables temáticos.

**No puede cambiar sin QA:**
- La silueta base del héroe.
- La igualdad de hitbox entre personajes jugables.
- El contraste mínimo de obstáculos contra el fondo.
- La zona muerta decorativa alrededor del gap.

**Qué lo hace ver barato:** saturación de chicle; brillos plásticos; mezclar flat con volumétrico sin criterio; textura tan detallada que se vuelve ruido.

**Qué mata la legibilidad:** outlines negros duros; texto pequeño sobre lana sin placa/halo; decoración que invade el gameplay; bajo contraste en mundos oscuros.

**Qué contradice la marca:** medallas/coronas de metal frío; un cast que deriva a anime genérico o a muñeco rígido; obstáculos que mienten sobre la colisión.

---

## 13. Roadmap creativo seguro

1. **Universe Bible** — este documento. Fuente de verdad del universo, cast y pilar competitivo.
2. **Visual Design Bible** — sistema visual (paleta, tipografía, UI, componentes). Ya existe.
3. **Reconciliation docs** — arbitra el conflicto de obstáculos (agujas vs. columnas vs. híbrido).
4. **UI Kit** — componentes HTML/CSS + tokens.
5. **Community Competition Layer** — spec de la capa competitiva/social (dirección, sin backend).
6. **Leaderboard prototype** — valida la pantalla de muerte/récord y el gancho de retry/compartir.
7. **Obstacle prototype** — valida el obstáculo híbrido (hitbox justa en movimiento y en cámara lenta).
8. **Gameplay visual prototype** — personaje + obstáculo validado + parallax + HUD de score + feel del tap. Sin tienda.
9. **Assets reales** — tiles de lana, frames de animación, props, skins base.
10. **Menús finales** — inicio, pausa, cómo jugar, leaderboard completo.
11. **Store / records / settings** — al final. Las skins nunca afectan hitbox ni legibilidad.

Principio del roadmap: la capa competitiva y los prototipos de validación (obstáculo + leaderboard) van **antes** de invertir en assets caros.

---

## 14. Documentos recomendados para el repo

**Necesarios ahora:**
- `UNIVERSE_BIBLE.md` — este documento; fuente de verdad del universo, cast y competición.
- `VISUAL_DESIGN_BIBLE.md` — el sistema visual como referencia.
- `DESIGN_RECONCILIATION.md` — decisión sobre el conflicto de obstáculos.
- `COMMUNITY_COMPETITION_LAYER.md` — el pilar social documentado como dirección.
- `VIRAL_GAME_LOOP.md` — los 7 pasos del loop.

**Necesarios después (al prototipar):**
- `OBSTACLE_PROTOTYPE_SPEC.md` — al arrancar el prototipo de obstáculo.
- `LEADERBOARD_SPEC.md` — al prototipar la pantalla de muerte/ranking (aquí entra, más tarde, el backend).
- `UI_KIT_SPEC.md` — al construir el UI Kit.

**Opcionales:**
- `WORLDS_SPEC.md` — si se quiere desacoplar el detalle de mundos del Universe Bible cuando crezca.
- `CHARACTER_SHEET.md` — turnaround y frames cuando se produzca arte real.

Regla: documenta ahora lo que **dirige decisiones**; deja para después lo que **especifica implementación**.

---

## 15. Decisión final

- **¿Complementa o reemplaza `ART_DIRECTION.md`?** Lo **complementa**, no lo reemplaza. `ART_DIRECTION.md` sigue siendo el documento canónico de decisiones aprobadas; el Universe Bible es el north star de IP que las alimenta. Una decisión del Universe Bible solo se promueve a `ART_DIRECTION.md` tras validarse (p. ej. el obstáculo híbrido, después del prototipo).
- **Qué debe pasar antes de tocar código:** aprobar este documento; documentar la Community Competition Layer y el Viral Game Loop; resolver el conflicto de obstáculos en el Reconciliation doc; dejar `ART_DIRECTION.md` con una nota de "obstáculos en revisión".
- **Qué debe congelarse:** los cambios de obstáculo en el Physics Lab (hasta que el prototipo decida) y cualquier alteración de la silueta del héroe o de la igualdad de hitbox.
- **Próximo paso correcto:** redactar `COMMUNITY_COMPETITION_LAYER.md` + `VIRAL_GAME_LOOP.md` y arrancar, en paralelo y aislados, los prototipos de obstáculo híbrido y de leaderboard/pantalla de muerte — antes de invertir en assets reales. El código de producción no se toca todavía.
