# Product Flat Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the `ProductFlatPage` shared component system and ship the Kuti Hamburgeri page as the pilot — enabling every future non-3D product page to be added with 1 data file + 1 page file.

**Architecture:** Approach B — data-driven. Each product has a config object in `src/data/products/<slug>.js`. A new `ProductFlatPage` wrapper composes shared section components (hero, highlights, specs, related, CTA). `Product3DPage.jsx` gets named exports for its inner components so they can be reused without duplication.

**Tech Stack:** React + JSX, Tailwind CSS v3, Framer Motion, Lucide React, React Router v6, Vite + react-snap

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/pages/sections/Product3DPage.jsx` | Modify | Add named exports: `Breadcrumb`, `SpecsSection`, `RelatedSection` |
| `src/data/products/kuti-hamburgeri.js` | Create | All product data: name, tagline, badges, highlights, specs, steps, related, SEO, WhatsApp text |
| `src/pages/sections/ProductHeroFlat.jsx` | Create | 50/50 split hero: image right, text+CTAs left; stacks on mobile |
| `src/pages/sections/ProductHighlights.jsx` | Create | 4-tile horizontal bar: icon + label + value per tile |
| `src/pages/sections/ProductFlatPage.jsx` | Create | Wrapper that assembles all sections; resolves lang for shared components |
| `src/pages/ProductKutiHamburgeri.jsx` | Create | Page: SEO effects + JSON-LD + renders ProductFlatPage |
| `src/App.jsx` | Modify | Add route `/products/kuti-hamburgeri` |
| `src/pages/sections/ProductsGrid.jsx` | Modify | Enable Kuti Ushqimore card as clickable link to new route |
| `public/sitemap.xml` | Modify | Add new route |
| `public/llms.txt` | Modify | Add Kuti Hamburgeri under Products + Key pages |

---

## Task 1: Export shared components from Product3DPage

`Breadcrumb`, `SpecsSection`, and `RelatedSection` are currently private functions inside `Product3DPage.jsx`. Exporting them as named exports lets `ProductFlatPage` reuse them without any duplication. The existing 3D pages are unaffected — they only import `Product3DPage` (the default export).

**Files:**
- Modify: `src/pages/sections/Product3DPage.jsx`

- [ ] **Step 1: Open Product3DPage.jsx and add named exports at the bottom**

The file currently ends with:
```jsx
export function Product3DPage({ lang = 'al', crumbLabel, specs, steps, related, children }) {
  return (
    <>
      <Breadcrumb label={crumbLabel} />
      {children}
      <SpecsSection specs={specs} steps={steps} />
      <RelatedSection related={related} />
      <BottomCTA lang={lang} />
    </>
  )
}
```

Add these two lines immediately after that closing brace (end of file):

```jsx
export { Breadcrumb, SpecsSection, RelatedSection }
```

The full tail of the file becomes:
```jsx
export function Product3DPage({ lang = 'al', crumbLabel, specs, steps, related, children }) {
  return (
    <>
      <Breadcrumb label={crumbLabel} />
      {children}
      <SpecsSection specs={specs} steps={steps} />
      <RelatedSection related={related} />
      <BottomCTA lang={lang} />
    </>
  )
}

export { Breadcrumb, SpecsSection, RelatedSection }
```

- [ ] **Step 2: Verify existing 3D pages still work**

```bash
cd /Users/macbookpro/era-react && npm run dev
```

Open http://localhost:5173/era-react-website/products/gota — confirm the gota 3D configurator page renders normally. Check http://localhost:5173/era-react-website/products/akullore too. Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/sections/Product3DPage.jsx
git commit -m "refactor: export Breadcrumb, SpecsSection, RelatedSection from Product3DPage"
```

---

## Task 2: Create product data config for Kuti Hamburgeri

