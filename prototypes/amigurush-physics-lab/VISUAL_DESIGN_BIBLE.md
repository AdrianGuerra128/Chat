> **Nota:** borrador para **segunda** auditoría humana. No es implementación ni persistencia en repo. Es la **Visual Design Bible de producto/IP** de AmiguRush. **No reemplaza `ART_DIRECTION.md`** (Art Direction Lock vigente del Physics Lab) ni autoriza por sí solo ningún cambio de código, paleta, personaje, obstáculos, assets, fuentes, audio o UI. Complementa `UNIVERSE_BIBLE.md`, `COMMUNITY_COMPETITION_LAYER.md` y `VIRAL_GAME_LOOP.md`.

# VISUAL_DESIGN_BIBLE.md

AmiguRush — Sistema visual de producto / IP.

---

## 1. Propósito del documento

Este documento convierte el universo y la dirección de arte de AmiguRush en un **sistema visual de producto/IP claro, usable y defendible**. Responde a una sola pregunta operativa: *cuando alguien diseña una pantalla o ilustración futura de AmiguRush, ¿cómo sabe si está alineada con la marca?*

Cubre: cómo debe verse el producto, su paleta, sus materiales, el personaje, los mundos, los obstáculos honestos, el HUD, la pantalla de muerte, el leaderboard, la UI cozy-pero-competitiva, y qué está prohibido por romper marca, legibilidad o gameplay.

**Qué NO define:** monetización, backend, tienda, ads, pay-to-win, skins con ventaja, ni implementación. Tampoco cambia el core gameplay ni reemplaza el Art Direction Lock vigente.

Audiencia: diseñadores, artistas, UI/UX y futuros prototipos. Debe ser estricto para evitar deriva visual, y flexible para permitir evolución — **dentro de la jerarquía documental del §2.**

---

## 2. Alcance y jerarquía documental

Esta sección es la más importante para auditar el documento. Define qué autoridad tiene y qué autoridad **no** tiene.

**Qué es este documento:**
- Define la **dirección visual de producto/IP** de AmiguRush: la marca, el universo y hacia dónde debe evolucionar la estética.
- Es referencia para ilustración, marketing, UI futura, prototipos y specs posteriores.

**Qué NO es:**
- **No es el contrato visual del Physics Lab actual.** Ese rol lo tiene `ART_DIRECTION.md` (Art Direction Lock, estado PASS), que **sigue mandando** sobre el prototipo vigente.
- No autoriza por sí solo ningún cambio en el Physics Lab: ni paleta, ni personaje, ni obstáculos, ni assets, ni fuentes, ni audio, ni UI, ni código.

**Regla de jerarquía (candado):**
- Donde la visión de producto de este documento difiera del Physics Lab actual, **manda `ART_DIRECTION.md`** hasta que la diferencia se resuelva formalmente.
- Cualquier migración de la visión futura al prototipo actual debe pasar **antes** por uno de estos caminos: (a) `DESIGN_RECONCILIATION.md`, (b) un prototipo aislado validado, o (c) un nuevo Art Direction Lock aprobado.
- Hasta que eso ocurra, este documento es **dirección aspiracional**, no permiso de ejecución.

En una frase: *esta Bible dice hacia dónde va la marca; `ART_DIRECTION.md` dice qué se puede tocar hoy. Una cosa no implica la otra.*

---

## 3. Tesis visual

> **Suave al tacto, claro al jugar.** El mundo se ve tejido a mano; el juego se lee al instante.

AmiguRush vive de una tensión deliberada: una piel cozy de amigurumi sobre un núcleo de precisión implacable. La regla que resuelve esa tensión recorre todo el documento: **lo decorativo es blando y cálido; lo jugable es nítido y honesto.** Ambos coexisten sin contaminarse.

Toda decisión visual se valida contra dos preguntas:
1. ¿Se siente handmade, cálido y premium?
2. ¿El jugador lee el gameplay —gap, obstáculo, score, muerte— sin un instante de duda?

Si una decisión gana en la primera a costa de la segunda, está mal.

---

## 4. Identidad visual central

AmiguRush es un mundo **amigurumi / crochet / handmade premium**: todo parece tejido, relleno, cosido y suave. La identidad de producto se construye sobre cuatro gestos:

