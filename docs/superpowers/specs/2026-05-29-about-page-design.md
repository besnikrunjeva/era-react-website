# About Page Design Spec

**Date:** 2026-05-29
**Project:** era-react — Shtypshkronja ERA website
**Page:** `/about` (Rreth Nesh)
**Status:** Approved by Besnik

---

## Overview

The About page's primary job is **trust and credibility** for B2B buyers (cafes, restaurants, food businesses) evaluating Shtypshkronja ERA as a packaging supplier. It is informational/navigational — not a direct conversion page, but every section should lower the barrier to requesting a quote.

**Target query:** `prodhues ambalazhesh letre Kosovë`
**Page role:** Informational / brand trust

---

## Files to Create / Modify

| Action | File |
|---|---|
| Create | `src/pages/About.jsx` |
| Create | `src/pages/sections/about/StorySection.jsx` |
| Create | `src/pages/sections/about/PillarsSection.jsx` |
| Create | `src/pages/sections/about/SectorsSection.jsx` |
| Create | `src/pages/sections/about/RegionalSection.jsx` |
| Create | `src/pages/sections/about/TestimonialsSection.jsx` |
| Create | `src/pages/sections/about/MachinesCallout.jsx` |
| Create | `src/pages/sections/about/DarkCta.jsx` |
| Modify | `src/App.jsx` — add `/about` route |

**Reused components (no changes):** `StatsPanel`, `LogoCloud`, `SimpleHeader`, `StickyFooter`

---

## SEO

### Title tag (via react-helmet-async — to be installed)
```
Rreth Shtypshkronja ERA — Prodhues Ambalazhesh Kosovë
```
52 chars. Query-first, brand at end.

### Meta description (155 chars)
```
Shtypshkronja ERA — prodhues i ambalazheve letre me mbi 15 vite eksperiencë. 397 klientë aktiv, 13 makina prodhimi. Shërbejmë Kosovën dhe Ballkanin.
```

### Schema (JSON-LD, injected in About.jsx head)
`AboutPage` type, linked to the `Organization` node already defined in `index.html`:
```json
{
  "@type": "AboutPage",
  "@id": "https://era-printpack.com/about",
  "url": "https://era-printpack.com/about",
  "name": "Rreth Shtypshkronja ERA",
  "description": "...",
  "publisher": { "@id": "https://era-printpack.com/#organization" }
}
```

### URL slug
`/about` — consistent with existing nav links in `simple-header.jsx`.

---

## Page Structure — 10 Sections

### 1. Hero
- **Badge:** `"Rreth Nesh"` pill (same style as homepage)
- **H1:** `"Prodhues i besueshëm i ambalazheve letre në Kosovë"` (AL) / `"Kosovo's trusted paper packaging manufacturer"` (EN)
- **Subtext:** `"Mbi 15 vite prodhim profesional — në Kosovë dhe rajon."` (AL)
- White background, no InfiniteGrid (keeps the hero calm vs. homepage energy)
- Framer Motion fade-in same as homepage hero

---

### 2. Historia Jonë (Story Section)
- **H2:** `"Historia e Shtypshkronja ERA"` — SEO-descriptive
- Styled sub-headline (not an H tag): *"Filloi si familje. Mbeti si standard."*
- **Two-column layout:** text left, placeholder image right
- **Image placeholder:** `alt="Fabrika e Shtypshkronja ERA — prodhim ambalazhesh letre Kosovë"`, filename `about-factory.webp` when ready
- **Body text (3 paragraphs, from old page):**
  1. "ERA u themelua rreth vitit 2008 në Kosovë, me vizion të qartë: t'u ofrojë bizneseve vendase ambalazhe letre profesionale — të prodhuara këtu, në Kosovë."
  2. "Nga një operacion i vogël, kemi rritur kapacitetin tonë gradualisht. Sot, me 13 makina prodhimi, 276 variante produktesh dhe mbi 397 klientë aktiv, jemi ndër prodhuesit kryesorë të ambalazheve letre në rajon."
  3. "Çdo paketim që del nga fabrika jonë bart emrin e klientit dhe standardin tonë. Kjo është arsyeja pse bizneset që punojnë me ne, vazhdojnë të punojnë me ne."
- **Internal link** in paragraph 2: `"shiko produktet tona"` → `/products`

---

