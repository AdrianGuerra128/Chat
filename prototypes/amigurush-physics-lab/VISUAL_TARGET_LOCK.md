# VISUAL_TARGET_LOCK.md

> Borrador para auditoría humana. No es implementación, no es código, no es persistencia en repo. No reemplaza `ART_DIRECTION.md` ni aprueba el sandbox híbrido. Es el contrato del **target visual de producto** que deberá guiar futuras beauty slices, después de auditoría y aprobación formal.

AmiguRush — Target visual de producto. El salto de laboratorio funcional a producto vendible.

---

## 1. Propósito del documento

Este documento define el estándar visual al que AmiguRush debe llegar para dejar de parecer un laboratorio y empezar a parecer un producto que un jugador querría probar por una sola captura. Es un **lock de aspiración**, no de implementación: declara qué debe sentirse al mirar el juego, no cómo conseguirlo en código.

**Qué NO es este documento:**
- No es implementación ni autoriza tocar el Physics Lab canónico.
- No es código, ni assets, ni pipeline.
- No es aprobación del sandbox `sandbox/obstacle-hybrid-prototype`.
- No reemplaza `ART_DIRECTION.md` (sigue siendo el Lock vigente del prototipo).
- No reemplaza `VISUAL_DESIGN_BIBLE.md` (sigue siendo la dirección amplia de marca/IP).

**Qué sí es:**
- El contrato del producto visual deseado.
- El criterio contra el que se medirá cualquier futura beauty slice.
- El paso documental previo a `PRODUCT_BEAUTY_SLICE_BRIEF.md` y a un eventual nuevo Art Direction Lock.

Mientras no se apruebe formalmente y se traduzca en una beauty slice validada, este documento es **dirección aspiracional con autoridad de auditoría, no de ejecución**.

---

## 2. Diagnóstico brutal del estado actual

El Physics Lab canónico hace exactamente lo que su nombre promete: calibra física, fairness, hitbox y feel. En esa función, está vivo y honesto. Como producto vendible, todavía no lo es. La distinción no es un error de quien lo construyó — es una fase intencional. Pero hay que nombrarla con honestidad.

Lo que el Lab logra hoy:
- Input responsivo, flap correcto, retry inmediato.
- Hitbox forgiving (padding) y muerte instrumentada.
- Render procedural consistente, sin assets externos.
- Telemetría de QA que protege la calibración de fairness.
- Una identidad cromática nocturna defendible para experimentación.

Lo que el Lab **no** logra hoy, y debe asumirse sin maquillaje:
- **Funcional pero no vendible.** Una captura del estado actual no se comparte: explica, no seduce.
- **Legible pero no deseable.** El gap se lee, sí; el mundo no provoca "quiero probarlo".
- **Correcto para QA, débil como screenshot comercial.** No hay frame que pueda ir a una store, a Twitch o a un thumbnail de TikTok sin verse como demo técnica.
- **Mundos planos.** El fondo es un gradiente con motas de parallax; cumple su función como contexto, no como mundo habitable.
- **Materiales todavía sugeridos, no encarnados.** Las "puntadas" son strokes punteados. El tejido se intuye; no se siente.
- **Personaje con poca presencia de producto.** Pompón existe como cuerpo redondo con cara, pero a 18 px de radio en una pantalla de 844 px de alto, su silueta es de avatar, no de protagonista.
- **Obstáculos como estructura, no como objeto.** Las columnas tejidas son la dirección correcta de fairness; visualmente son arquitectura funcional, no objetos artesanales que el jugador recuerde.
- **HUD con telemetría visible (death overlay con "Dist. centro gap", "Fairness: Justa", "Preset: Classic").** Útil en QA, fatal en producto.

Esto no es un juicio sobre el trabajo. Es el límite del estado "lab" — el estado para el que el Lab fue construido. El problema no es lo que es; es que **alguien podría confundirse y aprobarlo como producto.** Este documento existe para que eso no ocurra.

---

## 3. Tesis visual de producto

> AmiguRush debe sentirse como un mundo amigurumi vivo, premium, adorable y arcade, donde cada screenshot pueda vender el juego sin explicar nada.

Cuatro palabras forman el ADN no-negociable: **handmade, cozy, plush, premium**. Cuatro más definen la función comercial: **readable, streamer-friendly, clip-friendly, emotionally charming**.

