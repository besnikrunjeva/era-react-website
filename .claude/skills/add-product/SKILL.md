---
name: add-product
description: Walk through adding a new product to the ERA website end-to-end — reference photo upload, Magnific studio generation + 3 use-case variations, data file, catalog entry, route, SEO files, and build verification.
---

# Add Product Skill

Use this skill when Besnik says `/add-product` or asks to add a new product to the ERA website.

## What you are building

The ERA website has two templates for product pages:
- **3D template** (`Product3DPage.jsx`) — for products with a GLB model (cups, bowls, holders)
- **Flat template** (`ProductFlatPage.jsx`) — for products with only photos (boxes, tea packages, accessories)

Adding a product requires touching 6 files plus generating professional product photos via Magnific.

---

## Step 1 — Collect product info

Ask Besnik for the following (one question at a time if not already provided in the message):

1. **Product name in Albanian** (e.g. "Kuti Pice")
2. **Product name in English** (e.g. "Pizza Box")
3. **Slug** — URL-safe lowercase, hyphenated (e.g. `kuti-pice` → route `/products/kuti-pice`)
4. **Template**: 3D or Flat?
5. **Type category**: `gota` | `kuti` | `caj` | `aksesore`
6. **Use cases** (multi, from: `kafene`, `fast-food`, `pasticeri`, `restorant`)
7. **Materials** (multi, from: `karton`, `kraft`, `food-grade`)
8. **Available now** or coming soon (`available: true/false`)
9. **Reference photo(s)** — Besnik will attach images directly in the chat. If he hasn't, ask: "Dërso foto/at e produktit."

---

## Step 2 — Generate studio photos + use-case variations (Magnific)

This step runs entirely before touching any code files.

### 2a — Upload the reference photo(s)

For each photo Besnik has sent, upload it to Magnific:

```
mcp__claude_ai_magnific__creations_upload_image
  path: <the file path from the image attachment>
```

Note the `identifier` returned — you will use it in 2b and 2c.

If Besnik sent **only one photo**, ask before proceeding:
> "A ke ndonjë foto tjetër? P.sh. kutia e hapur, pamja e brendshme, ose këndi 3/4? I gjeneroj studio foto edhe për ato."

Generate studio versions for every photo he provides, even if he sends more after this prompt.

### 2b — Generate studio version of each reference photo

For each uploaded identifier, generate a studio-grade version. The **structure must not change at all** — same shape, same panels, same flaps, same scoring lines, same construction. Only the background and lighting change.

```
mcp__claude_ai_magnific__images_generate
  prompt: "Professional studio product photography, pure white background, soft even studio lighting,
           subtle ground shadow only, exact same [product name] packaging as reference —
           preserve every structural detail: shape, dimensions, panels, flaps, die-cut pattern,
           score lines, construction — do not alter any structural element whatsoever,
           only improve lighting and background, commercial product photo, sharp, 8K"
  negative_prompt: "different shape, modified structure, changed dimensions, different packaging,
                    altered panels, changed flaps, structural modifications, deformed"
  reference: <identifier from 2a>
```

Call `mcp__claude_ai_magnific__creations_wait` with the returned identifier to get the final URL.

Call `mcp__claude_ai_magnific__creations_show` to show Besnik the result inline.

Download the result to the project:
```bash
curl -L "<url from creations_wait>" -o "/Users/macbookpro/era-react/src/assets/products/[slug]-studio.webp"
```

**If the product has both a closed and open photo**, name them:
- `[slug]-studio.webp` — closed/exterior view
- `[slug]-open-studio.webp` — open/interior view

Do NOT use numbered suffixes (`-studio-1`, `-studio-2`) for open/closed pairs — use the explicit `-open-` naming.

### 2c — Ask Besnik what the use-case cards should show

Before generating, ask:

> "Për seksionin 'Çfarë mund të paketosh' — çfarë dëshiron të tregojnë 3 kartat?
> - **Dizajne të ndryshme** të së njëjtës kuti (3 brand concept krejtësisht të ndryshme)
> - **Produkte/ushqime të ndryshme** brenda kutisë (p.sh. burgeri, sallata, embëlsira)"

Proceed based on his answer:

---

**Option A — 3 different brand designs (most common)**

Use the **studio generation identifier** (from 2b) as the reference — NOT the original uploaded photo. This ensures the structure reference is already clean and studio-lit.

