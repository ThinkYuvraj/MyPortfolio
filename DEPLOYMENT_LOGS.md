# Deployment Logs & Production Verification Guide

## 1. Production Build Logs

```
> yuvraj-singh-portfolio@1.0.0 build
> vite build

vite v8.3.2 building client environment for production...
transforming...
✓ 34 modules transformed.
rendering chunks...
computing gzip size...

dist/index.html                   0.94 kB │ gzip:   0.53 kB
dist/assets/index-DGyENaGw.css   32.51 kB │ gzip:   6.74 kB
dist/assets/index-DZ8b0s9s.js   406.87 kB │ gzip: 131.14 kB

✓ built in 2.69s
STATUS: BUILD SUCCESSFUL (Exit Code 0)
```

---

## 2. Deployment Artifact Summary

| Output File | Size | Gzip Size | Description |
| :--- | :--- | :--- | :--- |
| `dist/index.html` | 0.94 kB | 0.53 kB | Production HTML with preloaded fonts, icons & entry script |
| `dist/assets/index-DGyENaGw.css` | 32.51 kB | 6.74 kB | Minified Tailwind CSS + Glassmorphism rules |
| `dist/assets/index-DZ8b0s9s.js` | 406.87 kB | 131.14 kB | Bundled React 19, GSAP, Parallax Tilt & Application Logic |

---

## 3. Platform Deployment Guides

### Option A: Deploy to Vercel (Recommended)
1. Install Vercel CLI or import GitHub repository into Vercel Dashboard:
   ```bash
   npx vercel
   ```
2. Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Option B: Deploy to Netlify
1. Connect repository or run via Netlify CLI:
   ```bash
   npx netlify-cli deploy --prod
   ```
2. Build Settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

### Option C: Deploy to GitHub Pages
1. Install `gh-pages` helper package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add script to `package.json`:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Execute deployment:
   ```bash
   npm run build && npm run deploy
   ```

---

## 4. Mobile Responsiveness & Viewport Quality Checklist

- [x] Zero horizontal scrollbars on mobile screens (tested from 320px up to 1440px+).
- [x] Strict `overflow-x: hidden` enforcement on `html`, `body`, and `#root`.
- [x] Responsive fluid text size for Hero heading (`text-[2.25rem] ... 2xl:text-[9.375rem]`).
- [x] Mobile drawer hidden with `pointer-events-none opacity-0 invisible` when inactive.
- [x] Dynamic text truncation on long role strings (`max-w-[80vw] truncate`).
- [x] Card tilt and background canvas contained within screen width.
