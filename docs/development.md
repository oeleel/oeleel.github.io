# Development Guide

This guide explains how to set up your environment, run the site locally, add content, write code, and keep quality high.

---

## Prerequisites

Depending on the chosen stack:
- Node.js LTS (recommended): 20.x
- Package manager: npm (or pnpm/yarn)
- Git
- Optional: Docker (for containerized workflows)

Optional utilities:
- `nvm` for managing Node versions
- `just` or `make` for task running (if you prefer)

---

## Getting started

1. Clone:
```bash
git clone <repo-url>
cd personal-website
```

2. Install dependencies (if using a Node-based stack):
```bash
npm install
```

3. Run the dev server:
```bash
npm run dev
```

4. Open the site:
- Local: `http://localhost:5173` or as printed by your framework

If you are starting from a static HTML/CSS site:
```bash
python3 -m http.server 5173
# or
npx http-server -p 5173 .
```

---

## Scripts (typical)

```json
{
  "scripts": {
    "dev": "next dev",            // or `astro dev`, `vite dev`, etc.
    "build": "next build",        // or `astro build`, `vite build`
    "start": "next start",        // if framework supports it
    "preview": "astro preview",   // example
    "lint": "eslint .",           // with `--max-warnings=0` in CI
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"          // or jest, playwright for e2e
  }
}
```

Adjust commands to your chosen framework.

---

## Project conventions

- Language: TypeScript (recommended), otherwise modern JavaScript
- Structure: Keep pages, components, styles, lib, and content clearly separated
- Naming: Use descriptive names; avoid abbreviations
- Imports: Prefer absolute or path-alias imports for `src/`
- Components: Small, focused; colocate component-specific styles
- Accessibility: Ensure interactive controls are keyboard-accessible and labeled
- Git: Feature branches, small PRs, conventional commit messages (optional but recommended)

---

## Content authoring

- Posts/pages live in `content/` using Markdown/MDX with frontmatter
- Use descriptive filenames and stable slugs
- Keep metadata accurate (title, description, date, tags)
- Add images under `public/images/...` and reference with root-relative paths

### Local preview

- Run the dev server and navigate to the new page or post
- Validate headings, links, code blocks, images, and metadata

---

## Linting and formatting

- Formatting: Prettier
- Linting: ESLint (and Stylelint if using traditional CSS)
- Type-check: `tsc --noEmit`

Typical local workflow:
```bash
npm run format
npm run lint
npm run typecheck
```

Optional pre-commit:
- Husky + lint-staged to format and lint changed files

---

## Testing

- Unit tests: Vitest/Jest for utilities and component logic
- Component tests: Testing Library for DOM behavior
- E2E tests: Playwright or Cypress for critical flows

Run tests:
```bash
npm test
```

In CI, run: `lint`, `typecheck`, `test`, `build` in that order.

---

## Environment variables

- Use `.env.local` for local development
- Do not commit secrets
- Example variables:
  - `SITE_URL` = `https://yoursite.com`
  - `ANALYTICS_KEY` = `<token>`
  - `CONTACT_ENDPOINT` = `<serverless function URL>`

---

## Debugging tips

- Use your framework's error overlays to identify component and routing errors
- Inspect network requests for image and font loading issues
- Check the console for hydration mismatches when using SSR/SSG

---

## Common tasks

- Add a page: Create a new file under `src/pages/` (or `app/`), export a default component
- Add a blog post: Add a Markdown file under `content/posts/` with frontmatter
- Add a component: Create a new file in `src/components/` and import it into a page
- Update navigation: Edit `site.config.(ts|js)` or the `Header` component

---

## CI recommendations

- Run `lint`, `typecheck`, `test`, then `build`
- Cache dependencies and build artifacts
- Fail fast on errors; keep logs actionable

---

## Local tooling (optional)

- Image optimization script in `scripts/optimize-images.(ts|js)`
- Dead link checker for `content/` in `scripts/check-links.(ts|js)`

---

## When things break

Check `docs/troubleshooting.md` for common issues, Gotchas about Node versions, and framework-specific errors.