1. **Esquinas redondeadas extremas** — nada de bordes duros.
2. **Costura punteada** — el "cosido" como firma de marca.
3. **Outline grueso y suave** — contorno cálido (nunca negro duro).
4. **Volumen blando con sombra suave** — cuerpo de peluche, sin brillos plásticos.

Estos gestos aplican al **envoltorio** (menús, tarjetas, leaderboard, celebración). La **capa jugable** hereda la calidez de materiales pero prioriza la nitidez por encima de la decoración.

*(Nota de alcance: esta identidad describe la dirección de IP. La representación visual del Physics Lab actual se rige por `ART_DIRECTION.md`; ver §2.)*

---

## 5. Principios visuales innegociables

- **Cozy por fuera, preciso por dentro.** El envoltorio es blando; el núcleo jugable es nítido.
- **Legibilidad primero.** Si no se lee a tamaño móvil y en movimiento, no entra.
- **El score es protagonista visual.** Nunca un dato escondido.
- **La comunidad y el leaderboard son centrales**, no menú secundario.
- **Nada visual miente sobre la hitbox.** La forma visible es la forma de colisión.
- **La decoración jamás invade la zona jugable** ni confunde la muerte.
- **La silueta base de Pompón se mantiene reconocible** (como dirección de marca; ver §8).
- **Las skins varían color/material/accesorio**, nunca justicia ni lectura.
- **Saturación contenida.** Pastel cálido, baja-media.
- **Premium, no barato.** Consistencia total; cero brillos plásticos.

---

## 6. Paleta global

La paleta se documenta en **dos planos separados** que no deben confundirse.

### A. Paleta de producto / IP

La paleta hacia la que apunta la marca. Roles antes que colores: cremas y cielo dominan (~80%); los acentos son acción/estado; el marrón es solo texto y outline.

Base / neutros:
- Crema paneles `#F8EFD9` — superficies, tarjetas.
- Crema texto `#FFF9EF` — texto sobre color.
- Cielo pastel `#BCE2F2` — fondos y cielo.
- Outline / sombra cálida `#C8A988` — bordes, costura, sombras.

Acentos de acción / estado:
- Rosa principal `#F2A6B7` — acción primaria (CTA).
- Azul hilo `#8EC2E6` — acción secundaria.
- Verde suave `#AFD89C` — confirmar / positivo / play.
- Amarillo estrella `#F8CF5E` — premios, destacar, monedas.

Texto: Marrón `#7E5C3E` (uso exclusivo en texto/outline).
Acentos secundarios: Lavanda `#C9A8E0`, Durazno `#F3B079`.

Reglas: una acción primaria (rosa) por pantalla; saturación baja-media; las paletas por mundo modulan esta base sin sustituir su ADN pastel cálido.

### B. Paleta bloqueada actual del Physics Lab

El Art Direction Lock vigente (`ART_DIRECTION.md`) usa una paleta distinta, que **sigue siendo la canónica del prototipo actual**:
- **Fondo:** violeta / navy (nocturno).
- **Personaje:** naranja / crema (ancla cromática actual).
- **Obstáculos:** violeta medio-frío.
- **Texto:** claro (sobre fondo oscuro).

> **Estos valores del Physics Lab no se sustituyen automáticamente por la paleta de producto.** La paleta A es la dirección de marca/IP; la paleta B es lo que rige hoy en el prototipo. Pasar de B a A requiere el camino formal del §2 (reconciliation / prototipo aislado / nuevo lock). Ninguna pantalla del Physics Lab cambia de paleta por la existencia de este documento.

---

## 7. Materiales y texturas

El **mundo de producto** está hecho de textiles: lana/hilo (base, mate, puntos de croché visibles), fieltro (formas planas: estrellas, parches, banderas), botones de madera, cinta/raso, patchwork acolchado, e hilo dorado/metálico **textil** para estatus (nunca metal frío).

