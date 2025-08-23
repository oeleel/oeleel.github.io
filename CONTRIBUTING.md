# Contributing

Thanks for your interest in contributing! This document explains how to propose changes, open pull requests, and follow project conventions.

---

## Code of Conduct

This project follows a Code of Conduct. By participating, you are expected to uphold it. See `CODE_OF_CONDUCT.md`.

---

## Ways to contribute

- Report bugs and issues
- Improve documentation
- Add or refine features
- Fix layout/accessibility/performance issues

---

## Development workflow

1. Fork the repo and create a feature branch:
```bash
git checkout -b feat/short-description
```

2. Install dependencies and run the dev server.

3. Make focused changes with clear commit messages.

4. Run checks locally:
```bash
npm run format && npm run lint && npm run typecheck && npm test && npm run build
```

5. Push your branch and open a Pull Request.

---

## Pull Request checklist

- The PR title is clear and descriptive
- The PR includes a short summary of changes and context
- Screenshots/GIFs are attached for visual changes
- Docs updated if behavior or usage changes
- All checks pass (lint, types, tests, build)

---

## Coding standards

- Keep components small and focused
- Prefer composition over deep prop drilling
- Write accessible, semantic HTML
- Ensure good names for variables, functions, and components
- Avoid unnecessary dependencies

---

## Issue reporting

Include:
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, browser)
- Logs or screenshots where helpful

---

## Release and changelog

- Changes are recorded in `CHANGELOG.md` following Keep a Changelog format
- Use semantic versioning if you publish packages (not typical for this site)