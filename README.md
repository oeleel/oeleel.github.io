# Personal Website

A clear, maintainable personal website and portfolio. This repository contains the content, configuration, and (when added) the application code used to build and deploy your personal site.

This README gives you the high-level context to understand what the project is for, how it is organized, and how to get productive quickly. Deeper, day-to-day details live in the docs referenced below.

---

## What this project is

- A home for your online presence: about, projects, writing, contact, and more
- Designed to be fast, accessible, SEO-friendly, and easy to maintain
- Flexible about implementation details (static HTML/CSS/JS, a static-site generator, or a modern app framework)

## Who this is for

- You, the site owner
- Occasional contributors helping with content or features
- New maintainers joining later who need to understand the structure, conventions, and operations quickly

---

## Quick start

Because this repository is intentionally technology-agnostic right now, there are three common ways this project may be set up. Use the one that matches your codebase once it exists here. If the code is not yet committed, start with the "No-code yet" path to scaffold your environment.

1) Static site (pure HTML/CSS/JS)
- Open `index.html` directly in a browser, or serve locally with:
  - Python: `python3 -m http.server 5173`
  - Node: `npx http-server -p 5173 .`

2) Node-based app (e.g., Next.js, Astro, Vite, SvelteKit)
- Ensure Node LTS is installed (see `docs/development.md` for versions)
- Install deps: `npm install` (or `pnpm install` / `yarn install`)
- Run dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

3) Containerized
- Build image: `docker build -t personal-website .`
- Run locally: `docker run --rm -p 5173:5173 personal-website`

No-code yet?
- See `docs/development.md` for a step-by-step scaffold using a modern stack and initial structure

---

## Repository structure

This repository will typically evolve into something like the following (docs first; app code comes later):

```
/README.md                # You are here — high-level overview and index
/docs/                    # In-depth documentation for architecture, development, deployment, etc.
  architecture.md         # System and code architecture, decisions, and conventions
  development.md          # Setup, scripts, local dev, testing, and standards
  deployment.md           # CI/CD, hosting, environment variables, and operations
  site-guide.md           # Content, SEO, accessibility, and performance practices
  troubleshooting.md      # Common issues and how to resolve them
/CHANGELOG.md             # Notable changes, following Keep a Changelog
/ROADMAP.md               # Planned features and milestones
/CONTRIBUTING.md          # How to propose changes and open PRs
/CODE_OF_CONDUCT.md       # Community expectations and reporting

# Typical app files once code is added
/src/                     # Application code (pages, components, styles)
/public/                  # Static assets (images, fonts, favicon)
/scripts/                 # Local tooling and automation
```

---

## High-level overview

- Purpose: Showcase who you are and what you do, with a focus on clarity and speed
- Principles: Accessible by default, content-first, performance-conscious, minimal complexity, automated deployment
- Scope: Public website (no user login required). Optional contact form and analytics
- Tech: Implementation-neutral. Recommended options include static-site generators (Astro, Eleventy) or app frameworks (Next.js) depending on needs

### Core capabilities

- Pages: Home, About, Projects/Work, Writing/Blog, Contact
- Components: Header/Nav, Footer, Card, Callout, Project List, Post List, MD/MDX renderer
- Content: Markdown/MDX or CMS-backed (e.g., Git-based CMS); images optimized; metadata for social sharing
- Tooling: Prettier, ESLint/Stylelint, TypeScript (if applicable), Husky + lint-staged (optional)
- Automation: Build and deploy on push (e.g., Vercel, Netlify, Cloudflare Pages, GitHub Pages)

### Non-goals

- Full-blown CMS with complex workflows
- Heavy runtime logic or server-side user state

---

## Day-1 onboarding path (recommended)

1. Read this README, then skim the docs below to know where things live
2. Set up local environment (see `docs/development.md`)
3. Run the site locally and click through pages
4. Read `docs/architecture.md` to understand decisions and conventions
5. Make a small change (e.g., copy edit), submit a PR using `CONTRIBUTING.md`
6. Review deployment flow in `docs/deployment.md`
7. Explore `docs/site-guide.md` to learn SEO and accessibility practices

By the end of the day, you should know how to:
- Run the project locally
- Navigate code and content structure
- Add or modify a page/post
- Open a PR with checks passing
- Understand how changes get deployed

---

## Documentation index

- Architecture and code tour: `docs/architecture.md`
- Development setup and workflow: `docs/development.md`
- Deployment and operations: `docs/deployment.md`
- Content, SEO, accessibility, performance: `docs/site-guide.md`
- Troubleshooting and FAQ: `docs/troubleshooting.md`
- Contributing guidelines: `CONTRIBUTING.md`
- Code of Conduct: `CODE_OF_CONDUCT.md`
- Roadmap: `ROADMAP.md`
- Changelog: `CHANGELOG.md`

---

## Status

- Repository initialized with documentation scaffolding
- Application code to be added next. Use `docs/development.md` to scaffold your preferred stack
