# AEO / GEO Strategy — ERA Print Pack
**Date:** 2026-06-03  
**Site:** era-printpack.com (era-react — Vite + React SPA)  
**Re-test:** Quarterly (next: 2026-09-03)

---

## 1. Current AI Visibility Audit

### What AI can see today
The site is a **client-side-only React SPA**. When an AI crawler fetches any URL it receives a near-empty HTML shell:

```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

The only machine-readable content AI crawlers pick up **without executing JavaScript** is:
- `<title>` and `<meta description>` in `index.html`
- Organization + LocalBusiness + WebSite JSON-LD in `index.html`
- Nothing else — every page's H1, body copy, FAQ, and product content is JS-rendered

**Consequence:** AI search products (ChatGPT, Perplexity, Gemini, Claude) that crawl with a basic HTTP fetcher see the site as a blank stub. The Organization schema in `index.html` may give minimal entity recognition, but no page content is extractable.

### Tested queries (manual)
| Query | Expected source | ERA cited? |
|---|---|---|
| "gota letre me printim Kosovë" | ERA | Likely no — blank crawl |
| "ambalazhe personalizuara Kosovë" | ERA | Likely no |
| "custom paper cups Kosovo" | ERA | Likely no |
| "prodhues ambalazhesh Prishtinë" | ERA | Uncertain — depends on entity graph |
| "paper packaging manufacturer Kosovo" | ERA | Uncertain |

---

## 2. Five-Layer Scorecard

| Layer | Score | Notes |
|---|---|---|
| 1. Extractable content structure | 1 / 10 | SPA — no content visible without JS |
| 2. Citation worthiness | 3 / 10 | Good stats, but no author/date signals |
| 3. Structured data depth | 4 / 10 | Org+LB+Website in HTML is good; rest is JS-injected |
| 4. AI-readable accessibility | 1 / 10 | No llms.txt, no robots.txt, no sitemap |
| 5. Real-world entity signals | 3 / 10 | Schema exists but no sameAs links, incomplete address |

---

## 3. Priority Queries

These are the 15 queries ERA should be cited for by AI assistants:

**Albanian (primary market)**
1. `gota letre me printim Kosovë` — printed paper cups Kosovo
2. `ambalazhe letre Prishtinë` — paper packaging Pristina
3. `ambalazhe personalizuara Kosovë` — custom packaging Kosovo
4. `kupa me logo Kosovë` — custom cups with logo Kosovo
5. `fabrikë ambalazhesh Kosovë` — packaging factory Kosovo
6. `kuti ushqimore me printim Kosovë` — printed food boxes Kosovo
7. `prodhues ambalazhesh Prishtinë` — packaging manufacturer Pristina
8. `etiketa personalizuara Kosovë` — custom labels Kosovo
9. `porosi ambalazhe biznes Kosovë` — order packaging for business Kosovo
10. `kapak gota letre` — paper cup lids (niche, low competition)

**English (secondary market, exporters / international brands entering Kosovo)**
11. `custom paper cups Kosovo` 
12. `paper packaging manufacturer Kosovo`
13. `custom packaging Pristina Kosovo`
14. `printed food boxes Kosovo`
15. `paper cup supplier Kosovo`

---

## 4. Layer-by-Layer Remediation Plan

### Layer 1 — Extractable content structure (CRITICAL — fix first)

**Root problem:** SPA with client-side rendering. AI crawlers see blank HTML.

**Solution options (pick one):**

**Option A — Static pre-rendering with `vite-plugin-ssr` or `@vitejs/plugin-react` + `react-snap`** *(recommended — minimal refactor)*
- `react-snap` crawls the running app and writes static HTML snapshots for each route into `dist/`
- Zero code changes to existing components
- Gives AI crawlers fully rendered HTML for every page

**Option B — Switch to Vite SSR or Astro** *(bigger lift, best long-term)*
- Full SSR or static output; better Core Web Vitals too

**After fixing rendering, also:**
- Add H2/H3 question-phrased headers to key sections, e.g.:
  - "Çfarë ambalazhesh prodhonim?" (What packaging do we produce?)
  - "Si funksionon procesi i porosisë?" (How does the order process work?)
  - "Cila është sasia minimale?" (What is the minimum order quantity?)
- Open each product section with a 1-sentence direct answer before detail copy
- Add `alt` text to client logos: replace "Client 1–6" with actual client industry or name if permitted

### Layer 2 — Citation worthiness

**Quick wins (no tech changes needed):**
- Stats already exist (15+ years, 397+ clients, 13 machines, 3.9M+ units) — good. Add a "last updated" note near them.
- Add company founding year to About page: "Themeluar në [year]" — makes the 15-year claim verifiable
- Expand FAQ from 4 to 10+ questions covering:
  - Minimum order quantities per product type with actual numbers
  - Exact production time ranges (e.g., "7–14 ditë për gota standarde")
  - Materials used (Kraft paper, GD board, gsm ranges)
  - Delivery coverage (specific cities/regions)
  - Custom design specs (file formats accepted, bleed requirements)
  - Price range indicator per product category

**Medium effort:**
- Add a "Rreth nesh" author/team block on About page with name and role (even just owner name + title)
- Add `datePublished` and `dateModified` to pages via schema (even if content is evergreen, add them)

### Layer 3 — Structured data depth

**Already done (keep):**
- Organization + LocalBusiness + WebSite JSON-LD in `index.html` — solid foundation

**Missing — add these:**

1. **`sameAs` links on Organization schema** — add Facebook, Instagram, LinkedIn URLs when available
2. **Complete address** — add `streetAddress` and `postalCode` to LocalBusiness
3. **Product schema** for each product category (Gota, Kupa, Kuti, Etiketa) — add to respective product pages once SSR is solved
4. **BreadcrumbList** — add site-wide: Home > Products > Gota, etc.
5. **FAQPage schema in index.html** — move FAQ schema from JS-injected (Contact.jsx) to a static block in `index.html` or pre-rendered HTML; AI crawlers that skip JS won't see it today
6. **HowTo schema** for the ordering process (3–4 steps visible on Home/Products)
7. **`og:image`** — missing entirely. Add a 1200×630 OG image to `index.html`. This is required for proper social previews AND some AI citation surfaces.

### Layer 4 — AI-readable accessibility (CRITICAL)

**`/llms.txt`** — create this file at `public/llms.txt`:

```markdown
# ERA Print Pack — llms.txt