Aclaración de alcance sobre "tile" y "asset" (para evitar ambigüedad):
- **Physics Lab actual:** Canvas 2D procedural. **Sin assets externos, sin imágenes, sin fuentes externas, sin audio.** Esto lo bloquea `ART_DIRECTION.md` y no cambia por este documento.
- **Producto futuro:** pueden existir assets reales (tiles de lana, frames, props), pero **solo después** de specs, prototipos y QA aprobados.
- **"Textura tile"** debe entenderse como **patrón procedural** (generado en Canvas/CSS) **o** recurso aprobado en el futuro — **nunca** como permiso automático para introducir imágenes en el Physics Lab.

Límite duro de estilo (válido en ambos planos): la textura se **sugiere**, no se sobre-detalla. Detalle medio-bajo; una textura que se vuelve ruido rompe legibilidad y se ve barata.

---

## 8. Personaje principal: Pompón

**Dirección de marca / IP:** Pompón es el conejo crema de **auriculares rosas + estrella en la frente**, rostro de la marca (ícono, splash, marketing). Uno solo.

Anatomía de marca:
- **Silueta:** bola redonda sin esquinas; orejas + auriculares inconfundibles. Legible en negro y a 16px.
- **Rostro:** ojos grandes y brillantes, mejillas rosadas, sonrisa bordada; cara a cámara.
- **Proporción:** cabeza grande / cuerpo pequeño (~1:1.3); baby/plush.
- **Textura:** lana mate, puntos visibles; cero plástico.

**Conflicto de evolución visual (alcance):**
- El conejo crema con auriculares + estrella es la **dirección de marca/IP**, no un cambio aprobado del prototipo.
- El **Physics Lab actual** puede tener una representación procedural/abstracta previa (p. ej. ancla cromática naranja/crema) **protegida por `ART_DIRECTION.md`**.
- La **migración** de la representación actual hacia el Pompón de marca requiere **decisión explícita, prototipo visual y QA** (camino del §2). No ocurre automáticamente por este documento.
- **Candado de gameplay:** no se toca **silueta de colisión, hitbox ni radio físico** por una decisión estética. La identidad visual evoluciona; la justicia física no se altera sin QA dedicada.

Cómo evitar que pierda su silueta de marca (cuando se adopte): la silueta base nunca cambia; las skins solo modulan color/material/accesorio; auriculares y estrella son firma; todo accesorio nuevo se valida en silueta negra a 16px.

---

## 9. Cast secundario y coherencia de familia

El roster de producto (Tejo, Estela, Mei, Madeja) comparte ADN con Pompón: cabeza grande / cuerpo pequeño, ojos grandes con brillo de fieltro (~80% del carisma), expresividad por cejas/boca bordadas simples, textura de lana mate, detalle medio-bajo legible a 16px.

Coherencia por rol (sin solaparse): Tejo silueta tanque (ancla/anfitrión), Estela esbelta con cuerno/alas (premium/evento), Mei humanoide chibi (avatar de comunidad personalizable), Madeja ovillo enredado (rival memético).

Regla de justicia: cuando un secundario sea jugable, **su hitbox es idéntica a la de Pompón.** La silueta cambia; la justicia no.

Skin buena vs. genérica: una buena cambia color/material/accesorio manteniendo silueta y legibilidad; una genérica recolorea sin identidad, rompe la silueta, mete brillos plásticos o altera la percepción de la hitbox (inaceptable).

*(Alcance: el roster es dirección de IP; su introducción al producto sigue el §2.)*

---

## 10. Mundos / biomas: reglas visuales

Cada mundo (de producto) modula la paleta A con un material y mood propios, dentro de un arco. Reglas transversales:
- **Capas de parallax:** blur y desaturación crecen hacia el fondo; la capa jugable va siempre nítida, sin blur, a velocidad real.
- **Identidad por material**, no solo por color.
- **El ADN pastel cálido se reconoce** incluso en mundos oscuros.

Por mundo (detalle de arco en `UNIVERSE_BIBLE.md`): Pradera Hilván (amanecer; riesgo verse vacío → poblar fondo), Bosque de Botones (fieltro/madera; riesgo oscurecer → mantener luminosidad), Carnaval de Ovillos (pico de saturación), Río de Cintas (movimiento; riesgo confundir hitbox → cuerpos nítidos), Castillo Patchwork (oro textil, no frío), Cuna Estelar (noche).