Una decisión visual de producto es correcta si, y solo si:
- Lo handmade se ve y se siente, no se sugiere.
- Lo cozy baja la temperatura emocional del juego (la muerte se siente "aww", no castigo).
- Lo plush invita a tocar la pantalla (volumen blando, sombras suaves, sin brillos plásticos).
- Lo premium impide la lectura "juego barato" — consistencia total de gestos.
- La lectura del gameplay sobrevive todo lo anterior intacta.

La tesis se sostiene cuando un jugador que nunca ha oído hablar del juego ve una sola imagen, siente ternura, y abre la app store. Ese es el listón.

---

## 4. Lo que el usuario debe sentir en 2 segundos

Dos segundos es el tiempo real que tiene una captura de AmiguRush en el feed de un jugador. En esos dos segundos, la imagen tiene que disparar al menos tres de estas reacciones:

- **"Qué cute."** Ternura inmediata, sin contexto.
- **"Quiero probarlo."** Deseo de tap; intención de descarga.
- **"Se ve diferente."** El juego no se confunde con cualquier otro endless runner.
- **"Se ve premium."** No parece hecho en un weekend jam.
- **"Esto se puede volver viral."** Tiene un momento clippeable evidente.
- **"Quiero compartirlo."** La imagen funciona como currency social.

Si una captura propuesta no dispara al menos tres de las anteriores en un sujeto que no conoce el juego, la captura no representa el producto. Es lab dressed up.

---

## 5. Principios visuales no negociables

1. **Screenshot vendible.** Una captura debe vender el juego sin texto. Si requiere explicación, fracasó.
2. **Pompón es el héroe visual.** El personaje es el ícono. Todo lo demás existe alrededor de él, no a su pesar.
3. **Materialidad artesanal antes que patrón decorativo.** Mejor un solo material que se siente real que diez patrones que se ven dibujados.
4. **Gap sagrado y siempre legible.** Ninguna decoración invade el espacio navegable. La belleza no se paga con fairness.
5. **Belleza sin ruido.** Pocos elementos grandes y resueltos vencen a muchos elementos pequeños compitiendo.
6. **Mundo cálido, no plano.** Profundidad por capas, no por filtros. Parallax con propósito.
7. **Identidad por mundo, no solo cambio de color.** Cada mundo tiene material, mood y silueta propios — no es Pradera con paleta cambiada.
8. **Muerte justa visible en clip.** La muerte se ve justa a velocidad real y en cámara lenta. No solo es justa; **parece** justa.
9. **Cozy + arcade tension.** El envoltorio es blando; el núcleo aprieta. Una no diluye a la otra.
10. **Premium, no infantil barato.** Cute es deseable; "Fisher-Price" no. La diferencia es consistencia, jerarquía y materiales.
11. **Procedural puede ser temporal; producto final puede requerir arte real.** No se aprueba la estética final con base en placeholder procedural. Cuando el procedural no alcance, lo decimos.
12. **No sacrificar game feel por decoración.** Si una decisión visual amenaza input, fairness o claridad, la decisión está mal.

---

## 6. Separación entre lab, sandbox y producto

Tres planos distintos, con tres autoridades distintas. Confundirlos es el riesgo más alto del proyecto en esta fase.

- **Physics Lab actual (`claude/wonderful-heisenberg-m6djxv`, `ART_DIRECTION.md`).** Herramienta de calibración. Su trabajo es proteger fairness y feel, no vender el juego. Su estética es válida **como lab**, no como producto.
- **Hybrid sandbox (`sandbox/obstacle-hybrid-prototype`).** Prueba de fairness visual del obstáculo híbrido. Demuestra que decoración temática puede coexistir con hitbox honesta. **No demuestra que el resultado sea bonito.** Pasar fairness ≠ pasar deseabilidad.
- **Producto final.** Experiencia estética vendible. Su contrato vive aquí, en este documento, y debe materializarse en una beauty slice antes de pretender ser canónico.

Reglas de no-confusión:
- Un sandbox puede **pasar fairness y fallar estética**. Es exactamente lo que ocurrió en el ciclo más reciente del sandbox híbrido.
- "Legible" no es "bonito". El gap se lee; el mundo no encanta. Ambas afirmaciones son ciertas a la vez.
- No se aprueba arte final con base en placeholder procedural. El procedural es andamio, no fachada.
- No se promueve sandbox a canónico solo porque la fairness pasó. La promoción exige también pasar el §20 de este documento.