Generate 3 completely different brand designs. The surface graphics/colors/typography must be 100% original — **do not replicate or reference the primary design at all** (ignore its colors, logo, typography, style entirely).

Pick 3 visually distinct concepts from the product's use cases:

| Use case | Variation 1 | Variation 2 | Variation 3 |
|---|---|---|---|
| fast-food | vibrant urban street food, bold typography, red & yellow | modern minimalist fast casual, monochrome + one accent | premium gourmet brand, dark bg, gold accents |
| kafene | third-wave specialty coffee, earthy kraft tones, hand-drawn | modern urban café, geometric, deep navy & cream | artisan Italian espresso bar, warm terracotta & cream |
| pasticeri | French patisserie, elegant script, soft pastel pink & gold | modern bakery, clean sans-serif, sage green & cream | premium chocolatier, deep brown & gold foil |
| restorant | upscale casual dining, warm neutrals, minimal logo | Mediterranean, blue & white coastal aesthetic | farm-to-table, kraft & green, organic natural feel |
| dhurate | vibrant kids birthday party, rainbow colors, cartoon balloons | premium luxury gift, midnight black + rose gold foil | artisan handmade, natural kraft + sage green botanicals |

For each variation:
```
mcp__claude_ai_magnific__images_generate
  prompt: "Professional studio product photography, pure white background, studio lighting,
           [product name] packaging — preserve exactly: physical structure, shape, dimensions,
           panels, flaps, construction, AND camera angle / viewpoint identical to reference —
           completely new surface design: [variation design concept], [colors], [typography style] —
           erase all existing graphics, logos, text, illustrations from the reference entirely —
           replace with a brand new design for a completely different company,
           no trace of the original branding, same perspective and framing as reference photo,
           commercial product photo, 8K"
  negative_prompt: "original logo, original text, original graphics, original branding, original colors,
                    same design as reference, copy of reference artwork, [specific logo name from ref if known],
                    different shape, modified structure, changed dimensions, deformed packaging,
                    different angle, different viewpoint, different camera position"
  reference: <studio generation identifier from 2b>
```

> **Note:** If the original reference has a strong/distinctive logo (e.g. "BiG ScoOP", "MeKids"), explicitly name it in the negative prompt so the model doesn't bleed it through.

---

**Option B — different food/product items shown in or with the box**

Use the **studio generation of the open box** as the reference — if Besnik sent an open-box photo and it was processed in 2b, use that studio identifier. Showing products inside an open box is far more compelling than a closed one.

Generate 3 images each showing the box with a **single** different food/product inside. Keep the box design identical to the studio version — same angle, same viewpoint, only the food/content changes.

```
mcp__claude_ai_magnific__images_generate
  prompt: "Professional studio product photography, pure white background, studio lighting,
           [product name] packaging — exact same box design, structure, camera angle and viewpoint
           as reference — styled with one [food item / product] inside or arranged beside the box,
           appetizing presentation, same perspective as reference, commercial product photo, 8K"
  negative_prompt: "different box design, modified packaging, structural changes, deformed,
                    different angle, different viewpoint, multiple food items"
  reference: <studio generation identifier of the OPEN BOX from 2b>
```

**When Besnik asks for both different designs AND different foods in each card:** combine the two in a single prompt — new brand design + one food item inside the tray — still using the studio photo as reference to preserve the angle.

---

Call `mcp__claude_ai_magnific__creations_wait` then `mcp__claude_ai_magnific__creations_show` for each variation.

Download each:
```bash
curl -L "<url>" -o "/Users/macbookpro/era-react/src/assets/products/[slug]-var-1.webp"
curl -L "<url>" -o "/Users/macbookpro/era-react/src/assets/products/[slug]-var-2.webp"
curl -L "<url>" -o "/Users/macbookpro/era-react/src/assets/products/[slug]-var-3.webp"
```

Show Besnik all 3 results. Ask: "Dëshiron të ripërsëris ndonjë prej tyre?"

The **studio photo** (`[slug]-studio.webp`) becomes the primary `img` in the catalog and data file.

**`sizes` array rules:**
- If only one studio photo exists → single entry with `label: { al: 'Studio', en: 'Studio' }`
- If both closed and open photos exist → two entries:
  ```js
  { img: imgStudio,     label: { al: 'E Mbyllur', en: 'Closed' }, imgAlt: { ... } },
  { img: imgOpenStudio, label: { al: 'E Hapur',   en: 'Open'   }, imgAlt: { ... } },
  ```
  Import the open photo as `imgOpenStudio from '@/assets/products/[slug]-open-studio.webp'`.

