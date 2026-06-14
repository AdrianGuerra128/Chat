# PROJECT_HANDOFF.md

> Read this first when continuing AmiguRush Physics Lab with any AI, developer, tester, or future build agent.
>
> This document is a navigation and continuity file. It does not replace any approved spec. It tells a new builder what exists, what is canonical, what is experimental, what is blocked, and what the next safe move should be.

---

## 1. Current canonical location

Repository:

`AdrianGuerra128/Chat`

Project folder:

`prototypes/amigurush-physics-lab/`

Canonical branch:

`claude/wonderful-heisenberg-m6djxv`

Current canonical HEAD at the time this handoff was created:

`94497aca3f751888dafa70f12817f2caed52d397` (`94497ac`)

Latest known canonical commit message:

`Add AmiguRush visual target lock`

Do not assume another branch is canonical unless the user explicitly says so.

---

## 2. What this project currently is

AmiguRush Physics Lab is an isolated vertical gameplay laboratory for a future AmiguRush product.

It is not the full game. It is a controlled sandbox for validating:

- core flap physics,
- fairness,
- hitbox honesty,
- obstacle readability,
- retry feel,
- visual direction,
- product desirability direction,
- future viral/community design.

The lab exists to protect the core before the full game is built.

---

## 3. What must be opened first

A new AI or builder should read these files in this order:

1. `PROJECT_HANDOFF.md` — this file.
2. `README.md` — how to run the lab and what versions exist.
3. `ART_DIRECTION.md` — current visual lock for the existing Physics Lab.
4. `VISUAL_TARGET_LOCK.md` — target for product-level visual quality.
5. `VISUAL_DESIGN_BIBLE.md` — broader brand/IP visual direction.
6. `DESIGN_RECONCILIATION.md` — reconciliation between honest obstacles and desired product aesthetics.
7. `OBSTACLE_HYBRID_PROTOTYPE_BRIEF.md` — isolated brief for testing hybrid obstacle visuals.
8. `UNIVERSE_BIBLE.md` — world, tone, character, and universe rules.
9. `VIRAL_GAME_LOOP.md` — viral/retry/community loop doctrine.
10. `COMMUNITY_COMPETITION_LAYER.md` — ranking, records, Twitch/Staryuuki/community layer.
11. `game.js`, `index.html`, `styles.css` — current executable lab.

Do not start coding before reading the docs above.

---

## 4. Canonical documents in this folder

### `ART_DIRECTION.md`

Status: PASS.

Role: current Art Direction Lock for the existing Physics Lab.

Protects:

- Canvas 2D procedural direction,
- no external images/assets/fonts/audio,
- no physics/preset/fairness/spawn/score/hitbox/telemetry changes through art work,
- character as focus of frame,
- gap legibility over decoration,
- current obstacle Direction D: hybrid woven columns with thick stitch/yarn edge.

Important: this is still the current lock for the active Physics Lab. It is not automatically replaced by later product visual docs.

---

### `VISUAL_TARGET_LOCK.md`

Status: PASS.

Role: product-level visual target.

Core doctrine:

AmiguRush cannot merely function; it must be visually desirable. The game should be able to sell itself through one screenshot.

Protects:

- screenshot vendible,
- Pompón as visual hero,
- handmade/cozy/plush/premium feel,
- product desirability as co-equal with fairness and viral loop,
- separation between lab, sandbox, and final product,
- Pradera Hilván as recommended first beauty slice,
- no approval of final art from placeholders,
- no confusing “legible” with “beautiful.”

Important: this document does not authorize code changes by itself. It defines the visual standard future work must satisfy.

---

### `VISUAL_DESIGN_BIBLE.md`

Status: PASS.

Role: broader visual bible for brand/IP/product direction.

Protects:

- product/IP visual direction,
- distinction between broad AmiguRush brand and current Physics Lab,
- non-replacement of `ART_DIRECTION.md`,
- future product potential beyond current procedural lab.

Important: it does not authorize changing current code, palette, character, obstacle, assets, fonts, audio, UI, or gameplay.

---

### `DESIGN_RECONCILIATION.md`

Status: PASS.

Role: reconciles the tension between honest obstacle fairness and richer product/world fantasy.

Core conclusion:

