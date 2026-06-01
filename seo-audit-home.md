# On-Page SEO Audit — Homepage

**URL:** `/` (era-print-pack domain, pre-launch)
**Target query:** `ambalazhe letre Kosovë`
**Page role:** Commercial homepage — brand intro, product highlights, primary CTA
**Audit date:** 2026-05-29

---

## Scores

| Dimension | Score | Note |
|---|---|---|
| 1. Title tag | Needs work | Query present but brand-first; "Kosovë" and "Letre" split by "me Printim" |
| 2. Meta description | **FAIL** | Completely absent from index.html |
| 3. Header structure | Needs work | One H1 ✓ — but H1 contains no query signal |
| 4. Body content | Needs work | "ambalazhe letre" never appears in hero body; only "Kosovë" does |
| 5. Internal links | Pass | Footer + nav link to all major pages |
| 6. Images / media | Needs work | Client logo alt text is "Client 1" … "Client 6" — meaningless |
| 7. URL slug | Pass | Root `/` — correct |
| 8. Schema markup | **FAIL** | No Organization, LocalBusiness, or WebSite schema anywhere |

---

## Critical fixes

### C1 — Add meta description
`index.html` has no `<meta name="description">`. Google writes its own snippet; click-through suffers.

**Draft (Albanian, 153 chars):**
```
ERA Print Pack prodhon ambalazhe letre me printim profesional në Kosovë. Gota, kuti dhe etiketa personalizuara — dërgim brenda 7–14 ditësh. Porosit tani.
```

### C2 — Add Organization + LocalBusiness schema
No JSON-LD on the page. Crawlers cannot confirm name, location, phone, or product category.

### C3 — Move query to front of title tag
Current: `ERA Print Pack — Ambalazhe Letre me Printim Kosovë`
Problem: brand leads; "Letre" and "Kosovë" are split by "me Printim".

**Fix:**
```
Ambalazhe Letre Kosovë | ERA Print Pack
```
40 chars — clean, query-first, brand retained.

---

## Important fixes

### I1 — Add "ambalazhe letre" to hero body
The H1 is benefit-focused ("Ambalazhja që e bën markën tënde të dallohet") — correct for users. But the
subheadline currently opens with "Gota, kuti dhe etiketa…" — the target query appears nowhere in visible body text above the fold.

**Fix:** Lead the subheadline with "Ambalazhe letre me printim profesional —" so the query phrase lands in the first readable paragraph.

### I2 — Add Open Graph tags
No `og:title`, `og:description`, `og:image`. WhatsApp (the primary CTA channel) pulls OG data for link previews. A bare link shared on WhatsApp shows no preview, which costs credibility.

### I3 — Plan react-helmet-async for other pages
`index.html` is static — its title and meta apply to every route. As Products, About, and Contact pages launch, each needs a unique title and description. Install `react-helmet-async` before those pages go live.

---

## Nice-to-have polish

- **N1** — Add `<link rel="canonical" href="https://yourdomain.com/" />` to prevent duplicate-URL issues.
- **N2** — Replace client logo alt text (`"Client 1"` … `"Client 6"`) with actual business names when known. Alt text on logos is a minor trust signal.
- **N3** — Add `<meta name="robots" content="index, follow" />` explicitly (it defaults to this, but being explicit prevents accidents when adding `noindex` to other pages).
- **N4** — Consider `hreflang` tags once you have a stable URL strategy for AL vs EN variants (`/` vs `/en/`, or a query param). Skip until the routing is decided.

---

## Fixes applied in this audit

C1 (meta description), C2 (schema), C3 (title), I1 (subheadline query), I2 (OG tags), N1 (canonical), N3 (robots) — all written directly into `index.html` and `Home.jsx`.

I3 (react-helmet-async) and N2 (client alt text) are flagged for follow-up.
