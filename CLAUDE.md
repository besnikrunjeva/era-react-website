# ERA React Website — Claude Context

## What this project is

React website for **NPT Shtypshkronja ERA** — a Kosovo-based paper packaging manufacturer.
Owner/designer: **Besnik** (besnikdesigns@gmail.com).

Full business context (products, clients, pricing, revenue, brand): see `ERA_context.md`.

---

## Tech stack

- **Vite + React + JSX** — no TypeScript
- **React Router v6** — multi-page routing
- **Tailwind CSS v3** — utility-first styling
- **No component library** — build from scratch

---

## Brand

- **Primary color:** `#4ca706` (ERA green) — configured in Tailwind as `era-green`
- **Background:** `#0f1010` (near-black) — dark premium aesthetic
- **Logo:** `era-logo.svg` (to be added to `src/assets/`)
- **Language:** Albanian (shqip) primary, English secondary
- **Phone:** +383 44 113 533
- **WhatsApp:** wa.me/38344113533

---

## Style direction

Dark + premium. Deep charcoal background, white text, ERA green used sparingly as an accent.
Goal: signal "regional manufacturing partner" not "local printer."

---

## Project structure (intended)

```
src/
├── assets/          ← images, logo, SVGs
├── components/      ← shared UI (Navbar, Footer, etc.)
├── pages/           ← one file per route
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx          ← router setup
└── index.css        ← Tailwind directives only
```

---

## Key rules

- Write JSX only — no TypeScript
- Use Tailwind classes — no separate CSS files unless necessary
- Keep components small and focused
- Albanian text is primary — add English as secondary where needed