**Evitar saturación en Carnaval de Ovillos:** la saturación vive en fondo y decoración, no en la capa jugable. Los obstáculos mantienen contraste limpio; se reserva una "zona de calma cromática" alrededor del gap. Pocos colores saturados grandes, no muchos pequeños compitiendo.

**Evitar bajo contraste en Cuna Estelar:** sobre navy, los obstáculos se leen **por luz** (bordes iluminados) con contraste alto y deliberado. Fondo oscuro y difuso; capa jugable luminosa y nítida. El contraste mínimo del obstáculo es regla de QA (§21).

---

## 11. Obstáculos y hitbox honesta

Principio maestro: **la forma visible es la hitbox.** Lana suelta, zarcillos, remates y decoración **nunca** entran en la colisión.

Reglas: cuerpo honesto (forma clara y recta; su silueta es lo que mata); **zona muerta decorativa** (margen alrededor del gap sin adornos); contraste contra el fondo; lectura en movimiento.

Cómo se ven handmade sin mentir: la textura tejida y los remates de hilo viven en el **borde exterior y los extremos**; el contorno que define el gap es limpio y honesto.

> **Nota de alcance — dirección de obstáculos:** la visión de producto favorece un **cuerpo honesto** (con zona muerta decorativa). El Art Direction Lock vigente del Physics Lab tiene aprobada la **dirección D** (columnas tejidas + remate de puntada/ovillo en el borde del gap). **Esa diferencia no se resuelve en este documento.** Se resuelve formalmente en `DESIGN_RECONCILIATION.md` (agujas vs. columnas con trim vs. híbrido) antes de tocar el prototipo. Hasta entonces, manda `ART_DIRECTION.md`.

---

## 12. HUD de gameplay

HUD mínimo; el **score es el héroe**: grande, tipografía display, alto contraste, con placa/halo suave para legibilidad sobre cualquier fondo. El récord personal va presente pero secundario. Todo lo demás, ausente o minimizado; el HUD no compite con la capa jugable.

El score se ve heroico sin romper el cozy gracias a su **placa/halo textil** (no un recuadro gamer): protagonismo por tamaño y contraste, no por estridencia.

*(Alcance: dirección de UI de producto. La HUD del Physics Lab actual se rige por `ART_DIRECTION.md`.)*

---

## 13. Pantalla de muerte / retry

Adorable pero **rápida**: bisagra del loop (muerte → retry).
- Score grande (lo primero); récord + delta ("+8" / "-3"); delta contra rival ("a 4 de [rival]"); posición aproximada.
- CTA "Intentar de nuevo" primario, gigante, sin loading. CTA "Compartir" secundario (fase social; no MVP). Feedback positivo siempre.

Cómo es adorable pero rápida: la criatura tiene reacción tierna (cae adorable, no castigada → reduce rage-quit), pero **la animación no bloquea el retry**. Nada de transiciones largas, pop-ups ni interstitials entre morir y volver. Lo cute vive en la expresión y el confeti de lana; la velocidad, en el CTA. Menos de 1s de la intención al siguiente tap.

---

## 14. Leaderboard y competición visual

Central, competitivo **sin** toxicidad.

Anatomía: filas tipo tarjeta crema con costura punteada, redondeadas, sombra suave; nombre + número protagonistas; tu fila siempre visible con delta al de arriba; podio top 3 (top 1 con corona de hilo + marco de estrellas + peana más alta; top 2/3 medallas tejidas); banderas como parches de fieltro; CTA "Intentar batir récord" omnipresente.

Competitivo sin ser tóxico (visual): prestigio **textil** (no metal frío ni UI gamer agresiva); deltas que motivan, no humillan ("a 12", nunca "perdiste contra X"); **sin chat público**; la calidez baja la temperatura del pique; insignias/coronas/marcos **cosméticos, jamás ventaja**. Anti-saturación: pocos elementos grandes con jerarquía clara.

---

## 15. UI general: menús, botones y tarjetas

