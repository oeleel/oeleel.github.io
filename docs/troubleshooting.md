# Troubleshooting and FAQ

Quick fixes for common issues. If you are blocked and none of these help, open an issue or ask for help in your team channel.

---

## Common issues

### Dev server won’t start
- Symptoms: Errors on `npm run dev`
- Checks:
  - Node version is LTS (20.x) — run `node -v`
  - Clean installs: `rm -rf node_modules && npm ci`
  - Lockfile matches package manager in use
- If using a new macOS/Linux environment, ensure build tools are installed

### Type errors after pulling changes
- Run `npm run typecheck` to see details
- Ensure dependencies are installed: `npm ci`
- If using Contentlayer or MDX, re-run the dev server to regenerate types

### Styles not updating
- Ensure the dev server is running and hot-reload is enabled
- If using Tailwind, confirm content globs include your files
- Delete cache or restart dev server

### Images not loading
- Verify paths are root-relative (`/images/...`) and assets exist under `public/`
- Check case sensitivity (Linux is case-sensitive)
- If using a framework image component, confirm domains and sizes are configured

### Broken links or 404s
- Check route filenames and slugs
- Rebuild: `npm run build` then `npm run preview`
- Run a link checker in `scripts/` if available

### Contact form errors
- Confirm `CONTACT_ENDPOINT` is set and reachable
- Inspect network tab for status codes and CORS issues
- Use platform logs (Vercel/Netlify/Cloudflare) to see function errors

### Preview deployment differs from local
- Ensure the same Node version is used locally and in CI
- Verify environment variables for the Preview environment
- Clear build cache in the hosting platform and redeploy

---

## FAQ

### Can I use plain HTML/CSS without a framework?
Yes. Serve static files locally and deploy to any static host. You can add a generator later.

### How do I add a new page?
Create a file under `src/pages/` (or `app/` if your framework uses it). Export a page component and add metadata.

### Where do blog posts live?
In `content/posts/` as Markdown/MDX. Use frontmatter for title, description, date, and tags.

### How do I change the navigation?
Edit `site.config.(ts|js)` or the `Header` component to update nav links.

### What about analytics and privacy?
Use a privacy-friendly provider (Plausible/Umami). Respect DNT. Do not collect unnecessary personal data.

### Can I deploy to multiple providers?
Pick one primary provider to simplify operations. You can migrate later if needed.

### Do I need a backend?
No for most sites. If you need a form or dynamic feature, use serverless functions.

---

## Still stuck?

- Check recent commits and CI logs
- Search issues/PRs
- Open an issue with clear reproduction steps and screenshots