# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Valour (valour.ai) — a technology company offering custom software, AI solutions, and infrastructure. Deployed via GitHub Pages using the `CNAME` file.

## Development

No build system or package manager. Open any HTML file directly in a browser, or use a local static server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

## Architecture

**Pages:**
- `index.html` — Homepage (self-contained: all CSS is inline in a `<style>` block)
- `products.html`, `services.html`, `blog.html`, `article.html` — Inner pages (reference `assets/style.css` for shared styles)
- `r_index.html` — Alternate/older homepage variant

**Shared assets (`assets/`):**
- `style.css` — Shared CSS for inner pages; uses a cyan/blue palette (`--primary-color: #00d9ff`)
- `script.js` — Google Analytics (G-RHV6RSN0BY) and contact form handler

**Design system split:** `index.html` uses a navy palette (`--primary: #1e3a5f`, `--accent: #3b82f6`), while inner pages via `assets/style.css` use a darker cyan palette. When styling changes need to be consistent across all pages, both `index.html`'s inline `<style>` block and `assets/style.css` must be updated.

**External dependencies** (CDN, no local install):
- Font Awesome 6.4.0
- Google Fonts (Inter)