The **variations** (`[slug]-var-1.webp`, `[slug]-var-2.webp`, `[slug]-var-3.webp`) are used exclusively as the **`useCases` images** in the data file (see Step 4) — do NOT add them to `sizes`.

---

## Step 3 — Read the right template for reference

Before generating any code, read the most relevant existing product:
- Flat products: read `src/data/products/kuti-dhurate.js` (has `useCases` with variation images — the complete schema to follow)
- 3D products: read `src/pages/ProductGota.jsx`

---

## Step 4 — Create the data file

Create `src/data/products/[slug].js`.

Follow the exact schema from the reference file. Every string field must be bilingual: `{ al: '...', en: '...' }`.

Use `@/assets/products/[slug]-studio.webp` as the primary `img`.

**Always include the `useCases` array** — this powers the "Çfarë mund të paketosh" section rendered by `UseCasesSection` in `ProductFlatPage`. Use the 3 variation photos as images, one per card:

```js
useCases: [
  {
    img: imgVar1,
    label: { al: '[Label 1 shqip]', en: '[Label 1 en]' },
    desc:  { al: '[Short desc 1 shqip]', en: '[Short desc 1 en]' },
  },
  {
    img: imgVar2,
    label: { al: '[Label 2 shqip]', en: '[Label 2 en]' },
    desc:  { al: '[Short desc 2 shqip]', en: '[Short desc 2 en]' },
  },
  {
    img: imgVar3,
    label: { al: '[Label 3 shqip]', en: '[Label 3 en]' },
    desc:  { al: '[Short desc 3 shqip]', en: '[Short desc 3 en]' },
  },
],
```

The label and desc should match the visual concept of each variation (e.g. if var-1 was generated as "kids party", label it accordingly).

Leave `// TODO: Besnik — add real copy` on any field where the correct Albanian copy is uncertain.

---

## Step 5 — Create the page file

Create `src/pages/Product[PascalSlug].jsx`.

For flat products:
```jsx
import { ProductFlatPage } from '@/pages/sections/ProductFlatPage'
import { PRODUCT } from '@/data/products/[slug]'
export default function Product[PascalSlug]({ lang = 'al' }) {
  return <ProductFlatPage product={PRODUCT} lang={lang} />
}
```

For 3D products, copy the structure from `ProductGota.jsx` and adapt.

---

## Step 6 — Add to `src/data/catalog.js`

Append a new entry to the `CATALOG` array in the correct type section (gota → kuti → caj → aksesore). Set `img` to the imported studio image.

---

## Step 7 — Add route to `src/App.jsx`

Import (alphabetical order among product imports):
```jsx
import Product[PascalSlug] from '@/pages/Product[PascalSlug]'
```

Route (after the last `/products/...` route):
```jsx
<Route path="/products/[slug]" element={<Product[PascalSlug] lang={lang} />} />
```

---

## Step 8 — Update SEO files

**`public/sitemap.xml`** — add before `</urlset>`:
```xml
<url>
  <loc>https://shtypshonjera.com/products/[slug]</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**`public/llms.txt`** — add under Products:
```
- /products/[slug]: [Albanian name] ([English name]) — [one-line description]
```

---

## Step 9 — Update `CLAUDE.md`

1. Add row to **Current pages** table:
   ```
   | `/products/[slug]` | `src/pages/Product[PascalSlug].jsx` | flat page |
   ```
2. Increment crawl count (`currently **N**` → `currently **N+1**`).
3. Remove from **Unrouted page files** section if listed there.

---

## Step 10 — Verify build

```bash
npm run build
```

Expected: `✅ crawled N out of N` where N matches the updated crawl count.

If a route fails, check that the path in App.jsx matches the slug exactly and the page exports a default function.

---

## Step 11 — Commit

```bash
git add src/data/products/[slug].js \
        src/pages/Product[PascalSlug].jsx \
        src/data/catalog.js \
        src/App.jsx \
        src/assets/products/[slug]-studio.webp \
        src/assets/products/[slug]-open-studio.webp \   # only if open photo exists
        src/assets/products/[slug]-var-1.webp \
        src/assets/products/[slug]-var-2.webp \
        src/assets/products/[slug]-var-3.webp \
        public/sitemap.xml \
        public/llms.txt \
        CLAUDE.md
git commit -m "feat: add [Albanian name] product page with studio photos"
```
