# Shtypshkronja ERA — Website

Marketing website for **NPT Shtypshkronja ERA**, a paper packaging manufacturer based in Pristina, Kosovo. Built with React + Vite, deployed to GitHub Pages.

Live site: `https://besnikdesigns.github.io/era-react-website/`

---

## Tech stack

- **React 18 + Vite** — JSX only, no TypeScript
- **React Router v7** — client-side routing with `basename="/era-react-website"`
- **Tailwind CSS v3** — utility-first styling
- **Framer Motion** — animations
- **R3F v9 + @react-three/drei v10** — 3D product configurators
- **EmailJS** — contact form (no backend required)
- **react-snap / prerender.cjs** — static HTML pre-rendering at build time

---

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/era-react-website/`

---

## Build & deploy

```bash
npm run build
```

This runs Vite then executes `scripts/prerender.cjs` (postbuild), which pre-renders all 23 routes to static HTML. Confirm the output shows `✅ crawled 23 out of 23` before pushing.

```bash
git add .
git commit -m "your message"
git push
```

GitHub Actions (`.github/workflows/deploy.yml`) deploys automatically on push to `main`.

> **CI note:** The deploy workflow sets `PUPPETEER_EXECUTABLE_PATH=google-chrome-stable`. Locally, prerender falls back to `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.

---

## Project structure

```
src/
├── pages/              # One file per route
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductGota.jsx       # 3D configurator pages
│   ├── ProductKutiHamburgeri.jsx  # Flat / photo pages
│   └── ...
│   └── sections/       # Reusable page sections
│       ├── Product3DPage.jsx     # Shared 3D product template
│       ├── ProductFlatPage.jsx   # Shared flat product template
│       ├── FeaturedProducts.jsx
│       ├── ProcessSteps.jsx
│       └── ...
├── components/ui/      # Low-level UI components
│   ├── simple-header.jsx
│   ├── infinite-grid.jsx
│   ├── stat-card.jsx
│   └── ...
├── assets/             # Images, SVGs, client logos
public/
├── models/             # GLB 3D models
├── textures/           # Product textures
├── sitemap.xml
├── llms.txt            # AI crawler context
└── robots.txt
```

---

## Languages

The site is bilingual: Albanian (primary) and English. Language state lives in `App.jsx` and flows down to every page and section as a `lang` prop. Every visible string must have both `al` and `en` variants — see `CLAUDE.md` for the full bilingual rule.

---

## For AI assistants / Claude Code

See `CLAUDE.md` for full project context: brand rules, Albanian copy guidelines, architecture decisions, and the complete route list.
