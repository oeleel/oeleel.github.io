# Deployment and Operations

This guide covers deployment to common hosts, CI/CD setup, environment variables, and operational best practices.

---

## Supported platforms

Choose one hosting provider. All work well for static (SSG) sites and most support serverless functions if needed.

- Vercel: Excellent Next.js support, fast CDN, preview deployments by default
- Netlify: Solid SSG support, forms, redirects, preview deploys
- Cloudflare Pages: Fast edge CDN, functions/queues/Durable Objects available
- GitHub Pages: Simple static hosting, works well for pure static builds

---

## Build commands and output directories (typical)

- Next.js: `npm run build` → `.next` (platforms auto-detect); output static export optionally
- Astro: `npm run build` → `dist`
- Vite-based SSG: `npm run build` → `dist`

Set the framework in the platform UI or configure the build command/output as needed.

---

## Vercel

- Connect repository in Vercel dashboard
- Framework preset auto-detected; confirm build command
- Environment variables: Add under Project → Settings → Environment Variables
- Preview deployments: Per-branch previews on PRs
- Production: Merges to `main` trigger production deploy

### Vercel config (optional `vercel.json`)

```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

## Netlify

- Connect repository in Netlify dashboard
- Build command: `npm run build`
- Publish directory: `dist` (Astro/Vite) or framework default
- Environment variables: Site settings → Build & deploy → Environment
- Optional: Netlify Forms for contact; redirects via `_redirects`

### Netlify config (optional `netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-Content-Type-Options = "nosniff"
```

---

## Cloudflare Pages

- Create a Pages project and connect repository
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variables: Settings → Environment Variables
- Functions (if needed): add `functions/` directory and deploy automatically

---

## GitHub Pages

- Build the site in CI to `dist` and publish via Actions to the `gh-pages` branch
- In repository settings, enable Pages from the `gh-pages` branch

### GitHub Actions workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## CI/CD recommendations

- Use branch previews (Vercel/Netlify/Pages) to validate changes visually
- Pipeline order: install → lint → typecheck → test → build → deploy
- Cache dependencies for faster builds

---

## Environment variables

Common variables:
- `SITE_URL` — canonical site URL used in metadata and sitemaps
- `ANALYTICS_KEY` — token for analytics provider
- `CONTACT_ENDPOINT` — serverless/function endpoint for contact form

Management tips:
- Never commit secrets to the repository
- Use per-environment values (Production, Preview, Development)
- Rotate credentials periodically

---

## Monitoring and observability

- Analytics: Privacy-friendly options (Plausible/Umami) or framework-native
- Uptime: Free services (e.g., UptimeRobot) to watch the homepage
- Performance: Lighthouse CI on PRs, monitor Web Vitals in production if possible
- Error tracking: Lightweight client error logging; consider Sentry if you have dynamic features

---

## Caching and headers

- Static assets: Long cache with content hashes
- HTML: Shorter cache with revalidation
- Security headers: CSP, Referrer-Policy, X-Content-Type-Options, Permissions-Policy as appropriate

---

## Rollbacks

- Use platform built-in redeploy/rollback to previous successful builds
- Keep builds deterministic and reproducible (lockfiles, pinned versions when needed)