**Files:**
- Create: `src/data/products/kuti-hamburgeri.js` (also creates the `src/data/products/` directory)

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p /Users/macbookpro/era-react/src/data/products
```

- [ ] **Step 2: Write the config file**

Create `src/data/products/kuti-hamburgeri.js` with the following content:

```js
import imgKutiBurger from '@/assets/products/kuti-burger.webp'
import imgGota       from '@/assets/products/gota.webp'
import imgAkullore   from '@/assets/products/akullore.webp'
import imgMbajtese   from '@/assets/products/mbajtese.webp'

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

  badges: [
    { al: 'Printim CMYK',         en: 'CMYK Print'        },
    { al: 'Karton food-grade',    en: 'Food-grade board'   },
    { al: 'Personalizim i plotë', en: 'Full customization' },
  ],

  highlights: [
    { iconName: 'Printer', label: { al: 'Printimi',   en: 'Print'      }, value: { al: '4-ngjyrësh CMYK', en: '4-color CMYK' } },
    { iconName: 'Package', label: { al: 'Sasia min.', en: 'Min. qty'   }, value: { al: '500 copë',         en: '500 pcs'       } },
    { iconName: 'Clock',   label: { al: 'Prodhimi',   en: 'Production' }, value: { al: '7–14 ditë',        en: '7–14 days'     } },
    { iconName: 'Leaf',    label: { al: 'Materiali',  en: 'Material'   }, value: { al: 'Food-grade',       en: 'Food-grade'    } },
  ],

  specs: [
    { key: 'Madhësia',       val: 'Standard · Large — 2 variante', green: true },
    { key: 'Materiali',      val: 'Karton 350g food-grade'                      },
    { key: 'Printimi',       val: 'CMYK 4-ngjyrësh · Offset'                   },
    { key: 'Sasia minimale', val: '500 copë',                       green: true },
    { key: 'Prodhimi',       val: '7–14 ditë pune',                 green: true },
  ],

  steps: [
    { n: '01', title: { al: 'Dërgo dizajnin',    en: 'Send your design'   }, desc: { al: 'WhatsApp · Email · Telefon',      en: 'WhatsApp · Email · Phone'       } },
    { n: '02', title: { al: 'Merr ofertën',      en: 'Get a quote'        }, desc: { al: 'Çmim final brenda 24 orësh',       en: 'Final price within 24 hours'    } },
    { n: '03', title: { al: 'Konfirmo & paguaj', en: 'Confirm & pay'      }, desc: { al: 'Provë para printimit masiv',        en: 'Proof before full print run'    } },
    { n: '04', title: { al: 'Dorëzim 7–14 ditë', en: 'Delivery 7–14 days' }, desc: { al: 'Direkt në adresën tënde, Kosovë', en: 'Directly to your address, Kosovo' } },
  ],

  related: [
    { slug: '/products/gota',     img: imgGota,     al: 'Gota Letre',    en: 'Paper Cups',      sub: '3.5oz · 7oz · 12oz', available: true },
    { slug: '/products/akullore', img: imgAkullore, al: 'Kupa Akullore', en: 'Ice Cream Cups',  sub: 'S · M',               available: true },
    { slug: '/products/mbajtese', img: imgMbajtese, al: 'Mbajtëse',      en: 'Cutlery Holders', sub: 'Standarde',            available: true },
  ],

  whatsappText: {
    al: 'Pershendetje ERA, jam i interesuar per Kuti Hamburgeri me printim. Mund te me jepni nje oferte?',
    en: 'Hello ERA, I am interested in custom printed Burger Boxes. Can you give me a quote?',
  },

  seo: {
    al: {
      title:       'Kuti Hamburgeri me Printim | ERA Print Pack Kosovë',
      description: 'Kuti hamburgeri food-grade me printim CMYK të personalizuar. Sasia minimale 500 copë. Prodhim 7–14 ditë. ERA Print Pack, Prizren, Kosovë.',
    },
    en: {
      title:       'Custom Printed Burger Boxes | ERA Print Pack Kosovo',
      description: 'Food-grade burger boxes with custom CMYK printing. Min. 500 pcs. Production 7–14 days. ERA Print Pack, Prizren, Kosovo.',
    },
  },
}
```

- [ ] **Step 3: Commit**

```bash
git add src/data/products/kuti-hamburgeri.js
git commit -m "feat(data): add Kuti Hamburgeri product config"
```

---

## Task 3: Create ProductHeroFlat component

50/50 split hero: left side has product name, tagline, badge pills, and CTA buttons. Right side has the product photo. On mobile the image is on top, text below.

**Files:**
- Create: `src/pages/sections/ProductHeroFlat.jsx`

- [ ] **Step 1: Create the file**

Create `src/pages/sections/ProductHeroFlat.jsx`:

```jsx
import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1]