### 3. Stats Bar (green background)
- **Background:** `#4ca706` — different from homepage's white StatsPanel, creates a visual break
- **Implementation:** Render stats inline as a simple 4-column `<div>` grid inside a green bar. Do NOT reuse `StatsPanel` — it has hardcoded white/gray colors not worth overriding for a one-off treatment.
- Same 4 stats: 15+ vite, 397+ klientë, 3.9M+ njësi, 13 makina
- Reuse the `CountUp` animation from `stat-card.jsx` (it's already exported separately)

---

### 4. Çfarë Bëjmë (Pillars Section)
- **H2:** `"Çfarë Prodhojmë dhe Si Punojmë"` — descriptive for SEO
- Styled sub-headline: `"Tre gjëra që i bëjmë mirë"`
- 3-column card grid, each card has: icon (Lucide), H3, 2-line description
- **Cards:**
  1. **Prodhim Profesional** — Print icon — "Printim offset i plotë në letër ushqimore. 276 variante produktesh, 13 makina të specializuara."
  2. **Personalizim i Plotë** — Edit icon — "Çdo paketim sipas dizajnit, ngjyrës dhe madhësisë tuaj. Nga logo deri te forma."
  3. **Dorëzim në Rajon** — Truck icon — "Shërbejmë Kosovën dhe Ballkanin. Dorëzim direkt nga fabrika, 7–14 ditë."
- Background: `#f9fafb` (light gray)

---

### 5. Klientët Tanë (Sectors Section)
- **H2:** `"Industritë që Shërbejmë"`
- **Subtext:** `"Nga fast food dhe kafene, deri te farmaci dhe paketime dhuratash."`
- 5-card grid (3 top row + 2 bottom row, centered):
  1. Fast Food & Restorante — Send icon
  2. Kafene & Hotele — Coffee icon
  3. Pastiçeri & Ëmbëltore — Briefcase icon
  4. Farmaci & Industrial — Plus icon
  5. Retail & Dhurata — Gift icon
- Each card: icon, H3, 1-line description
- **Internal link** on section: `"Shiko produktet për industrinë tënde"` → `/products`

---

### 6. Prania Rajonale (Regional Section)
- **H2:** `"Bazë në Kosovë, Shërbim në Ballkan"`
- **Two-column:** text left, map placeholder right
- **Image placeholder:** `alt="Harta rajonale — Shtypshkronja ERA shërben Kosovën dhe Ballkanin"`, filename `about-map.webp`
- **Body:**
  - "Baza jonë është në Kosovë — por klientët tanë janë në të gjithë rajonin."
  - "Dorëzim direkt nga fabrika — pa ndërmjetës, me kontroll të plotë të cilësisë dhe afateve."
- **Country tags:** 🇽🇰 Kosovë · 🇷🇸 Serbi · 🇲🇰 Maqedoni e Veriut · 🇦🇱 Shqipëri
- Background: `#f9fafb`

---

### 7. Client Logos
- Reuse `LogoCloud` component exactly as on homepage
- Same heading: `"Besuar nga bizneset. Zgjedhur nga liderët."` with green/gray split styling
- Same separator lines

---

### 8. Testimonials (Placeholder)
- **H2:** `"Çfarë Thonë Klientët Tanë"`
- 2-card grid, dashed border style (signals "coming soon" without looking broken)
- Each card: italic quote text, client name, business name + city
- Placeholder copy uses Albanian: `"Testimonial real shtohet këtu..."`
- Cards are fully styled — dropping in real content requires only data changes
- Background: `#f9fafb`

---

### 9. Machines Callout
- Single card, full-width inside the section container
- **H3:** `"13 makina prodhimi në Prishtinë"`
- Subtext: `"Shiko kapacitetin e plotë të prodhimit tonë"`
- CTA button → `/machines`: `"Shiko Makinat →"`
- Background: white, border: `#e5e7eb`

---

### 10. Dark CTA
- Background: `#0f1010`, green glow (same as footer)
- Styled heading (not H2 for SEO): `"Bashkohuni me 397+ bizneset që na besojnë"`
- Subtext: `"Merr ofertën tënde falas — përgjigje brenda 24 orësh."`
- Primary CTA button → `https://wa.me/38344113533`: `"Merr ofertën tënde falas"`
- Supporting line: `"Pa detyrime · WhatsApp · +383 44 113 533"`
- **Internal link:** `"Kontaktoni përmes formës"` → `/contact`

---

## Component Props Pattern

All sections follow the existing `lang` prop pattern from `Home.jsx`:

```jsx
<StorySection lang={lang} />
<PillarsSection lang={lang} />
// etc.
```

`About.jsx` defaults `lang="al"` exactly like `Home.jsx` does — `App.jsx` currently passes no `lang` prop to any page. Global lang state wiring is out of scope for this page.

---

## Animation

Use the same Framer Motion pattern as `FeaturedProducts.jsx`:
```js
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
```
Apply to each section container. No section needs unique animation.

---

## Internal Links Summary

| From section | Link text | Target |
|---|---|---|
| Historia Jonë (§2) | "shiko produktet tona" | `/products` |
| Klientët Tanë (§5) | "Shiko produktet për industrinë tënde" | `/products` |
| Machines Callout (§9) | "Shiko Makinat" | `/machines` |
| Dark CTA (§10) | "Kontaktoni përmes formës" | `/contact` |

---

## Image Placeholder Spec

| Placeholder | Alt text | Future filename |
|---|---|---|
| Factory/team photo | `Fabrika e Shtypshkronja ERA — prodhim ambalazhesh letre Kosovë` | `about-factory.webp` |
| Regional map | `Harta rajonale — Shtypshkronja ERA shërben Kosovën dhe Ballkanin` | `about-map.webp` |
| Sector icons | Decorative — `alt=""` | n/a |

---

## Out of Scope

- **Certifications section** — all placeholders in old page too; add when real certs are available
- **react-helmet-async** installation — flagged separately; title/meta injected once it's installed
- **3D product configurator** — separate feature