---

## 7. Target visual general

Cuando AmiguRush sea producto, una pantalla cualquiera debe leerse así:

- **Mundo de lana vivo.** El fondo no es decorado; es escenario. Tejido, tela, hilos, parches — todo con materialidad reconocible.
- **Objetos con tacto.** Cualquier elemento parece tocable. No hay planos vacíos; hay piezas.
- **Costuras visibles pero limpias.** El "cosido" es firma de marca; nunca ruido.
- **Sombras suaves.** Volumen blando, sombras de peluche, cero brillos plásticos.
- **Colores ricos.** Pastel cálido, saturación contenida, valor controlado. Premium por restricción, no por estridencia.
- **Formas redondeadas.** Esquinas extremas; ningún borde duro fuera de la tipografía.
- **Profundidad por capas.** Al menos tres planos legibles: fondo lejano (blur/desat), fondo cercano (con material), capa jugable (nítida, prioritaria).
- **Sensación de juguete/peluche.** El mundo se ve abrazable.
- **Composición vertical fuerte.** El formato 9:16 (390×844) se respeta como **diseño**, no como restricción. Cada captura está compuesta.
- **Personaje memorable.** Pompón es el primer foco de la imagen, siempre.

El opuesto exacto del estado actual, sin destruirlo: lo que el Lab abandona en función de calibración, el producto lo recupera en función de venta.

---

## 8. Target de Pompón / personaje

Pompón no es un punto de gameplay. Es la cara del producto, el ícono de la marca, el avatar de la comunidad y el sticker que la gente quiere usar en chats. El estándar de producto:

- **Presencia visual aumentada.** Sin tocar la hitbox de colisión, su silueta visible debe ser un protagonista, no un sprite. La pelota redonda de 18 px de radio actual es suficiente para Lab; el producto pide cuerpo, expresividad facial visible a tamaño de captura, y firma reconocible.
- **Silueta reconocible.** Identificable en negro a 16 px (regla de la Visual Design Bible). Sus rasgos distintivos aprobados —forma, expresión, accesorios o símbolo de marca— deben ser reconocibles incluso en tamaño pequeño.
- **Expresión adorable.** Cara a cámara siempre que la cámara lo permita. Ojos grandes con brillo; sonrisa bordada; mejillas rosadas.
- **Animación encantadora.** El bob en READY, el squash & stretch del flap, el wag de la cola — direcciones que el Lab ya intuye. El producto las lleva a frames de plush con peso.
- **Lectura inmediata.** En cualquier captura, el ojo va a Pompón en menos de 200 ms.
- **Apto para ecosistema social.** Avatar, sticker, merch, emote, clip thumbnail. Si la silueta no funciona en cualquiera de esas cinco superficies, falta trabajo.

Qué **no** hacer:
- **Agrandar visualmente si rompe hitbox.** La silueta visible puede crecer; el radio de colisión efectiva no se toca por decisión estética sin QA dedicada.
- **Detallarlo hasta perder lectura.** Cute legible vence a cute barroco.
- **Genérico.** Si Pompón puede confundirse con cualquier otra mascota cute de mobile, el diseño falló.
- **Mascota plana sin personalidad.** Una mascota sin micro-expresiones no se quiere; se tolera.

---

## 9. Target de mundos

Tres mundos, tres contratos. Ninguno se aprueba sin pasar su contrato específico.

### Pradera Hilván

Debe sentirse: **cálida, soleada, suave, hecha de hilo y tela, acogedora, con profundidad, ideal para onboarding visual.** El primer mundo es la primera impresión del producto. Si Pradera no enamora en dos segundos, el resto da igual.

Debe evitar:
- Verde plano sin material.
- Tablones, prados pintados, vallas genéricas.
- Sensación de demo (sky gradient + grass line).
- Decoración de cuento infantil barato.

### Carnaval de Ovillos

Debe sentirse: **festivo, vibrante, streamable, juguetón, con energía, pero aún legible.** Es el mundo viral por antonomasia — el de las capturas que se comparten. La saturación es invitada, no protagonista.

