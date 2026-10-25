# Haul Bros Junk Removal

Production React + Vite marketing site for Haul Bros Junk Removal — Laguna Hills, CA — (949) 619-6663.

## Stack
React 18 · Vite 5 · CSS Modules · React Router 6. Hosted on Cloudflare Pages.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Editing business info
Everything lives in `src/data/business.js`: name, phone, city, hours, services,
how-it-works steps, pricing checklist, FAQs, nearby areas, reviews, and the optional
estimate webhook. Colors and fonts are tokens at the top of `src/styles/global.css`.

Portfolio rule: no email addresses anywhere on the site.

## Design
"Workwear patch" identity pulled from the emblem: navy + cream, amber for actions,
brick-red stamps, dashed stitch borders. Type: Alfa Slab One (display), Barlow
Condensed (labels/buttons), Karla (body).

## Pages
- `/` — Hero, TrustBar, Services, How It Works, Pricing (checklist), Before & After
  (drag-to-compare, real job photos), Reviews*, About, Service Areas, FAQ, Final CTA
- `/get-estimate` — canonical 3-step wizard (Howard's spec), MinimalHeader only

\*Reviews stays hidden until real Google reviews or a `googleReviewsUrl` are added
to `business.js`.

## Estimate form
Submissions show the confirmation screen. To also send leads somewhere, set
`estimateWebhook` in `business.js` to a POST endpoint (e.g. a GHL inbound webhook).
Payload: `business, inServiceArea, junkTypes, name, phone, details, submittedAt`.

## Deploy
```bash
git init
git add .
git commit -m "Initial build: Haul Bros Junk Removal"
git branch -M main
git remote add origin https://github.com/servicepros714/haulbrosjunkremoval.git
git push -u origin main
```
Cloudflare Pages: build command `npm run build`, output directory `dist`.
`public/_redirects` handles SPA routing.

## Before launch
- Confirm the domain — `haulbrosjunkremoval.com` is a placeholder in `business.js`,
  `index.html`, `robots.txt`, and `sitemap.xml`
- Add real Google reviews / reviews link
- Wire `estimateWebhook` if leads should go to the CRM