- **Botones píldora** tejidos: relleno con leve degradado, outline + costura interior, sombra física inferior. Primario rosa; secundario azul; una acción primaria por pantalla.
- **Tarjetas / paneles:** crema, muy redondeados, costura punteada, sombra suave; decoración (moño/corazón) solo en el marco, nunca sobre el contenido.
- **Icon buttons:** circulares, mismo lenguaje.
- **Sliders:** cuerpo de hilo trenzado + pomo amigurumi con carita.
- **Bottom nav / headers:** íconos amigurumi, costura como separador; overlays con blur del mundo.

Regla cozy-pero-competitivo: cálida y blanda en forma, **clara y jerárquica en función**. Nada de UI gamer agresiva; nada tan suave que pierda jerarquía. La decoración va en el marco, nunca sobre lo accionable.

---

## 16. Tipografía y jerarquía

**Dirección futura de UI/producto** (no permiso actual; ver alcance abajo):
- **Display (títulos, score, nombres):** redonda gruesa con eco de croché; protagonista, con outline crema suave y sombra ligera.
- **Cuerpo / UI:** sans redonda de alta legibilidad.
- **Lettering "tejido":** reservado a logo y títulos hero; nunca a cuerpos pequeños.

Jerarquía: (1) score/número, (2) nombres y CTAs, (3) títulos de pantalla, (4) datos secundarios.

Reglas de texto: outline crema 2–3px + sombra suave; placa/halo detrás de texto sobre lana; contraste suficiente siempre.

> **Alcance — fuentes:** tipografía y lettering son **dirección futura**. Mientras el Physics Lab esté bajo Art Direction Lock (**sin fuentes externas**), **no se introducen fuentes externas** salvo aprobación explícita por el camino del §2. La jerarquía tipográfica puede planificarse, pero no se implementa en el prototipo actual sin ese permiso.

---

## 17. Iconografía, insignias y cosméticos

- **Iconografía:** formas simples, redondeadas, textiles; legibles a tamaño pequeño; familia coherente (mismo grosor de outline y radio).
- **Insignias / medallas / coronas:** textiles (lana, hilo dorado, fieltro); top 1 corona de hilo, top 2/3 medallas de lana; cinta bordada para rotular.
- **Cosméticos (skins, marcos, parches):** varían color/material/accesorio. **Regla absoluta: cosmético ≠ ventaja.** Ninguno altera hitbox, velocidad, legibilidad ni justicia.
- **Banderas:** parches de fieltro, no realistas.

Todos se validan contra silueta y legibilidad: si confunden la lectura del personaje o del gameplay, se descartan.

*(Alcance: cosméticos y assets de insignia son producto futuro, sujetos a §2 y §7.)*

---

## 18. Animación y feedback visual

- **Feedback de gameplay (núcleo):** inmediato y seco. Pasar obstáculo = micro-feedback; muerte = instantánea y legible. Nada que retrase el ritmo.
- **Celebración (envoltorio):** nuevo récord = confeti de lana + número que estalla; clippeable, pero no bloquea el retry.
- **Personaje:** cara a cámara; pose hero + frames de salto/caída; al caer, expresión tierna.
- **Transiciones:** suaves entre menús; **nunca** entre morir y reintentar.
- **Fondo:** parallax lento, siempre por detrás de la capa jugable.

Principio: animación **expresiva** en el envoltorio (cozy); animación **funcional** rápida y honesta (preciso). El feedback nunca compite con la lectura del gameplay.

*(Alcance: el audio queda fuera — el Physics Lab actual es **sin audio** bajo `ART_DIRECTION.md`; este documento no lo introduce.)*

---

## 19. Legibilidad móvil

Móvil primero; todo se valida a tamaño real de teléfono.
- Score y elementos críticos legibles a un brazo, en pantalla pequeña, en movimiento.
- Hit targets mínimo 44px; CTAs generosos.
- Texto sobre textura siempre con placa/halo; nunca texto pequeño directo sobre lana.
- Obstáculos: silueta y gap legibles a velocidad real; el contraste es prioridad.
- Densidad baja; pocos elementos grandes.
- **Prueba canónica:** una captura debe entenderse **sin explicación**.

Si se lee bien en el monitor del diseñador pero no en un teléfono, no está terminado.

---

## 20. Reglas anti-barato / anti-genérico

Barato (prohibido): saturación de chicle; brillos plásticos; flat + volumétrico sin criterio; textura que se vuelve ruido; outlines negros duros; decoración que tapa el gameplay; medallas/coronas de metal frío.