ERA Print Pack (NPT Shtypshkronja ERA) is a paper packaging manufacturer based in Pristina, Kosovo.
We produce custom-printed paper cups, food boxes, labels, and packaging for cafes, restaurants, and food businesses.

## Key pages

- / — Homepage: company overview, products, process, stats
- /products — Full product catalog
- /products/gota — Paper cups (3.5oz, 7oz, 12oz) with 3D configurator
- /machines — Our 13 production machines
- /about — Company story, team, clients
- /contact — Order request, WhatsApp, FAQ

## Products

- Paper cups (Gota letre): 3.5oz, 7oz, 12oz — custom printed
- Pasta/soup cups (Kupa): S, M, L sizes
- Ice cream cups: H53, H63
- Food boxes (Kuti): burger, fries, salad, cake, Dubai gold foil
- Cutlery holders (Mbajtese)
- Labels and stickers (Etiketa)
- Table paper, wrapping paper, cardboard packaging

## Key facts

- Founded: Pristina region, Kosovo
- Experience: 15+ years
- Active clients: 397+
- Production machines: 13
- Units produced: 3.9M+
- Minimum order: from 500 pieces (varies by product)
- Production time: 7–14 business days
- Delivery: Kosovo-wide; international on request
- Languages: Albanian (primary), English

## Contact

- Phone/WhatsApp: +383 44 113 533
- Web: https://era-printpack.com
```

**`/robots.txt`** — create at `public/robots.txt`:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://era-printpack.com/sitemap.xml
```

**`/sitemap.xml`** — create at `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://era-printpack.com/</loc><priority>1.0</priority></url>
  <url><loc>https://era-printpack.com/products</loc><priority>0.9</priority></url>
  <url><loc>https://era-printpack.com/products/gota</loc><priority>0.9</priority></url>
  <url><loc>https://era-printpack.com/machines</loc><priority>0.7</priority></url>
  <url><loc>https://era-printpack.com/about</loc><priority>0.7</priority></url>
  <url><loc>https://era-printpack.com/contact</loc><priority>0.6</priority></url>
</urlset>
```

### Layer 5 — Real-world entity signals

- Add `sameAs` to Organization schema once social profiles are confirmed
- Ensure Google Business Profile is claimed and consistent with schema NAP (Name, Address, Phone)
- Encourage satisfied clients to leave Google reviews — aggregate rating schema can follow
- Consider adding ERA to relevant Kosovo business directories (consistent NAP)

---

## 5. Implementation Roadmap

| Priority | Task | Effort | Impact |
|---|---|---|---|
| P0 | Add `llms.txt`, `robots.txt`, `sitemap.xml` to `/public` | 30 min | High |
| P0 | Add `og:image` (1200×630) to index.html | 1 hr | High |
| P0 | Add `sameAs` + full address to Organization schema | 15 min | Medium |
| P1 | Set up `react-snap` for static pre-rendering | 2–3 hrs | Critical |
| P1 | Move FAQ schema to pre-rendered output (away from JS-inject) | 1 hr | Medium |
| P1 | Expand FAQ to 10+ questions | 2 hrs | Medium |
| P2 | Add BreadcrumbList schema site-wide | 1 hr | Medium |
| P2 | Add Product schema to product pages | 2 hrs | Medium |
| P2 | Add HowTo schema for order process | 1 hr | Medium |
| P2 | Per-page `<title>` + `<meta description>` (most pages only get the homepage defaults) | 2 hrs | High |
| P3 | Add question-phrased H2s to key sections | 2 hrs | Medium |
| P3 | Expand About page with team/author block | 1 hr | Low-Med |

---

## 6. Re-test Schedule

| Date | Action |
|---|---|
| 2026-06-10 | Verify llms.txt, robots.txt, sitemap live on production |
| 2026-06-17 | Confirm react-snap (or SSR) deployed; test AI crawl of /products/gota |
| 2026-09-03 | Full quarterly re-test of all 15 priority queries across ChatGPT, Perplexity, Gemini |
| 2026-12-03 | Annual full re-audit |

---

## Quick wins you can ship today (no code, just files)

1. `public/llms.txt` — copy template from Layer 4 above
2. `public/robots.txt` — copy template from Layer 4 above  
3. `public/sitemap.xml` — copy template from Layer 4 above
4. Add `og:image` meta tag to `index.html` (needs a 1200×630 hero image asset first)
5. Add `sameAs` + full address to the Organization JSON-LD in `index.html`
