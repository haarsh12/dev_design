# Vyamit AI website

The public website for Vyamit AI: the voice-first AI shop management platform for Indian businesses. It presents the real product experience across billing, inventory, customer ledgers, GST-ready invoices, UPI-ready virtual bills, shop records, printer support, and business insights.

## Run locally ss

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The static site is generated in `dist/`.

## Deploy to Render

This repository includes `render.yaml`. Push it to a GitHub repository, then in Render choose **New > Blueprint** and select that repository. Render will build with `npm ci && npm run build`, publish `dist`, and rewrite client-side routes such as `/privacy` and `/terms` to the React app.

You can also create a **Static Site** manually and use these settings:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Rewrite: `/*` to `/index.html`

After the first successful deployment, add `vyamit.ai` as the custom domain in Render and update its DNS records with your domain provider. The production domain must remain `https://vyamit.ai` because the canonical URLs, sitemap, and structured data use that address.

## Search readiness

The production build includes:

- Search metadata and Open Graph previews in `index.html`
- Organization, WebSite, SoftwareApplication, and FAQ structured data
- `public/robots.txt` and `public/sitemap.xml`
- A crawl-friendly product summary in `public/llms.txt`
- Canonical URLs for the public pages

Once the live domain is connected, add the site to Google Search Console, verify ownership, and submit `https://vyamit.ai/sitemap.xml`. This gives Google clear information about Vyamit AI, but search ranking depends on crawled content, reputation, technical health, and relevant links - it cannot be guaranteed by site files alone.

## Releases

Place Android `.apk` files in `public/downloads/android/` and iOS `.ipa` files in `public/downloads/ios/`. `npm run build` automatically updates `public/downloads/release.json` using the latest file from each folder.
