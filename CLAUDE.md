# ERA React Website — Claude Context

> **MAINTENANCE RULE:** Keep this file current. Whenever you add a page, route, section component, or change project architecture — update the relevant section here before finishing the task. Routes table, deployment crawl count, and architecture notes must never fall behind the actual code.

## What this project is

React website for **NPT Shtypshkronja ERA** — a Kosovo-based paper packaging manufacturer.
Owner/designer: **Besnik** (besnikdesigns@gmail.com).

Full business context (products, clients, pricing, revenue, brand): see `ERA_context.md`.

---

## Tech stack

- **Vite + React + JSX** — no TypeScript, ever
- **React Router v7** — multi-page routing, `basename="/era-react-website"`
- **Tailwind CSS v3** — utility-first, no separate CSS files unless unavoidable
- **Framer Motion** — animations
- **R3F v9 + @react-three/drei v10 + Three.js v0.184** — 3D product configurator
- **No component library** — build from scratch (Radix Sheet exists but is unused on mobile)

---

## Brand

- **Primary color:** `#4ca706` (ERA green)
- **Background:** `#0f1010` (near-black)
- **Language:** Albanian (shqip) primary, English secondary — always write AL first, EN second
- **Phone / WhatsApp:** +383 44 113 533
- **Style:** Dark + premium. Signal "regional manufacturing partner", not "local printer."

---

## Albanian copy guidelines

**Tone:** Professional and trustworthy, but warm. B2B — the reader is a café or restaurant owner. Serious enough to earn trust, friendly enough to feel approachable. No filler, no hype.

**Never use "markën" or "marka".** Always use "biznesin/biznesi" instead. "Marka" sounds unnatural in Kosovo Albanian business context.

**Never use "ambalazhe" as a catch-all.** Use "produkte" when referring to the full range, "paketime" only for boxes/labels/wrapping, and always use the specific product name (gota letre, kuti, etiketa) where possible.

**Approved product names (use exactly these):**
| Product | Albanian name |
|---|---|
| Paper cups (espresso, coffee, cappuccino) | Gota letre |
| Takeaway cups | Kupa takeaway |
| Pasta / soup cups | Kupa pasta |
| Ice cream cups | Kupa akullore |
| Cutlery holders | Mbajtëse |
| Table paper | Letër tavoline |
| Everything else (boxes, labels, cardboard…) | Paketime |

**IMPORTANT:** When adding a new product, always ask Besnik for the correct Albanian name before writing any copy. Do not invent or guess product names.

**Always use `ti/tënde/ty` (informal).** Never use `ju/juaj` — the brand is warm and direct, not corporate.

**Always use "partnerë/partnerëve" in visible UI copy.** Never use "klientë" in headlines, stats, cards, or body text. Exception: `meta[name="description"]` only (SEO search term).

**Short sentences.** Avoid passive voice. Speak directly to the client using `ti`.

---

## Bilingual rule — MANDATORY

**Every string visible to the user must have both Albanian and English.** No exceptions.

This applies to every section, page, component, data file, and footer added or changed.

**Pattern to use:**
```jsx
{lang === 'al' ? 'Teksti shqip' : 'English text'}
```

Or for larger content blocks, use a bilingual object:
```js
const copy = {
  al: { title: 'Titulli', desc: 'Përshkrimi' },
  en: { title: 'Title',   desc: 'Description' },
}
// then: copy[lang].title
```

**How lang flows:**
- `lang` state lives in `App.jsx` (`useState('al')`)
- `SimpleHeader` receives `lang` and `onLangChange` as props (controlled)
- All page `<Route>` elements receive `lang={lang}`
- All section components receive `lang` as a prop and forward it to children
- `StickyFooter` receives `lang={lang}` from `App.jsx`

**When adding a new section or page:**
- [ ] Accept `lang` as a prop (default `'al'`)
- [ ] Every user-visible string uses `lang === 'al' ? '...' : '...'`
- [ ] AL always written first, EN second
- [ ] Pass `lang={lang}` when rendering the section from its parent page

**When adding a new data file** (`src/data/products/*.js`):
- [ ] All string fields use `{ al: '...', en: '...' }` objects
- [ ] `name`, `tagline`, `imgAlt`, `badges`, `highlights`, `specs`, `steps`, `related`, `whatsappText`, `seo` — all bilingual

---

## Key architecture decisions

- **No Radix Sheet on mobile** — replaced with plain CSS bottom drawer (`transform: translateY`). Radix caused 500ms lag.
- **MenuToggle** is a `<label>` wrapping `<input type="checkbox">`. Never wrap in `<button>` — causes double-toggle.
- **Language toggle** — `lang` state is in `App.jsx`. `SimpleHeader` is controlled via `lang`/`onLangChange` props. All routes pass `lang={lang}`. All section components accept and forward `lang`.
- **R3F Canvas background** — use `<color attach="background">` inside Canvas, NOT `alpha:true` (broken in R3F v9).
- **ScrollToTop** component in `App.jsx` scrolls to top on every route change.

---

## Product page architecture

Two shared templates handle all product pages — never write a product page from scratch:

