# Vibha & Kaustubh — Wedding Celebrations

A React + TypeScript + Vite photo gallery site for the Haldi & Mehndi and Wedding celebrations (February 26, 2023), with ceremony proceedings from the wedding program.

## Features

- **Landing page** themed after the peacock wedding ceremony invitation
- **Haldi & Mehndi** gallery with sunflower/turmeric hero image
- **Wedding** gallery with blush/rose welcome hero image
- **Ceremony proceedings** timeline scraped from the wedding program PDF
- **Light / dark theme** and **4 languages** (English, Hindi, Punjabi, Bengali)
- Lazy-loaded gallery with lightbox, swipe navigation, download, and load progress

## Setup

```bash
npm install
npm run dev
```

Photos are synced from your Desktop folders on every `dev`, `start`, and `build`:

- `~/Desktop/Haldi` → `public/album/haldi/`
- `~/Desktop/Wedding` → `public/album/wedding/`

Thumbnails are generated as WebP via `sharp`. Album output is gitignored.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Sync albums + start Vite dev server |
| `npm run build` | Sync albums + production build |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Tech

React 19, Vite 6, styled-components (`styledWithConfig` + `data-component-id` on every component), TypeScript.
