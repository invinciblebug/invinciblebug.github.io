# [invinciblebug.github.io](https://invinciblebug.github.io)

![Astro](https://img.shields.io/badge/Astro-v7.1.6-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-brightgreen)
[![GitHub Issues](https://img.shields.io/github/issues/invinciblebug/invinciblebug.github.io?style=flat-square&color=red)](https://github.com/invinciblebug/invinciblebug.github.io/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/invinciblebug/invinciblebug.github.io?style=flat-square&color=blue)](https://github.com/invinciblebug/invinciblebug.github.io/pulls)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/invinciblebug/invinciblebug.github.io?style=flat-square&color=orange)](https://github.com/invinciblebug/invinciblebug.github.io/commits/main)

Personal portfolio and blog by Invincible Bug. Built with Astro, Tailwind CSS, and deployed to GitHub Pages.

## Features

- Landing page with avatar, tagline, and links
- Projects page (fetches from GitHub API)
- Blog with Markdoc content
- Dark/light theme toggle
- RSS feed
- SEO optimized (meta tags, Open Graph, Twitter Cards, Schema.org)
- Responsive design
- Swup page transitions

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Markdoc](https://markdoc.dev/) - Content authoring
- [Swup](https://swup.js.org/) - Page transitions
- [nanostores](https://github.com/nanostores/nanostores) - State management
- [astro-navbar](https://github.com/surjithctly/astro-navbar) - Navigation component

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
src/
├── components/       # Astro components
├── content/blog/     # Blog posts (Markdoc)
├── layouts/          # Page layouts
├── lib/              # Utilities and constants
├── pages/            # Route pages
└── styles/           # Global styles
```

## Blog Posts

Blog posts are stored as `.md` files in `src/content/blog/`. Each post requires:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: 2026-08-02
tags: ["tag1", "tag2"]
---
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

## License

MIT

by Invincible Bug