Debe evitar:
- Ruido visual cerca del gap.
- Saturación sin control que coma la silueta del obstáculo.
- Perder el gap por carga cromática.
- Estridencia que rompa el pacto premium.

### Cuna Estelar

Debe sentirse: **mágica, nocturna, premium, suave, luminosa, emocional.** El cierre emocional del arco. Si Pradera vende ternura y Carnaval vende energía, Cuna vende **sentimiento**.

Debe evitar:
- Oscuridad plana (navy uniforme sin profundidad).
- Bajo contraste obstáculo-fondo.
- Muerte invisible al espectador del clip.
- Bordes luminosos que se lean como filo agente de colisión.

Cada mundo se evaluará por su contrato emocional propio, no por una checklist uniforme. La aprobación no es comparativa entre mundos; es contra el estándar de cada uno.

---

## 10. Target de obstáculos

Los obstáculos del producto son **objetos artesanales memorables**, no estructuras pintadas. La columna funcional es el cimiento de fairness; el producto la viste de objeto.

Definiciones:
- **Obstáculo de laboratorio:** columna tejida procedural con trim, paleta nocturna. Estado actual del Physics Lab. Función: calibrar.
- **Obstáculo de sandbox:** híbrido honesto con piel temática por mundo. Estado actual del sandbox `b4610f2`. Función: probar fairness visual.
- **Obstáculo de producto:** objeto artesanal — aguja real con cuerpo de hilo, rama con botones tridimensionales, almena patchwork con relieve, ovillo con espiral honesta — que **mantiene cuerpo honesto y silueta clara**, pero se siente como **algo que existe en el mundo**, no como geometría coloreada.

Reglas:
- Cuerpo de colisión idéntico al cuerpo visible (regla de la Bible, sostenida).
- Silueta clara contra el fondo del mundo (criterio §17 de la Bible).
- Decoración fuera de la zona muerta (candado del Reconciliation).
- Apariencia de objeto, no de bloque.
- Identidad por mundo, materializada en material y silueta exterior — no solo en color.

El sandbox híbrido prueba que esto es **posible**; este documento exige que sea **deseable**.

---

## 11. Target de HUD

El HUD de producto es: **mínimo, elegante, legible, compatible con clip, no debug-heavy.**

- **Score grande, héroe absoluto.** Tipografía display, sombra suave, placa/halo textil donde el fondo lo exija. Protagonismo por tamaño y contraste, no por estridencia.
- **Récord personal presente pero secundario.** Visible, no compitiendo.
- **Nada técnico en la pantalla principal.** "Dist. centro gap", "Fairness: Justa", "Preset" no existen en producto. Quedan exclusivamente detrás de `debugMode = true` en Lab Mode.
- **Compatible con clip.** El HUD no tapa la acción; el score no se confunde con el mundo; la captura se sostiene sin recortar.
- **Una sola jerarquía visual.** Score → récord → resto. Sin estados confusos.

El HUD no es decoración del juego; es **parte del producto**. Diseñarlo con el mismo cuidado que el personaje.

---

## 12. Target de pantalla de muerte / retry

La pantalla de muerte actual es un **panel técnico**. Lista causas, distancias, shifts, fairness verdict y preset. Útil para calibrar. Imposible como producto.

Evolución obligatoria a **momento emocional**:

- **Retry inmediato.** CTA primario, gigante, sin loading, sin interstitial. Menos de 1 segundo de intención al siguiente tap (regla del Viral Game Loop §5).
- **Muerte adorable pero clara.** Pompón cae con expresión tierna; reduce rage-quit. La animación no bloquea el retry.
- **Score / best / last con emoción.** Tipografía display, jerarquía clara, delta legible: "+8 sobre tu récord" o "a 2 de igualarlo".
- **"Casi lo lograste" sin manipulación barata.** El delta auténtico ya es near-miss; no se inventan métricas para forzar emoción.
- **Telemetría oculta salvo debug.** "Margen mínimo", "Shift extremo", "Causa: Obstacle" → solo visible en Lab Mode.
- **Confeti de lana en récord batido.** Clippeable, opcional, nunca bloqueante.

Si la pantalla de muerte no provoca "una más" en el primer test de usuario que no conoce el juego, la pantalla está mal.

---

## 13. Target de viralidad visual