export function ProductHeroFlat({ lang = 'al', product }) {
  const waHref =
    'https://wa.me/38344113533?text=' +
    encodeURIComponent(product.whatsappText[lang])

  return (
    <section className="bg-white px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

        {/* Image — top on mobile, right on desktop (order-first on mobile via CSS) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="order-first overflow-hidden rounded-2xl md:order-last"
        >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
            <img
              src={product.img}
              alt={product.imgAlt[lang]}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Text — below image on mobile, left on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col"
        >
          <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            {product.name[lang]}
          </h1>

          <p className="mt-3 max-w-sm text-base text-gray-500">
            {product.tagline[lang]}
          </p>

          {/* Badge pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {product.badges.map((badge, i) => (
              <span
                key={i}
                className="rounded-full border border-[#4ca706]/30 bg-[#4ca706]/10 px-3 py-1 text-[11px] font-bold text-[#4ca706]"
              >
                {badge[lang]}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4ca706] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3d8f05]"
            >
              <MessageCircle className="size-4" />
              {lang === 'al' ? 'Merr ofertë' : 'Get a quote'}
            </a>
            <a
              href="tel:+38344113533"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Phone className="size-4" />
              {lang === 'al' ? 'Telefono' : 'Call us'}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/sections/ProductHeroFlat.jsx
git commit -m "feat(ui): add ProductHeroFlat — 50/50 split hero for flat product pages"
```

---

## Task 4: Create ProductHighlights component

4-tile horizontal bar. Each tile shows a Lucide icon, a small label, and a bold value. 2×2 on mobile, 4×1 on desktop. The `iconName` string in the config is resolved to a Lucide component via a lookup map.

**Files:**
- Create: `src/pages/sections/ProductHighlights.jsx`

- [ ] **Step 1: Create the file**

Create `src/pages/sections/ProductHighlights.jsx`:

```jsx
import { motion } from 'framer-motion'
import { Printer, Package, Clock, Leaf } from 'lucide-react'

const ICON_MAP = { Printer, Package, Clock, Leaf }

const EASE = [0.16, 1, 0.3, 1]

export function ProductHighlights({ lang = 'al', highlights }) {
  return (
    <section className="border-y border-gray-100 bg-white px-5 md:px-8">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4">
        {highlights.map((item, i) => {
          const Icon = ICON_MAP[item.iconName]
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
              className={[
                'flex flex-col gap-1 px-6 py-5',
                i < highlights.length - 1
                  ? 'border-b border-gray-100 md:border-b-0 md:border-r'
                  : '',
                i % 2 === 0 && i < highlights.length - 1
                  ? 'border-r border-gray-100 md:border-r-0'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {Icon && <Icon size={18} className="text-[#4ca706]" />}
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                {item.label[lang]}
              </p>
              <p className="text-sm font-bold text-gray-800">{item.value[lang]}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/sections/ProductHighlights.jsx
git commit -m "feat(ui): add ProductHighlights — 4-tile spec bar for flat product pages"
```

---

## Task 5: Create ProductFlatPage wrapper

Assembles all sections in order. Resolves bilingual `steps` and `related` arrays into plain strings before passing them to `SpecsSection` and `RelatedSection` (which expect pre-resolved strings, matching the 3D page contract).

**Files:**
- Create: `src/pages/sections/ProductFlatPage.jsx`

- [ ] **Step 1: Create the file**

Create `src/pages/sections/ProductFlatPage.jsx`:

```jsx
import { Breadcrumb, SpecsSection, RelatedSection } from '@/pages/sections/Product3DPage'
import { ProductHeroFlat } from '@/pages/sections/ProductHeroFlat'
import { ProductHighlights } from '@/pages/sections/ProductHighlights'
import { BottomCTA } from '@/pages/sections/BottomCTA'

export function ProductFlatPage({ lang = 'al', product }) {
  const resolvedSteps = product.steps.map(s => ({
    n:     s.n,
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

- [ ] **Step 2: Commit**

```bash
git add src/pages/sections/ProductFlatPage.jsx
git commit -m "feat(ui): add ProductFlatPage wrapper — shared assembly for non-3D product pages"
```

---

## Task 6: Create ProductKutiHamburgeri page

The page component: sets SEO metadata + JSON-LD on mount, then renders `ProductFlatPage` with the product config.

**Files:**
- Create: `src/pages/ProductKutiHamburgeri.jsx`

- [ ] **Step 1: Create the file**

Create `src/pages/ProductKutiHamburgeri.jsx`:

```jsx
import { useEffect } from 'react'
import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/kuti-hamburgeri'

export default function ProductKutiHamburgeri({ lang = 'al' }) {
  useEffect(() => {
    // SEO
    document.title = PRODUCT.seo[lang].title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', PRODUCT.seo[lang].description)

    // JSON-LD Product schema
    const existingScript = document.getElementById('jsonld-product')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.id = 'jsonld-product'
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: PRODUCT.name[lang],
      description: PRODUCT.seo[lang].description,
      image: 'https://era-printpack.com/era-react-website/assets/kuti-burger.webp',
      brand: {
        '@type': 'Brand',
        name: 'ERA Print Pack',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'NPT Shtypshkronja ERA',
        },
      },
    })
    document.head.appendChild(script)

    return () => {
      const s = document.getElementById('jsonld-product')
      if (s) s.remove()
    }
  }, [lang])

  return <ProductFlatPage lang={lang} product={PRODUCT} />
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/ProductKutiHamburgeri.jsx
git commit -m "feat(page): add ProductKutiHamburgeri with SEO and JSON-LD"
```

---

## Task 7: Wire routing and ProductsGrid link

Add the route in `App.jsx` and enable the Kuti Ushqimore card in `ProductsGrid.jsx` to link to the new page.

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/pages/sections/ProductsGrid.jsx`

- [ ] **Step 1: Add import and route in App.jsx**

In `src/App.jsx`, add the import after the existing product page imports:

```jsx
import ProductKutiHamburgeri from '@/pages/ProductKutiHamburgeri'
```

Then inside `<Routes>`, add after the existing product routes:

```jsx
<Route path="/products/kuti-hamburgeri" element={<ProductKutiHamburgeri />} />
```

The Routes block becomes:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/gota" element={<ProductGota />} />
  <Route path="/products/mbajtese" element={<ProductMbajtese />} />
  <Route path="/products/akullore" element={<ProductAkullore />} />
  <Route path="/products/kupa-supe" element={<ProductKupaSupe />} />
  <Route path="/products/leter-tavoline" element={<ProductLeterTavoline />} />
  <Route path="/products/kuti-hamburgeri" element={<ProductKutiHamburgeri />} />
  <Route path="/machines" element={<Machines />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/preview-test" element={<PreviewTest />} />
</Routes>
```

- [ ] **Step 2: Enable the Kuti Ushqimore card in ProductsGrid.jsx**

In `src/pages/sections/ProductsGrid.jsx`, the `ProductCard` component currently renders a disabled `<span>` when `available` is falsy. The `kuti-ushqimore` entry has `slug: '/products/kuti-ushqimore'`.

Update the slug in the GROUPS data to point to the new route:

```js
{
  id: 'kuti-ushqimore',
  slug: '/products/kuti-hamburgeri',   // ← was '/products/kuti-ushqimore'
  img: imgKutiBurger,
  al: 'Kuti Ushqimore',
  en: 'Food Boxes',
  desc: { al: 'Burger · Fritas · Sallata', en: 'Burger · Fries · Salad' },
},
```

Then set `available: true` on that entry by adding the property — it's currently missing (falsy by default). Add `available: true` to the object:

```js
{
  id: 'kuti-ushqimore',
  slug: '/products/kuti-hamburgeri',
  img: imgKutiBurger,
  al: 'Kuti Ushqimore',
  en: 'Food Boxes',
  desc: { al: 'Burger · Fritas · Sallata', en: 'Burger · Fries · Salad' },
  available: true,                     // ← add this
},
```

The `ProductCard` component uses `available` to decide between a `<Link>` and a disabled `<span>`. With `available: true` and the correct slug, the card becomes a live link. Also remove the "Së shpejti" badge overlay from the image `<div>` for this card — but since `ProductCard` renders the badge for all cards, the badge will disappear automatically once `available` is `true` only if the badge render is conditioned on `!available`. Check the component: the badge `<span className="absolute right-3 top-3 ...">Së shpejti</span>` is rendered unconditionally inside the `<div className="relative h-52 overflow-hidden">`. Add a condition:

```jsx
{!product.available && (
  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">
    {lang === 'al' ? 'Së shpejti' : 'Coming soon'}
  </span>
)}
```

- [ ] **Step 3: Verify in dev server**

```bash
npm run dev
```

- Navigate to http://localhost:5173/era-react-website/products — confirm "Kuti Ushqimore" card is now clickable (no cursor-not-allowed, no "Së shpejti" badge).
- Click it — confirm it navigates to `/products/kuti-hamburgeri`.
- Confirm the page renders: breadcrumb, hero (50/50 split), highlights bar, specs, related, BottomCTA.
- Resize to mobile width (375px) — confirm hero stacks (image top, text bottom), highlights show as 2×2.
- Click "Merr ofertë" — confirm WhatsApp opens with pre-filled text.
- Click "Telefono" — confirm `tel:` link activates.
- Stop dev server.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/pages/sections/ProductsGrid.jsx
git commit -m "feat(routing): wire /products/kuti-hamburgeri route and enable ProductsGrid link"
```

---

## Task 8: Update sitemap.xml and llms.txt

**Files:**
- Modify: `public/sitemap.xml`
- Modify: `public/llms.txt`

- [ ] **Step 1: Add route to sitemap.xml**

In `public/sitemap.xml`, add a new `<url>` entry after the `leter-tavoline` entry:

```xml
  <url>
    <loc>https://era-printpack.com/products/kuti-hamburgeri</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
```

- [ ] **Step 2: Update llms.txt**

In `public/llms.txt`, under `## Key pages`, add after the `leter-tavoline` line:

```
- /products/kuti-hamburgeri — Burger boxes (Kuti hamburgeri) food-grade cardboard with custom CMYK print, min 500 pcs, 7–14 day production
```

Under `## Products`, the food boxes entry already mentions burger boxes generically. Update the line:

```
- Food boxes (Kuti ushqimore): burger boxes (/products/kuti-hamburgeri), fries boxes, salad boxes, cake boxes, Dubai gold foil gift boxes
```

- [ ] **Step 3: Commit**

```bash
git add public/sitemap.xml public/llms.txt
git commit -m "seo: add /products/kuti-hamburgeri to sitemap and llms.txt"
```

---

## Task 9: Build verification

Confirm react-snap crawls the new route and generates real HTML.

**Files:** none — read-only verification

- [ ] **Step 1: Run the build**

```bash
npm run build
```

Expected output includes:
```
✅ crawled 7 out of 7
```
(was 6 routes before this feature; now 7 with `/products/kuti-hamburgeri`)

- [ ] **Step 2: Verify the generated HTML has real content**

```bash
grep -c "Kuti Hamburgeri" dist/products/kuti-hamburgeri/index.html
```

Expected: a number greater than 0 (react-snap pre-rendered actual content, not just `<div id="root">`).

- [ ] **Step 3: Commit build artifacts if needed and push**

```bash
git add -A
git commit -m "build: production build with Kuti Hamburgeri page"
git push
```

---

## Self-Review Notes

**Spec coverage check:**

| Spec section | Covered by task |
|---|---|
| Architecture Approach B + data config shape | Task 2 |
| Named exports from Product3DPage | Task 1 |
| ProductHeroFlat — 50/50, mobile stack, motion | Task 3 |
| ProductHighlights — 4 tiles, icon map, borders | Task 4 |
| ProductFlatPage — lang resolution for SpecsSection/RelatedSection | Task 5 |
| ProductKutiHamburgeri — SEO useEffect + JSON-LD | Task 6 |
| App.jsx route | Task 7 |
| ProductsGrid enable card + remove badge | Task 7 |
| sitemap.xml | Task 8 |
| llms.txt | Task 8 |
| react-snap crawl verification | Task 9 |
| Mobile portrait state | Task 7 step 3 (visual check) |
| WhatsApp deeplink with pre-filled text | Task 7 step 3 (visual check) |

All spec requirements are covered. No gaps.

---

## Adding the Next Product (after pilot ships)

Once this plan is complete, adding e.g. Letër Mbështjellëse takes 3 steps:

1. Create `src/data/products/leter-mbeshtjellese.js` — copy `kuti-hamburgeri.js`, update all fields.
2. Create `src/pages/ProductLeterMbeshtjellese.jsx`:
   ```jsx
   import { useEffect } from 'react'
   import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
   import { PRODUCT } from '@/data/products/leter-mbeshtjellese'
   export default function ProductLeterMbeshtjellese({ lang = 'al' }) {
     useEffect(() => {
       document.title = PRODUCT.seo[lang].title
       const meta = document.querySelector('meta[name="description"]')
       if (meta) meta.setAttribute('content', PRODUCT.seo[lang].description)
     }, [lang])
     return <ProductFlatPage lang={lang} product={PRODUCT} />
   }
   ```
3. Add route + sitemap + llms.txt entry (same pattern as Tasks 7–8 above).

No new components. No changes to `ProductFlatPage`, `ProductHeroFlat`, or `ProductHighlights`.
