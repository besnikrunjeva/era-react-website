# ERA React Website — Claude Context

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

**Short sentences.** Avoid passive voice. Use "ju" (you) to speak directly to the client.

---

## Key architecture decisions

- **No Radix Sheet on mobile** — replaced with plain CSS bottom drawer (`transform: translateY`). Radix caused 500ms lag.
- **MenuToggle** is a `<label>` wrapping `<input type="checkbox">`. Never wrap in `<button>` — causes double-toggle.
- **Language toggle** — `lang` prop is passed down from `App.jsx`. Pages accept `lang` as a prop and render AL/EN content accordingly.
- **R3F Canvas background** — use `<color attach="background">` inside Canvas, NOT `alpha:true` (broken in R3F v9).
- **ScrollToTop** component in `App.jsx` scrolls to top on every route change.

---

## Deployment workflow

1. `npm run build` — builds Vite app then runs `react-snap` (postbuild)
2. react-snap pre-renders all 6 routes to static HTML for AI crawlers
3. Confirm output: `✅ crawled 6 out of 6` — if any route fails, fix before pushing
4. `git add`, `git commit`, `git push` — GitHub Actions deploys to GitHub Pages automatically
5. On CI: Chrome path is set via `PUPPETEER_EXECUTABLE_PATH=google-chrome-stable` in deploy.yml
6. Locally: Chrome path falls back to `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`

---

## Adding a new product page — checklist

Run through this every time a new product page is added:

**Before writing any copy:**
- [ ] Ask Besnik for the correct Albanian product name

**Files to create / update:**
- [ ] `src/pages/ProductXxx.jsx` — new page component with `lang` prop
- [ ] `src/App.jsx` — add route
- [ ] `src/pages/Products.jsx` — add card/link to the products grid

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

| Route | File |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/products` | `src/pages/Products.jsx` |
| `/products/gota` | `src/pages/ProductGota.jsx` (3D configurator) |
| `/machines` | `src/pages/Machines.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/contact` | `src/pages/Contact.jsx` |

---

## AEO / GEO — what's in place

- `public/llms.txt` — site description for AI assistants
- `public/robots.txt` — allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- `public/sitemap.xml` — all routes
- react-snap pre-renders every route at build time
- Organization + LocalBusiness + WebSite JSON-LD in `index.html`
- Per-page `document.title` + `meta[name="description"]` on all pages
- Full strategy in `aeo-geo-strategy.md`