Lo clippeable se diseña; no aparece. AmiguRush vive en feeds de Twitch y TikTok, y debe sobrevivir a esa selección. Lo que hace clippeable el juego:

- **Personaje adorable** que la cámara puede capturar a tamaño grande sin perder identidad.
- **Muerte entendible** en velocidad real y cámara lenta — el espectador puede explicarla con un gesto.
- **Mundo reconocible** que dice "AmiguRush" en un solo frame, no en seis.
- **Score visible** sin invadir la composición.
- **Fracaso emocionalmente aceptable** — cute desinfla la frustración, hitbox honesta legitima la muerte.
- **Screenshot claro** que sobrevive a thumbnails comprimidos y reproducciones en bucle.
- **1 segundo de lectura basta** para que un viewer que jamás vio el juego entienda qué pasó.

La viralidad visual es la métrica más alta de este documento. Un mundo bello que no clipa es un mundo que no se descubrirá.

---

## 14. Estándar de belleza

No basta con que "se vea mejor que el lab". La pregunta operativa, contra la que toda propuesta visual se mide:

- **¿Alguien querría probarlo solo por una captura?**
- **¿Se siente como juego real, no como prototipo?**
- **¿Se siente premium?**
- **¿El personaje tiene alma, no solo cara?**
- **¿El mundo se recuerda después de cerrar el feed?**
- **¿La imagen compite con otros juegos cute/cozy del mercado?**
- **¿La estética ayuda activamente a vender el loop, o solo lo decora?**

Si la respuesta a cualquiera de las siete preguntas es "no" o "no estoy seguro", la propuesta no está lista. **Siete síes son el listón mínimo.** Seis no son suficiente.

---

## 15. Qué queda prohibido visualmente

Lista cerrada de lo que **no** entra al producto, independientemente de quién lo proponga:

- **Fondos planos sin intención.** Gradientes solos no son mundo.
- **Objetos genéricos.** Si una rama, una aguja o una estrella puede vivir en otro juego sin modificar, no es nuestra.
- **Cambio de color como sustituto de identidad.** Re-paletar no es diseñar un mundo.
- **Decoración que ensucie el gap.** Ningún adorno entra en la zona muerta.
- **Personaje perdido.** Si Pompón compite con la decoración por atención, falló.
- **Estética infantil barata.** Cute sin premium se ve a 1 dólar.
- **Textura procedural que parezca placeholder.** Si en una captura final una textura grita "esto es draft", no es final.
- **UI de debug como UI final.** Telemetría visible en producto = falla absoluta.
- **Aprobar arte final sin evidencia visual.** No hay aprobación sobre supuesto.
- **Confundir "cute" con desorden visual.** Diez cosas adorables compitiendo no son adorables; son ruido.
- **Perseguir belleza sacrificando fairness.** Ninguna decoración justifica una muerte ambigua.

---

## 16. Beauty Slice recomendada

La primera beauty slice de AmiguRush debe ser **Pradera Hilván**.

Justificación:
- Es el mundo más seguro para establecer la firma de ternura del producto.
- Es el mundo de onboarding — el primero que verá cualquier jugador.
- Tiene el menor riesgo de ruido visual: paleta cálida, saturación contenida, escala emocional baja.
- Es el caso ideal para demostrar materialidad premium/cozy sin escudos.
- **Es el filtro existencial: si Pradera no enamora, los otros mundos no deben siquiera prototiparse.**

Qué debe incluir la beauty slice de Pradera:
- **Pompón con presencia final-ish** — silueta de producto, micro-animaciones encantadoras, expresividad facial legible en captura.
- **Fondo con profundidad real.** Mínimo tres capas de parallax, con material reconocible (colinas de hilo, motas de lana, horizonte de tela cosida).
- **Obstáculo artesanal legible.** Aguja real, cuerpo honesto, identidad de objeto, no de bloque.
- **HUD más limpio.** Score héroe, récord secundario, cero telemetría.
- **Muerte/retry presentable.** Pantalla de muerte como momento emocional (§12).
- **Una screenshot vendible.** Al menos una composición específica que pueda ir a una store o a un thumbnail sin retoque adicional.

La beauty slice de Pradera es el **veredicto** del estándar de este documento. Si pasa, AmiguRush puede ser producto. Si no pasa, hay que volver a diagnóstico antes de seguir.

