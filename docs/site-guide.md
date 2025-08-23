# Site Guide: Content, SEO, Accessibility, Performance

This guide helps you write and structure content, meet accessibility standards, and keep the site fast and search-friendly.

---

## Content strategy

- Audience: Prospective employers, collaborators, and peers
- Voice: Clear, concise, and authentic; prefer active voice
- Information hierarchy: Home → About → Work/Projects → Writing → Contact
- Prioritize clarity over cleverness; use headings and short paragraphs
- Keep timestamps accurate; show updated dates for blog posts when useful

### Pages

- Home: Who you are, what you do, selected highlights, clear CTA
- About: Background, skills, values, brief story, a friendly photo
- Projects/Work: Problem → Approach → Impact; link to code/demo; include role and timeline
- Writing: Posts with summaries; tags for discoverability; consider an RSS feed
- Contact: Simple options—email, links to socials; spam mitigation on forms

### Posts

- One idea per post; descriptive title and summary
- Lead with the takeaway; break up long sections with subheadings
- Include diagrams or screenshots when helpful (optimize images)

---

## SEO best practices

- Metadata: Unique `title` and `description` per page
- Semantic HTML: Use headings in order; only one `<h1>` per page
- URLs: Short, descriptive slugs; avoid dates in slugs unless necessary
- OpenGraph/Twitter: Provide `og:title`, `og:description`, `og:image`, `twitter:card`
- Sitemap and robots: Provide `sitemap.xml` and sensible `robots.txt`
- Canonicals: Set canonical URLs to prevent duplicate content issues
- Internal links: Cross-link related posts and projects
- Structured data: Add JSON-LD for `Person`, `BlogPosting`, `BreadcrumbList` when relevant

Validation:
- Test with search engine validators and social card debuggers

---

## Accessibility checklist

- Keyboard navigation: All interactive elements reachable and operable via keyboard
- Focus states: Visible focus outlines for interactive elements
- Color contrast: Meet WCAG AA
- Labels: Form fields and icons have accessible names/labels
- Alt text: Descriptive `alt` for images; empty `alt` for purely decorative images
- Headings: Logical structure and no skipped levels
- Motion: Respect `prefers-reduced-motion`
- Media: Provide captions or transcripts for videos

Testing:
- Use automated checks (axe, Lighthouse) and manual keyboard testing

---

## Performance practices

- Images: Use modern formats (AVIF/WebP); responsive sizes; lazy loading
- Fonts: Use system fonts or subset self-hosted fonts; `font-display: swap`
- JS: Ship only what is needed; prefer SSG; lazy-load non-critical components
- CSS: Minify; purge unused classes (Tailwind or tooling); inline critical CSS if applicable
- Caching: Long cache for assets with hashes; short for HTML
- Prefetch: Preload critical assets and prefetch next-page links where appropriate

Measurement:
- Use Lighthouse locally and in CI; aim for high scores without gaming metrics

---

## Editorial workflow

- Draft → review → publish
- Run `lint`, `typecheck`, `test`, and a local Lighthouse check before merging
- Keep PRs small and focused; include screenshots for visual changes

---

## Social and sharing

- Provide a consistent preview image style (1200×630)
- Ensure names, roles, and links are current across pages
- Use descriptive link text (avoid "click here")