Genérico (prohibido): cast que deriva a **anime genérico** o a muñeco rígido; **UI gamer agresiva** (neón, ángulos duros, HUD denso); recolores sin identidad; iconografía inconsistente.

Premium: **consistencia total** de los cuatro gestos (§4), materiales textiles coherentes, saturación contenida, jerarquía limpia, pocos elementos grandes bien resueltos. Prueba final: *¿se ve handmade, cálido y limpio a la vez?*

Diferencia entre "cute" y "blando": **cute** es el tono visual (adorable, tierno, coleccionable) y es deseable. **Blando** es la pérdida de claridad/tensión jugable (obstáculos ambiguos, muerte lenta, gameplay sin exigencia) y está **prohibido**. AmiguRush es máximamente cute y nada blando: la ternura nunca se paga con legibilidad ni con tensión.

---

## 21. Relación con documentos existentes

- **`ART_DIRECTION.md` (PASS, canónico del Physics Lab):** **manda sobre el prototipo actual.** Esta Bible no lo reemplaza ni lo contradice; donde difieran (paleta, personaje, obstáculos, assets, fuentes, audio), rige `ART_DIRECTION.md` hasta resolución formal (§2).
- **`UNIVERSE_BIBLE.md`:** define universo, cast y mundos; esta Bible traduce ese universo a reglas visuales de producto y cubre el gap que aquel anticipaba.
- **`COMMUNITY_COMPETITION_LAYER.md`:** define la capa competitiva/social; esta Bible define **cómo se ve** (leaderboard, podio, prestigio textil) sin tocar su lógica.
- **`VIRAL_GAME_LOOP.md`:** define el loop; esta Bible protege visualmente sus pilares (score héroe, muerte justa, retry inmediato, prestigio sano).
- **Futuro `DESIGN_RECONCILIATION.md`:** resolverá las diferencias visión-vs-prototipo (empezando por los obstáculos) antes de tocar código.

**Candados de QA (no se alteran a la ligera):** silueta base de Pompón; igualdad de hitbox entre jugables; contraste mínimo de obstáculos contra el fondo; zona muerta decorativa alrededor del gap; y, transversal, **la barrera del §2** (nada del Physics Lab cambia sin el camino formal).

Restricciones heredadas (no se introducen aquí): monetización, backend, tienda, ads, pay-to-win, skins con ventaja, fuentes externas, audio, assets externos, ni cambios al core gameplay.

---

## 22. Recomendación final

- **No declarar "set documental completo" ni saltar directo a prototipo.** El trabajo de dirección está avanzado, pero la secuencia segura aún tiene pasos previos.
- **Paso 1 — persistir esta Bible solo tras esta revisión.** `VISUAL_DESIGN_BIBLE.md` se hace canónico **después** de que esta segunda auditoría confirme que (a) el §2 deja la jerarquía inequívoca, (b) la paleta separa producto (A) de Physics Lab bloqueado (B), (c) Pompón, materiales, tipografía y obstáculos están marcados como dirección futura, no permiso actual.
- **Paso 2 — redactar `DESIGN_RECONCILIATION.md`.** Resolver formalmente el conflicto de obstáculos: **agujas vs. columnas con trim (dirección D actual) vs. híbrido honesto.** Esto desbloquea cualquier cambio de obstáculo en el prototipo.
- **Paso 3 — recién entonces, prototipo aislado.** Obstáculo híbrido y/o pantalla de muerte/leaderboard, en un entorno aislado, sin tocar el Physics Lab canónico hasta validar.
- **Qué NO tocar todavía:** paleta, personaje, obstáculos, assets, fuentes, audio o UI del Physics Lab; monetización, backend, tienda, ads, pay-to-win, implementación.
- **Cómo saber que el sistema visual está listo:** cuando un diseñador pueda maquetar una pantalla nueva usando solo este documento y el resultado se sienta inequívocamente AmiguRush —cozy por fuera, claro al jugar, premium, honesto con la hitbox— **y** quede claro, para cualquiera que lo lea, que aplicarlo al Physics Lab exige antes el camino del §2.