---

## 17. Secuencia recomendada lab → producto

Ningún paso se salta. Ningún paso se acelera por presión externa. Pero la secuencia admite locks parciales por mundo, siempre que la base esté validada.

1. **Cerrar diagnóstico visual actual.** Aceptar el §2 sin maquillaje. Aceptar que el Lab cumplió su función y necesita ahora otra fase distinta.
2. **Aprobar `VISUAL_TARGET_LOCK.md`.** Auditar este documento, ajustarlo si hace falta, persistirlo como PASS.
3. **Redactar `PRODUCT_BEAUTY_SLICE_BRIEF.md`.** El brief específico de la beauty slice de Pradera, con alcance, candados, criterios de éxito y entregables.
4. **Crear mockup / hero screenshot target.** Una imagen objetivo de Pradera Hilván que sea la **norte de la beauty slice**. Sin esa imagen, la slice no se empieza.
5. **Implementar beauty slice de Pradera.** En sandbox aislado, sin tocar canónico, con el brief como única fuente de alcance.
6. **Revalidar fairness.** La beauty slice debe pasar los criterios del Hybrid Brief §21 — no se promueve sin eso.
7. **Lock parcial / anexo de Pradera (opcional).** Si la beauty slice de Pradera pasa el checklist §20 y la revalidación de fairness, puede formalizarse un **anexo de Art Direction Lock específico de Pradera** — no como reemplazo del Lock global vigente, sino como adenda con alcance limitado al mundo validado. Esto permite avanzar sin esperar a que los tres mundos estén completos.
8. **Expandir a Carnaval y Cuna**, cada uno con su propio brief, su propio criterio emocional y su propio anexo de lock si pasa.
9. **Considerar un nuevo Art Direction Lock global** solo cuando exista evidencia suficiente — al menos una beauty slice fuerte validada, e idealmente más de un mundo cubierto por anexo — que justifique reemplazar el Lock vigente en lugar de extenderlo por adendas.

Regla unificadora: **no cambiar el Art Direction Lock global prematuramente.** Los anexos parciales son herramienta de avance controlado; el reemplazo completo del Lock es una decisión más alta, que exige más evidencia. Pretender saltarse pasos por entusiasmo es la única forma garantizada de fallar.

---

## 18. Relación con obstáculos híbridos

El sandbox `sandbox/obstacle-hybrid-prototype` no muere con este documento. Pero queda recolocado.

- El sandbox **prueba fairness visual** del obstáculo híbrido. Esa prueba sigue siendo válida y útil.
- El sandbox **no prueba belleza final**. Sus pieles por mundo son adecuadas para QA visual, no para venta.
- El sandbox **puede informar decisiones** del producto: las reglas de cara exterior, zona muerta, decoración en extremo, son aprendizajes reales.
- El sandbox **no debe gobernar la estética final**. Es insumo, no veredicto.
- **Cualquier obstáculo final debe pasar dos auditorías independientes**: la de fairness (sandbox) y la de deseabilidad (este documento + beauty slice).

Pasar fairness no es licencia para promover estética. Es licencia para que la estética se construya encima sin miedo.

---

## 19. Relación con dificultad y viral loop

La estética no es decoración secundaria del gameplay. Es **parte del producto vendible**, igual que la curva de dificultad y el loop viral.

- La estética **aumenta el deseo de probar.** Un loop perfecto en un juego feo no se descarga.
- La viralidad **necesita lectura inmediata.** Si la captura no se entiende en un segundo, el clip no se comparte.
- Una **muerte justa debe verse justa.** La fairness técnica no es suficiente; necesita evidencia visual.
- Una **captura debe prometer diversión.** El loop es invisible en una imagen; la estética es lo que vende la imagen.
- Un **personaje adorable suaviza frustración.** La curva de dificultad puede apretar más si el envoltorio cozy compensa emocionalmente.

Por lo tanto: no se trabajan curva de dificultad y beauty slice en serie sin reconocer su dependencia mutua. La curva única (en propuesta de Difficulty Curve Report previo) y el target visual de este documento son dos caras del mismo producto. La aprobación final exige las dos.

---

## 20. Criterios de aprobación visual futura

Cualquier propuesta visual se evalúa contra esta checklist. Su aplicación depende del contexto: producto final exige el estándar completo; sandbox y beauty slice experimental admiten "no" temporales, clasificados por severidad antes de decidir si bloquean o no.

