# Architecture and Code Tour

This document explains how the personal website is structured, the architectural decisions behind it, and how the code is organized. It is written to be useful whether the site is implemented as a static site (e.g., Astro/Eleventy) or a modern app framework (e.g., Next.js/SvelteKit). Where implementations differ, both options are described.

---

## System overview

- Goal: Deliver a fast, accessible, low-maintenance personal site with a small, understandable codebase
- Approach: Prefer static generation (SSG) for all content; use SSR only where needed (e.g., dynamic contact endpoints)
- Content: Markdown/MDX first, with frontmatter for metadata. Images optimized at build time
- Deployment: Automated CI/CD to a CDN-backed host (Vercel, Netlify, Cloudflare Pages, or GitHub Pages)

### High-level data flow

1. Source content lives in `content/` as Markdown/MDX plus images in `public/` (or `content/images/`)
2. Build step transforms content to HTML (and JSON where needed) using a pipeline (remark/rehype or framework-native transformers)
3. Pages are statically generated into `dist/.output` and deployed to an edge CDN
4. Requests are served from the CDN; optional serverless functions handle forms or other dynamic tasks

---

## Directory structure (typical)

```
/src/
  pages/              # Route-based pages (or `app/` in some frameworks)
  components/         # Reusable UI components
  styles/             # Global styles, variables, Tailwind config (if used)
  lib/                # Utilities (date formatting, SEO helpers, content pipeline)
  contentlayer/       # Optional: content typing/pipeline config (Astro/Next alternatives)
/content/             # Markdown/MDX posts and page content
/public/              # Static assets (images, fonts, favicon)
/scripts/             # Local scripts (image optimization, link checking)
```

Notes:
- In Astro/Eleventy, routes may be file-based under `src/pages/`.
- In Next.js, either `app/` (App Router) or `pages/` (Pages Router) is used.
- If a CMS is used later, `lib/cms/` typically contains adapters.

---

## Rendering model

- Static Site Generation (SSG): Default for posts/pages; fastest delivery and best caching
- Incremental Static Regeneration (ISR) or on-demand rebuilds: Optional for frequent updates without full redeploys
- Server-Side Rendering (SSR): Only for truly dynamic pages (rare for a personal site)
- Client-Side Rendering (CSR): Kept minimal; used for progressive enhancement (e.g., theme toggle)

---

## Routing

- File-based routing maps files to URLs:
  - `/` → `src/pages/index.*`
  - `/about` → `src/pages/about.*`
  - `/projects` → `src/pages/projects.*`
  - `/writing` or `/blog` → lists posts sourced from `content/posts/*.md*`
  - `/writing/[slug]` → post detail, statically generated from content frontmatter
- 404 and error pages are included (`src/pages/404.*` and framework-specific error boundaries)

---

## Content pipeline

- Source format: Markdown/MDX with frontmatter:
  - `title` (string), `description` (string), `date` (ISO), `updated` (ISO, optional), `tags` (array), `draft` (boolean), `cover` (path)
- Tools: remark/rehype plugins for headings, code highlighting, images, external link handling
- Images: Built-time optimization via framework (e.g., Next Image) or a script in `scripts/`
- Output: HTML for pages, RSS/Atom/JSON feed for posts (optional)

### Example frontmatter

```markdown
---
title: "Building a Minimal, Fast Personal Website"
description: "Principles, stack choices, and the tradeoffs involved."
date: 2024-12-14
tags: [architecture, personal-site]
cover: /images/personal-site-cover.jpg
---
```

---

## Styling strategy

Options (choose one):
- Tailwind CSS: Utility-first, fast iteration, consistent spacing/typography
- CSS Modules: Co-located styles with components; great for small sites
- Vanilla Extract or Styled Components: Type-safe or CSS-in-JS if preferred

Recommendations:
- Define a small design token set (colors, spacing, typography scale)
- Implement a light/dark theme toggle via `prefers-color-scheme` with a small client script to avoid FOUC

---

## State management

- Keep state minimal: theme preference, simple UI toggles
- Prefer local component state; avoid global state libraries unless necessary

---

## Accessibility and SEO

- Accessibility: Semantic HTML, focus management, color contrast, keyboard navigation
- SEO: Proper title/meta tags, OpenGraph/Twitter tags, canonical URLs, sitemap.xml, robots.txt
- Social embeds and link previews validated via platform validators

---

## Utilities and helpers (`src/lib/`)

- `date.ts`: format and parse dates, reading time calculation
- `seo.tsx`: helper to compose head/meta tags for pages
- `content.ts`: load/transform content, build indexes (by tag, by date)
- `images.ts`: centralized image helpers (sizes, responsive sources)

---

## Configuration and environment

- `site.config.(ts|js)`: Site-wide settings (site name, base URL, nav links, social links)
- `.env*`: Environment variables for analytics keys, contact form endpoints, etc.
- `robots.txt` and `sitemap.xml` generated at build or statically provided

---

## Code tour (when code is present)

This section describes the responsibilities you will commonly find in this project once application code is added. If your repository already contains similar files, this will help you map them quickly.

- `src/pages/index.*`: Home page layout, recent posts/projects, prominent CTA
- `src/pages/about.*`: Profile, skills, experience, photo
- `src/pages/projects.*`: Grid/list of projects with cards linking to details or external repos
- `src/pages/writing/index.*`: Blog index with filters (by tag) and pagination (optional)
- `src/pages/writing/[slug].*`: Post template rendering MD/MDX content and metadata
- `src/components/Layout.*`: Shared page shell (header, footer, metadata)
- `src/components/Header.*`: Site navigation with active link styling and mobile menu
- `src/components/Footer.*`: Footer with social links and copyright
- `src/components/Card.*`: Generic card used by projects/posts
- `src/components/Callout.*`: Highlight boxes for important notes
- `src/components/ThemeToggle.*`: Light/dark theme switcher with accessible button
- `src/lib/content.*`: Content loading functions and type definitions
- `src/lib/seo.*`: Head tags and structured data helpers
- `src/styles/global.*`: Base styles, CSS variables, typography scale

---

## Error handling and logging

- Use framework-native error boundaries for render failures
- Log unexpected client errors to the console in development; consider a lightweight monitoring service in production
- Serverless/contact errors should return helpful status codes and be retried on the client only when appropriate

---

## Testing

- Unit tests: Component logic and utilities (e.g., date formatting)
- Integration tests: Page rendering with sample content
- E2E tests: Critical paths (home loads, posts render, links work) via Playwright/Cypress

---

## Performance

- Budgets: LCP < 2.5s on 3G/slow 4G, CLS < 0.1, TBT < 200ms
- Techniques: Static generation, image optimization, code-splitting, prefetching, font loading strategy, small JS footprint
- Monitoring: Lighthouse CI or Web Vitals, track regressions in CI

---

## Security and privacy

- No PII stored; contact form submissions sent to email or serverless handler
- Use CSP headers where possible; avoid inline scripts unless hashed
- Respect Do Not Track; keep analytics privacy-friendly (e.g., Plausible)

---

## Internationalization (optional)

- If needed, use a folder or domain-based strategy (`/en`, `/es`) and a simple translation pipeline

---

## Decision log (ADR summary)

- Prefer SSG with optional ISR for simplicity and performance
- Keep dependencies minimal; use utilities over frameworks when appropriate
- Encode site configuration in a single `site.config` file to keep concerns centralized