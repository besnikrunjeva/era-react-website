# Product Flat Pages — Design Spec
**Date:** 2026-06-05
**Pilot:** Kuti Hamburgeri (`/products/kuti-hamburgeri`)
**System:** `ProductFlatPage` — shared component architecture for all non-3D product pages

---

## 1. Problem & Goal

ERA's Products page has several "Së shpejti" (coming soon) cards for non-cup products. These products have no dedicated pages, so a visitor who wants burger boxes, wrapping paper, or lids hits a dead end. This spec defines:

1. A **data-driven shared component system** (`ProductFlatPage`) that makes adding each new product page a config-only task.
2. The **first implementation** — Kuti Hamburgeri — as the pilot that proves the system.

Each new product thereafter = 1 data file + 1 page file with 2 lines of code.

---

## 2. Architecture — Approach B (confirmed)

### Data layer
Each product lives in its own config file:

```
src/data/products/
  kuti-hamburgeri.js     ← pilot (this spec)
  kuti-embelsira.js      ← future
  kapak-gota.js          ← future
  leter-mbeshtjellese.js ← future
```

### Config shape

```js
// src/data/products/kuti-hamburgeri.js
import imgKutiBurger from '@/assets/products/kuti-burger.webp'
import imgGota from '@/assets/products/gota.webp'
import imgAkullore from '@/assets/products/akullore.webp'
import imgMbajtese from '@/assets/products/mbajtese.webp'

export const PRODUCT = {
  slug: '/products/kuti-hamburgeri',

  name: {
    al: 'Kuti Hamburgeri',
    en: 'Burger Boxes',
  },

  tagline: {
    al: 'Karton food-grade me printim të plotë CMYK.',
    en: 'Food-grade cardboard with full CMYK print.',
  },

  img: imgKutiBurger,
  imgAlt: {
    al: 'Kuti hamburgeri me printim të personalizuar — ERA Print Pack Kosovë',
    en: 'Custom printed burger boxes — ERA Print Pack Kosovo',
  },

  // 3 badge pills shown in hero (below tagline, above CTAs)
  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'       },
    { al: 'Karton food-grade',    en: 'Food-grade board'  },
    { al: 'Personalizim i plotë', en: 'Full customization'},
  ],

  // 4 highlight tiles (icon + label + value)
  highlights: [
    { iconName: 'Printer',  label: { al: 'Printimi',   en: 'Print'       }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK'   } },
    { iconName: 'Package',  label: { al: 'Sasia min.', en: 'Min. qty'    }, value: { al: '500 copë',         en: '500 pcs'         } },
    { iconName: 'Clock',    label: { al: 'Prodhimi',   en: 'Production'  }, value: { al: '7–14 ditë',        en: '7–14 days'       } },
    { iconName: 'Leaf',     label: { al: 'Materiali',  en: 'Material'    }, value: { al: 'Food-grade',        en: 'Food-grade'      } },
  ],

  // Specs table rows (green: true makes the value ERA green)
  specs: [
    { key: 'Madhësia',       val: 'Standard · Large — 2 variante',   green: true  },
    { key: 'Materiali',      val: 'Karton 350g food-grade'                         },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'                      },
    { key: 'Sasia minimale', val: '500 copë',                          green: true  },
    { key: 'Prodhimi',       val: '7–14 ditë pune',                    green: true  },
  ],

  // Ordering steps
  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',        en: 'WhatsApp · Email · Phone'         } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',         en: 'Final price within 24 hours'      } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',          en: 'Proof before full print run'      } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë',   en: 'Directly to your address, Kosovo' } },
  ],

  // Related products (3 items)
  related: [
    { slug: '/products/gota',     img: imgGota,     al: 'Gota Letre',    en: 'Paper Cups',      sub: '3.5oz · 7oz · 12oz', available: true  },
    { slug: '/products/akullore', img: imgAkullore, al: 'Kupa Akullore', en: 'Ice Cream Cups',  sub: 'S · M',               available: true  },
    { slug: '/products/mbajtese', img: imgMbajtese, al: 'Mbajtëse',      en: 'Cutlery Holders', sub: 'Standarde',           available: true  },
  ],

  // Pre-filled WhatsApp message
  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Hamburgeri me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Burger Boxes. Can you give me a quote?',
  },

  // SEO
  seo: {
    al: {
      title: 'Kuti Hamburgeri me Printim | ERA Print Pack Kosovë',
      description: 'Kuti hamburgeri food-grade me printim CMYK të personalizuar. Sasia minimale 500 copë. Prodhim 7–14 ditë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title: 'Custom Printed Burger Boxes | ERA Print Pack Kosovo',
      description: 'Food-grade burger boxes with custom CMYK printing. Min. 500 pcs. Production 7–14 days. ERA Print Pack, Prizren, Kosovo.',
    },
  },
}
```