The current Physics Lab remains under `ART_DIRECTION.md`. The product aspiration is an honest hybrid obstacle approach, but only after isolated prototype and QA.

Protects:

- gap dead zone,
- visual honesty,
- no literal decoration invading gameplay readability,
- no product promotion from unvalidated visuals,
- new Art Direction Lock only after evidence.

---

### `OBSTACLE_HYBRID_PROTOTYPE_BRIEF.md`

Status: PASS.

Role: isolated prototype brief for testing hybrid obstacle visuals.

Protects:

- separate sandbox branch,
- no canonical change without QA,
- no physics changes,
- no hitbox changes,
- no gap changes,
- dead zone rules,
- required evidence before approval.

Important: this validates whether hybrid visuals can coexist with fairness; it does not validate product beauty.

---

### `UNIVERSE_BIBLE.md`

Status: PASS.

Role: world, tone, character, and universe specification.

Defines AmiguRush as a soft, crafted, amigurumi-inspired universe with multiple worlds, including:

- Pradera Hilván,
- Bosque de Botones,
- Carnaval de Ovillos,
- Río de Cintas,
- Castillo Patchwork,
- Cuna Estelar.

Important: it complements `ART_DIRECTION.md`; it does not replace the current lab art lock.

---

### `VIRAL_GAME_LOOP.md`

Status: PASS.

Role: retry, shareability, competition, and social loop doctrine.

Protects:

- immediate retry,
- fair death,
- score chasing,
- weekly/community ranking concepts,
- Twitch/Staryuuki/community fit,
- no ads between retries,
- no pay-to-win,
- no monetization inserted into core loop.

---

### `COMMUNITY_COMPETITION_LAYER.md`

Status: PASS.

Role: community/ranking/social design layer.

Defines:

- records,
- rankings,
- community competitions,
- streamer integration concepts,
- anti-toxicity principles,
- future “Más Récords” and result screen concepts.

Important: not backend implementation yet.

---

## 5. Current executable lab files

### `index.html`

Role: browser entrypoint and control panel.

Current lab can be opened directly by opening `index.html` in a browser. No build step is required.

### `game.js`

Role: core gameplay, physics, procedural rendering, presets, obstacle generation, scoring, death, retry, telemetry, and debug behavior.

Do not edit this file casually. Most product work should first go through a brief and sandbox branch.

### `styles.css`

Role: layout and UI styling for the lab/control panel.

---

## 6. Current playable state

The Physics Lab currently includes:

- fixed-step physics,
- tap/click/space flap,
- Ready / Playing / Dead states,
- immediate retry,
- score and best score,
- presets: Soft, Classic, Brutal, Viral Candidate,
- debug mode,
- death telemetry,
- procedural crochet/amigurumi-inspired character,
- procedural woven obstacles,
- parallax background,
- v0.5 obstacle identity pass.

Important product decision:

The final product should not necessarily expose Soft / Classic / Brutal / Viral Candidate to players. Those presets are lab tools. The product direction is likely one main invisible difficulty curve that starts fair, builds tension, and supports viral retry.

---

## 7. Known gameplay issue to revisit

Recent test feedback indicated that Classic and Viral Candidate can produce early deaths under 2 seconds with score 0. This may be technically fair but can feel unfair to new players.

Known diagnosis:

- technical fairness is not enough,
- perceived fairness matters,
- first obstacle should not feel like a surprise wall,
- final product probably needs one polished difficulty curve rather than player-visible presets.

Safe future work:

Create a separate tuning branch and brief before changing early difficulty.

Do not change physics casually from product-art work.

---

## 8. Current visual/product issue to revisit

The current lab and hybrid sandbox are useful but not visually sufficient as product.

Brutal diagnosis already accepted:

- lab is functional but not vendible,
- current procedural visuals are readable but not desirable enough,
- world feels too flat / cold / placeholder,
- visual standard must rise to match the user’s reference aspirations and the built universe,
- art and aesthetics are as important as addictiveness and viral loop.

Safe future work:

The next recommended document is:

`PRODUCT_BEAUTY_SLICE_BRIEF.md`

Recommended first beauty slice:

`Pradera Hilván`

Goal:

Build one product-level vertical slice that can produce a screenshot worth selling the game.

---

## 9. Sandbox branch information