**Checklist:**

- [ ] **Screenshot vendible:** una captura puede ir a una store sin retoque ni explicación.
- [ ] **Personaje protagonista:** el ojo va a Pompón en menos de 200 ms.
- [ ] **Mundo con identidad:** la captura dice "este es Pradera/Carnaval/Cuna" sin label.
- [ ] **Gap legible:** el espacio navegable se lee al instante a velocidad real en móvil.
- [ ] **Muerte justa en clip:** en cámara lenta, el agente de colisión es inequívocamente el cuerpo honesto.
- [ ] **Escala de grises legible:** la composición funciona sin color.
- [ ] **Materiales artesanales claros:** lana, fieltro, hilo, tela — reconocibles, no sugeridos.
- [ ] **HUD no invasivo:** score héroe, récord secundario, cero telemetría.
- [ ] **Retry emocional:** la pantalla de muerte se siente como invitación, no como castigo.
- [ ] **No se siente lab:** ningún elemento delata el origen procedural temporal.
- [ ] **No se siente genérico:** la captura no puede confundirse con otro juego cute/cozy del mercado.
- [ ] **No depende de explicación verbal:** la imagen sostiene la promesa del juego sin texto.

**Regla de aplicación:**

- **Aprobación de producto final** (canónico, nuevo Art Direction Lock o anexo de mundo): exige los **doce síes**. Ningún "no" se acepta. Once no son suficiente.
- **Sandbox / beauty slice experimental** (validación intermedia, evidencia QA, exploración estética): los "no" deben clasificarse antes de decidir si bloquean:
  - **Crítico** — fairness comprometida, gap ilegible, muerte ambigua en clip, HUD invasivo. **Bloquea siempre.** No avanza sin resolverse.
  - **Medio** — identidad de mundo débil, contraste en escala de grises insuficiente, materiales todavía sugeridos. **Bloquea promoción a producto final**, pero no necesariamente la captura de evidencia ni la siguiente iteración del sandbox.
  - **Menor** — pulido cosmético, lectura ambigua de un detalle no central, composición mejorable. **No bloquea**; queda documentado para el ciclo siguiente.

La severidad se decide explícitamente en el reporte de la propuesta, no se asume. Un sandbox con "no" solo en categoría menor puede generar evidencia y seguir; uno con un solo "no" crítico, no.

---

## 21. Recomendación final

**Veredicto:**
- **No aprobar la estética actual como producto.** El Lab es excelente como herramienta de calibración. No es producto. Confundir lo uno con lo otro es el riesgo mayor del proyecto en esta fase.
- **No descartar el sandbox híbrido.** Su prueba de fairness visual es valiosa y permanece útil. Pero queda como insumo, no como veredicto estético.
- **No tocar `ART_DIRECTION.md` todavía.** Sigue siendo el Lock vigente del Physics Lab. Cambiar el Lock antes de tener al menos una beauty slice validada es exactamente el error que este documento existe para prevenir.

**Próximos pasos accionables, en orden estricto:**
1. Auditar y aprobar `VISUAL_TARGET_LOCK.md`.
2. Redactar `PRODUCT_BEAUTY_SLICE_BRIEF.md` con alcance: Pradera Hilván, vertical slice, sandbox aislado.
3. Producir mockup/hero screenshot target de Pradera Hilván como norte visual.
4. Construir la beauty slice de Pradera.
5. Validar contra el checklist §20 con la regla de aplicación correspondiente.
6. Revalidar fairness con los criterios del Hybrid Brief.
7. Si pasa, considerar un anexo de Art Direction Lock específico de Pradera (no reemplazo del Lock global).
8. Solo entonces, expandir a Carnaval y Cuna.
9. Solo cuando haya evidencia suficiente, considerar reemplazo del Art Direction Lock global.

**Principio que este documento protege por encima de todo:** la estética de AmiguRush no es opcional. Es co-cimiento del producto, junto a la fairness y al loop. Si una decisión futura amenaza el estándar de venta visual, el deseo de probar, la lectura inmediata o la coherencia premium — está mal.

El juego debe poder venderse con una sola imagen. Ese es el contrato. Todo lo demás es trabajo para cumplirlo.