### Component layer

```
src/pages/sections/
  ProductFlatPage.jsx     ← NEW wrapper: assembles all sections
  ProductHeroFlat.jsx     ← NEW 50/50 split hero
  ProductHighlights.jsx   ← NEW 4-tile highlights bar
  Product3DPage.jsx       ← MODIFIED: exports Breadcrumb, SpecsSection,
                             RelatedSection as named exports (no breaking change)
```

### Page layer

```js
// src/pages/ProductKutiHamburgeri.jsx
import { useEffect } from 'react'
import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-hamburgeri'

export default function ProductKutiHamburgeri({ lang = 'al' }) {
  useEffect(() => {
    document.title = PRODUCT.seo[lang].title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', PRODUCT.seo[lang].description)
  }, [lang])

  return <ProductFlatPage lang={lang} product={PRODUCT} />
}
```

---

## 3. Component Specs

### `ProductHeroFlat`

**Layout:** 2-column grid on md+. Left: text. Right: image. Stacks vertically on mobile: **image top, text below** (matches e-commerce convention and how ERA's existing product cards behave).

**Left column content (top → bottom):**
1. Product name — `text-4xl font-black tracking-tight text-gray-900 md:text-5xl` (large, confident)
2. Tagline — `text-base text-gray-500 mt-2 max-w-sm`
3. Badge pills — `flex flex-wrap gap-2 mt-4` — each: `rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-3 py-1 text-[11px] font-bold text-[#4ca706]` (reuses existing badge pill system)
4. CTA row — `flex gap-3 mt-6`
   - Primary: `bg-[#4ca706] px-5 py-2.5 text-sm font-semibold text-white rounded-lg hover:bg-[#3d8f05]` — "Merr ofertë" → WhatsApp deeplink
   - Secondary: `border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50` — "Telefono"

**Right column:** `overflow-hidden rounded-2xl` container. Image: `object-cover w-full h-full`, `group-hover:scale-[1.02] transition-transform duration-700 ease-out`.

**Background:** `bg-white px-5 py-14 md:px-8 md:py-20`

**Motion:** Left column `initial={{ opacity:0, x:-20 }}` → `animate={{ opacity:1, x:0 }}`. Right column `initial={{ opacity:0, x:20 }}` → `animate={{ opacity:1, x:0 }}`. Duration 0.6s, `ease: [0.16, 1, 0.3, 1]`.

---

### `ProductHighlights`

**Layout:** 4 tiles in a horizontal row on md+. 2×2 grid on mobile.

**Each tile:** `flex flex-col gap-1 items-start px-6 py-5 border-r border-gray-100 last:border-r-0`

Content:
- Icon (Lucide, size 18, `text-[#4ca706]`)
- Label — `text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-2`
- Value — `text-sm font-bold text-gray-800`

**Container:** `bg-white border-y border-gray-100 px-5 md:px-8`
**Inner:** `mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4`

**Motion:** stagger `delay: i * 0.07`, `whileInView`, `once: true`.

---

### `ProductFlatPage` (wrapper)

```jsx
import { Breadcrumb, SpecsSection, RelatedSection } from '@/pages/sections/Product3DPage'
import { ProductHeroFlat } from './ProductHeroFlat'
import { ProductHighlights } from './ProductHighlights'
import { BottomCTA } from './BottomCTA'

export function ProductFlatPage({ lang = 'al', product }) {
  // SpecsSection and RelatedSection were built for the 3D pages and expect
  // pre-resolved strings (not bilingual objects). Resolve lang here so the
  // shared components need zero changes.
  const resolvedSteps = product.steps.map(s => ({
    n: s.n,
    title: s.title[lang],
    desc:  s.desc[lang],
  }))
  const resolvedRelated = product.related.map(r => ({
    slug:      r.slug,
    img:       r.img,
    al:        lang === 'al' ? r.al : r.en,
    sub:       r.sub,
    available: r.available,
  }))

  return (
    <>
      <Breadcrumb label={product.name[lang]} />
      <ProductHeroFlat lang={lang} product={product} />
      <ProductHighlights lang={lang} highlights={product.highlights} />
      <SpecsSection specs={product.specs} steps={resolvedSteps} />
      <RelatedSection related={resolvedRelated} />
      <BottomCTA lang={lang} />
    </>
  )
}
```

---

### `Product3DPage.jsx` — refactor (non-breaking)

Extract `Breadcrumb`, `SpecsSection`, `RelatedSection` as **named exports** from the same file. The `Product3DPage` export stays identical — all existing 3D pages continue to work with zero changes.

```js
// Add to Product3DPage.jsx — already-internal functions become named exports:
export { Breadcrumb, SpecsSection, RelatedSection }
```

No file moves. No breaking changes. The 3D pages import `Product3DPage` as before.

---

## 4. Routing & Navigation

**`src/App.jsx`** — add:
```jsx
import ProductKutiHamburgeri from '@/pages/ProductKutiHamburgeri'
// ...
<Route path="/products/kuti-hamburgeri" element={<ProductKutiHamburgeri />} />
```

**`src/pages/sections/ProductsGrid.jsx`** — the "Kuti Ushqimore" card currently has `cursor-not-allowed` and no link. Update it to link to `/products/kuti-hamburgeri` and enable click. The card label stays "Kuti Ushqimore" for now (broader category label); as more product pages are added, this card may be split into a category group.

**`public/sitemap.xml`** — add `<url><loc>https://era-print.com/era-react-website/products/kuti-hamburgeri</loc></url>`

**`public/llms.txt`** — add Kuti Hamburgeri under the Products section.

---

## 5. SEO & JSON-LD

Per the CLAUDE.md checklist, `ProductKutiHamburgeri.jsx` includes:
- `document.title` — bilingual, set in `useEffect`
- `meta[name="description"]` — bilingual, set in `useEffect`
- JSON-LD `Product` schema with name, description, brand, offers

---

## 6. States

| State | Behavior |
|---|---|
| Default | Full page, Framer Motion staged reveals on scroll |
| Mobile portrait | Hero: image 280px tall on top, text below; highlights 2×2; specs full-width |
| WhatsApp CTA tap | Opens WhatsApp with pre-filled message from `product.whatsappText[lang]` |
| Phone CTA tap | `tel:` deeplink |
| Related product hover | Green border + green ChevronRight (matches existing RelatedSection) |

---

## 7. Constraints

- No TypeScript — JSX only
- No new font imports — system-ui stack only
- Tailwind v3 — no arbitrary values not already in project
- Framer Motion — all reveals additive (content visible by default, animation enhances)
- `prefers-reduced-motion` — all animations wrapped or use `useReducedMotion()`
- react-snap must crawl the new route on build

---

## 8. Files Checklist

| File | Action |
|---|---|
| `src/data/products/kuti-hamburgeri.js` | CREATE |
| `src/pages/sections/ProductHeroFlat.jsx` | CREATE |
| `src/pages/sections/ProductHighlights.jsx` | CREATE |
| `src/pages/sections/ProductFlatPage.jsx` | CREATE |
| `src/pages/ProductKutiHamburgeri.jsx` | CREATE |
| `src/pages/sections/Product3DPage.jsx` | MODIFY — named exports for Breadcrumb, SpecsSection, RelatedSection |
| `src/App.jsx` | MODIFY — add route |
| `src/pages/sections/ProductsGrid.jsx` | MODIFY — enable Kuti Ushqimore card link |
| `public/sitemap.xml` | MODIFY — add route |
| `public/llms.txt` | MODIFY — add product |

---

## 9. Adding Future Products (post-pilot)

Once the system is in place, each new product = **3 steps**:
1. Create `src/data/products/<slug>.js` — copy shape from `kuti-hamburgeri.js`, fill in data
2. Create `src/pages/Product<Name>.jsx` — 2 lines (import config + return `<ProductFlatPage>`)
3. Add route in `App.jsx` + update sitemap + llms.txt

No new components needed. No changes to `ProductFlatPage`, `ProductHeroFlat`, or `ProductHighlights`.