| Template | File | Used for |
|---|---|---|
| 3D configurator | `src/pages/sections/Product3DPage.jsx` | Products with a 3D GLB model (gota, akullore, mbajtese, kupa-supe, leter-tavoline) |
| Flat / photo | `src/pages/sections/ProductFlatPage.jsx` + `ProductHeroFlat.jsx` | Products with only photography (kuti-*, caj-*, mbajtese-kafe) |

`ProductHighlights.jsx` and `SizeGallery.jsx` are shared section components used inside both templates.

---

## Deployment workflow

1. `npm run build` — builds Vite app then runs `scripts/prerender.cjs` (postbuild)
2. `prerender.cjs` pre-renders all public routes to static HTML for AI crawlers
3. Confirm output: `✅ crawled N out of N` where N = **number of routes in App.jsx** (currently **24**) — if any route fails, fix before pushing
4. `git add`, `git commit`, `git push` — GitHub Actions deploys to GitHub Pages automatically
5. On CI: Chrome path is set via `PUPPETEER_EXECUTABLE_PATH=google-chrome-stable` in deploy.yml
6. Locally: Chrome path falls back to `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

> **When you add a new route:** increment the crawl count above and add the route to `public/sitemap.xml` and `public/llms.txt`.

---

## Adding a new product page — checklist

Run through this every time a new product page is added:

**Before writing any copy:**
- [ ] Ask Besnik for the correct Albanian product name

**Files to create / update:**
- [ ] `src/pages/ProductXxx.jsx` — use `Product3DPage` or `ProductFlatPage` template
- [ ] `src/App.jsx` — add route
- [ ] `src/pages/Products.jsx` — add card/link to the products grid
- [ ] **`CLAUDE.md`** — add route to the table below, increment crawl count

**Inside the new page:**
- [ ] `useEffect` setting `document.title` — bilingual (AL | EN)
- [ ] `useEffect` updating `meta[name="description"]` — bilingual, specific, includes city/country
- [ ] Page-level JSON-LD schema: at minimum `Product` type with name, description, brand

**SEO / AEO files:**
- [ ] `public/sitemap.xml` — add the new route
- [ ] `public/llms.txt` — add the product under the Products section

**After building:**
- [ ] `npm run build` — confirm react-snap crawls the new route
- [ ] Check the generated HTML file in `dist/` has real content (not just `<div id="root">`)

---

## Current pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/Home.jsx` | |
| `/products` | `src/pages/Products.jsx` | |
| `/products/gota` | `src/pages/ProductGota.jsx` | 3D configurator |
| `/products/mbajtese` | `src/pages/ProductMbajtese.jsx` | 3D configurator |
| `/products/akullore` | `src/pages/ProductAkullore.jsx` | 3D configurator |
| `/products/kupa-supe` | `src/pages/ProductKupaSupe.jsx` | 3D configurator, kraft body |
| `/products/leter-tavoline` | `src/pages/ProductLeterTavoline.jsx` | 3D configurator |
| `/products/kuti-hamburgeri` | `src/pages/ProductKutiHamburgeri.jsx` | flat page |
| `/products/kuti-sllajder` | `src/pages/ProductKutiSllajder.jsx` | flat page |
| `/products/kuti-fast-food` | `src/pages/ProductKutiFastFood.jsx` | flat page |
| `/products/kuti-6pika` | `src/pages/ProductKuti6Pika.jsx` | flat page |
| `/products/kuti-hapur` | `src/pages/ProductKutiHapur.jsx` | flat page |
| `/products/kuti-krepa` | `src/pages/ProductKutiKrepa.jsx` | flat page |
| `/products/kuti-sallata` | `src/pages/ProductKutiSallata.jsx` | flat page |
| `/products/kuti-makaronash` | `src/pages/ProductKutiMakaronash.jsx` | flat page |
| `/products/kuti-pomfrit` | `src/pages/ProductKutiPomfrit.jsx` | flat page |
| `/products/kuti-sanduic` | `src/pages/ProductKutiSanduic.jsx` | flat page |
| `/products/mbajtese-kafe` | `src/pages/ProductMbajtesekafe.jsx` | flat page |
| `/products/kuti-dhurate` | `src/pages/ProductKutiDhurate.jsx` | flat page |
| `/products/caj-heksagonal` | `src/pages/ProductCajHeksagonal.jsx` | flat page |
| `/products/caj-gable-top` | `src/pages/ProductCajGableTop.jsx` | flat page |
| `/machines` | `src/pages/Machines.jsx` | |
| `/about` | `src/pages/About.jsx` | |
| `/contact` | `src/pages/Contact.jsx` | |

**Unrouted page files** (files exist, not yet wired to a route — do not delete):
- `src/pages/ProductCajForestFruits.jsx`
- `src/pages/ProductCajGjelbrt.jsx`
- `src/pages/ProductCajManaSlimming.jsx`
- `src/pages/ProductCajPfantaSage.jsx`

---

## AEO / GEO — what's in place

- `public/llms.txt` — site description for AI assistants
- `public/robots.txt` — allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- `public/sitemap.xml` — all routes
- `scripts/prerender.cjs` pre-renders every route at build time
- Organization + LocalBusiness + WebSite JSON-LD in `index.html`
- Per-page `document.title` + `meta[name="description"]` on all pages
- Full strategy in `aeo-geo-strategy.md`