Known experimental branch:

`sandbox/obstacle-hybrid-prototype`

Known sandbox commit:

`b4610f2e774695a400d13c8ffd12c39297009d7a` (`b4610f2`)

Purpose:

Prototype hybrid obstacle visuals with world controls and dead zone visualization.

Important:

- This branch is not canonical.
- It should not be merged into canonical without visual evidence and a new approved lock/brief.
- It is useful for fairness visual learning, not product beauty approval.

---

## 10. How to run locally

From this folder:

`prototypes/amigurush-physics-lab/`

Open:

`index.html`

On Windows PowerShell:

```powershell
start .\index.html
```

No Python server is required.

If a server is available:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

---

## 11. Safe working rules for any future AI

Before changing anything:

1. Confirm branch.
2. Confirm HEAD.
3. Confirm working tree clean.
4. Read this file and all PASS docs.
5. State exactly what will be changed.
6. Never mix documentation changes with gameplay/code changes unless explicitly approved.
7. Never change physics while doing art unless the brief explicitly permits it.
8. Never change hitbox, collision, gap, spawn, score, presets, or telemetry as a side effect of visual work.
9. Never promote sandbox work to canonical without evidence.
10. Never replace `ART_DIRECTION.md` with universe/product docs automatically.
11. Never treat screenshots or references as final approval without explicit user decision.
12. Never declare PASS without evidence.

---

## 12. Recommended next move

The next safe project step is not code.

Recommended next document:

`PRODUCT_BEAUTY_SLICE_BRIEF.md`

Purpose:

Define a first product-level visual vertical slice for **Pradera Hilván**.

It should specify:

- exact scope,
- forbidden changes,
- required evidence,
- mockup/hero screenshot target,
- Pompón product presence,
- background depth/materiality,
- obstacle product quality,
- HUD cleanup,
- death/retry emotional target,
- fairness revalidation,
- screenshot vendibility checklist.

Only after that brief is approved should implementation begin.

---

## 13. Do not lose these principles

- AmiguRush must be fair.
- AmiguRush must be addictive.
- AmiguRush must be visually desirable.
- The game must sell itself through one screenshot.
- Cute is not enough; it must feel premium.
- Procedural is acceptable for lab, but product may require real art direction and better visual execution.
- Pompón is not a ball; Pompón is the hero.
- The gap is sacred.
- Viral clips require readable deaths.
- A sandbox can pass fairness and fail beauty.
- Product approval requires both.

---

## 14. File map quick reference

| File | Status | Role |
|---|---:|---|
| `PROJECT_HANDOFF.md` | Active | Start-here continuity map |
| `README.md` | Active | Run instructions and version history |
| `ART_DIRECTION.md` | PASS | Current Physics Lab art lock |
| `VISUAL_TARGET_LOCK.md` | PASS | Product visual target lock |
| `VISUAL_DESIGN_BIBLE.md` | PASS | Product/IP visual bible |
| `DESIGN_RECONCILIATION.md` | PASS | Reconciles visual aspiration with fairness |
| `OBSTACLE_HYBRID_PROTOTYPE_BRIEF.md` | PASS | Hybrid obstacle sandbox brief |
| `UNIVERSE_BIBLE.md` | PASS | World/universe bible |
| `VIRAL_GAME_LOOP.md` | PASS | Viral/retry/social loop doctrine |
| `COMMUNITY_COMPETITION_LAYER.md` | PASS | Rankings/community competition layer |
| `index.html` | Active lab | Browser entrypoint/control panel |
| `game.js` | Active lab | Gameplay/physics/render core |
| `styles.css` | Active lab | Lab/control panel styling |

---

## 15. Human owner preference

The owner has been clear:

- Do not settle for “good enough.”
- Do not confuse technical progress with product readiness.
- Be honest when something looks ugly, cold, cheap, or not sellable.
- Protect the world that has been built around AmiguRush.
- Aesthetic impact matters as much as viral loop and addictive gameplay.

Future builders should keep that standard.

---

## 16. Current handoff verdict

The project is in a strong documentation phase.

The core lab exists.

The universe exists.

The community/viral doctrine exists.

The product visual target now exists.

The next disciplined step is a **Pradera Hilván beauty slice brief**, not a rushed implementation.

