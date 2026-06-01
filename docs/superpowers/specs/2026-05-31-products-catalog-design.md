# Products Catalog Page — Design Spec
**Date:** 2026-05-31  
**Scope:** `/products` catalog page only. Individual product pages are a separate future spec.

---

## 1. Page URL & Route
`/products` — added to `App.jsx` alongside existing routes.

---

## 2. Page Structure (top → bottom)

### 2.1 Hero — InfiniteGrid (white)
Same component used on Home and Contact. Content:
- Badge: "Produktet Tona"
- H1: "Ambalazhe letre me **printim profesional**"
- Subheadline: "Gota, kupa, kuti dhe paketime me logo custom — prodhuar në Kosovë."
- No CTA buttons needed (page content below does the work)

### 2.2 Zone A — "Me Editor 3D" featured strip
Dark background (`#0f1010`), ERA green section label.  
Label copy: `✦ Me editor 3D — shiko logon tënde para se të porosisësh`

**4 product cards** in a responsive grid (1-col mobile → 2-col tablet → 4-col desktop):

| Product | Slug | GLB | Sizes/variants |
|---------|------|-----|----------------|
| Gota Letre | `/products/gota` | `gota-7oz.glb` | 3.5oz · 7oz · 12oz |
| Kupa Pasta & Supe | `/products/kupa-pasta` | `kupa-pasta.glb` | S · M · L |
| Kupa Akullore | `/products/akullore` | `akullore.glb` | H53 · H63 |
| Mbajtëse Lugësh | `/products/mbajtese` | `mbajtese.glb` | Standard |

Each card contains:
- Mini 3D canvas (the GLB model, slowly rotating, no interaction — pure eye candy)
- "3D" green badge (top-right corner)
- Product name (bold white)
- Variants/sizes (small, muted)
- Two buttons: `Shiko detajet` (outline) + `Personalizo 3D` (green filled) — both link to the product slug for now

Card style: dark `#111`, green border (`rgba(76,167,6,0.3)`), hover lifts border opacity to `rgba(76,167,6,0.7)`.

### 2.3 Divider
Thin ERA green gradient line between zones.

### 2.4 Zone B — "Paketime & Kuti" grid
White background. Section label: `Paketime & Kuti`

**6 product cards** in a responsive grid (1-col → 2-col → 3-col):

| Product | Slug | Image asset | Note |
|---------|------|-------------|------|
| Kuti Ushqimore | `/products/kuti-ushqimore` | `kuti-burger.webp` | Burger · Fritas · Sallata |
| Kuti Embëlsira | `/products/kuti-embelsira` | `kuti.webp` | Tortë · Kek · Byrek |
| Kuti Premium Pasticeri | `/products/kuti-premium` | `kuti.webp` | Gold badge, amber border |
| Kapak Gote | `/products/kapak-gota` | `kapak.webp` | PET · 3 madhësi |
| Tas Supe | `/products/tas-supe` | `tas-supe.webp` | — |
| Leter Mbeshtjellese | `/products/leter-mbeshtjellese` | `leter.webp` | — |

Each card contains:
- Product photo (image, object-cover, slight zoom on hover)
- Product name
- Short description / variants
- `Shiko →` button (outline green)
- Premium Pasticeri gets a `★ Premium` amber badge and amber border

### 2.5 Bottom CTA strip
Reuse existing `<BottomCTA>` component already on the homepage.

---

## 3. Component Breakdown

```
src/pages/Products.jsx          ← the page
src/pages/sections/
  ProductsHero.jsx              ← reuses InfiniteGrid, identical pattern to Home hero
  Featured3DStrip.jsx           ← Zone A: 4 dark cards with mini R3F canvas
  ProductsGrid.jsx              ← Zone B: 6 photo cards
```

`BottomCTA` is imported from existing section — no new file needed.

### 3.1 Mini3DCard (inside Featured3DStrip)
Each of the 4 featured cards has a small embedded R3F `Canvas` showing its GLB model spinning slowly.  
- Canvas height: `h-40` (160px)  
- Camera: `position [0, 0, 3.5]`, `fov 46`  
- Same `useNormalizedScene` helper already in `MockupCallout.jsx` — extract to `src/lib/useNormalizedScene.js` and share  
- `Float` from drei for gentle bob  
- No interaction (no orbit controls) — decorative only  
- `useGLTF.preload` called for all 4 models at module level  

### 3.2 ProductCard (inside ProductsGrid)
Standard white card: photo, name, description, button. Framer-motion `whileInView` fade-in with stagger.

---

## 4. Assets required
All images already exist in `src/assets/products/`. No new images needed for launch.  
GLBs already in `public/models/`: `gota-7oz.glb`, `kupa-pasta.glb`, `akullore.glb`, `mbajtese.glb`.  
`leter-tavoline.glb` exists in `public/models/` but Leter Tavoline is excluded from Zone A for now (no strong visual in a small card — can be added later).

---

## 5. Routing
- Add `<Route path="/products" element={<Products />} />` to `App.jsx`
- Individual product slugs (`/products/gota` etc.) are dead links for now — they'll 404 until individual pages are built in the next spec.
- Navigation link "Produktet" in `SimpleHeader` already exists pointing to `/products` — no header change needed.

---

## 6. What this spec does NOT cover
- Individual product pages (separate spec)
- The 3D logo editor (separate spec, part of individual product pages)
- Filtering or search
- Prices (ERA never displays prices publicly)
