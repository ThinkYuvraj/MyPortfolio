# System Architecture - Yuvraj Singh Portfolio

## 1. Overview

This document describes the software architecture, design patterns, component hierarchy, styling rules, and layout responsive strategies used in the **Yuvraj Singh Developer Portfolio** web application.

The application is a high-performance, single-page web application (SPA) built using modern web development practices, focusing on rich aesthetics, interactive glassmorphism design, fluid animations, and strict mobile responsive layouts.

---

## 2. Technology Stack

### Core Frameworks & Libraries
- **Frontend Framework**: React 19 (`react` ^19.2.8, `react-dom` ^19.2.8)
- **Build Tool & Dev Server**: Vite (`vite` ^8.0.16) with `@vitejs/plugin-react`
- **Styling**: Tailwind CSS (`tailwindcss` ^3.4.19), PostCSS (`postcss` ^8.5.15), Autoprefixer
- **Animations & Effects**:
  - **GSAP (GreenSock Animation Platform)** (`gsap` ^3.15.0) & ScrollTrigger for scroll-based entrance animations.
  - **HTML5 Canvas** for real-time reactive background particle physics network.
  - **React Parallax Tilt** (`react-parallax-tilt` ^1.7.337) for 3D card tilt & glare micro-interactions.
  - **Font Awesome 6** for iconography.

---

## 3. High-Level Architecture & Component Map

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              App.jsx                                    │
│  (Main Root Wrapper: overflow-x-hidden, w-full, max-w-full, relative)   │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
 ┌─────────────────────────────────┼─────────────────────────────────┐
 │                                 │                                 │
 ▼                                 ▼                                 ▼
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│ CanvasBackground │     │      Navbar      │     │       Hero       │
│ (Fixed Canvas)   │     │ (Fixed Glass Nav)│     │ (Intro & Title)  │
└──────────────────┘     └──────────────────┘     └──────────────────┘
                                                                     │
 ┌───────────────────────────────────────────────────────────────────┘
 │
 ├───────► ┌──────────────────┐
 │         │      About       │ (Bio & Tech Pillars)
 │         └──────────────────┘
 │
 ├───────► ┌──────────────────┐
 │         │      Skills      │ (Interactive Search & Bento Grid)
 │         └──────────────────┘
 │
 ├───────► ┌──────────────────┐
 │         │     Projects     │ (Software & AI Showcase)
 │         └──────────────────┘
 │
 ├───────► ┌──────────────────┐
 │         │    FuturePath    │ (Target Roles & Interactive Role Matcher)
 │         └──────────────────┘
 │
 ├───────► ┌──────────────────┐
 │         │    CareerPath    │ (Timeline, Experience & Education)
 │         └──────────────────┘
 │
 ├───────► ┌──────────────────┐
 │         │     Contact      │ (Direct Reachout & Mailto Handler)
 │         └──────────────────┘
 │
 └───────► ┌──────────────────┐
           │      Footer      │ (Copyright & Footer links)
           └──────────────────┘
```

---

## 4. Key Component Responsibilities

| Component | Responsibility | Key Features |
| :--- | :--- | :--- |
| `CanvasBackground.jsx` | Renders fixed HTML5 particle grid background | Mouse interaction radius, canvas resize handler, frame loop cleanup |
| `Navbar.jsx` | Fixed navigation bar and mobile drawer | Glassmorphism container, responsive toggle state, offscreen visibility guard (`pointer-events-none invisible`) |
| `Hero.jsx` | Landing header & title section | Responsive main heading font sizes (`text-[2.25rem] ... 2xl:text-[9.375rem]`), status pill, dynamic role loop |
| `About.jsx` | Background and professional profile | Photo card with floating glass badge (`right-0 sm:-right-2`), tech pillars grid |
| `Skills.jsx` | Technical skills inventory | Real-time search filter, category icons, 3D tilt cards |
| `Projects.jsx` | Project showcase | Bento grid cards, live demo and GitHub repository links, Medium blog link |
| `FuturePath.jsx` | Target engineering roles & milestones | Interactive track selector, recruiter executive digest, day-one contribution list |
| `CareerPath.jsx` | Work experience & education timeline | Dual-column timeline layout, IEEE publication highlight, certifications |
| `Contact.jsx` | Interactive contact section | One-click clipboard copy (Email/Phone), dynamic mailto form dispatch |
| `ResumeModal.jsx` | Embedded Google Drive resume viewer | Modal dialog, backdrop blur, download & open actions |

---

## 5. Mobile Responsiveness & Layout Guard Architecture

### Horizontal Scroll Prevention Rules
To guarantee zero horizontal scrolling on mobile viewports (down to 320px screen width), the architecture enforces multi-level overflow containment:

1. **Document Level Containment (`index.html` & `index.css`)**:
   - `html` and `body` set to `max-width: 100vw; overflow-x: hidden; width: 100%`.
   - Root mount `#root` set to `max-width: 100%; overflow-x: hidden; relative`.

2. **App Main Wrapper (`App.jsx`)**:
   - Encloses all section components inside `<div className="w-full max-w-full overflow-x-hidden relative min-h-screen">`.

3. **Responsive Typography Guard (`Hero.jsx`)**:
   - Main title uses fluid breakpoints (`text-[2.25rem] min-[380px]:text-[2.75rem] min-[480px]:text-[3.25rem] sm:text-[3.625rem]`) to fit narrow mobile viewports without forcing horizontal overflow.

4. **Offscreen Fixed Drawer Containment (`Navbar.jsx`)**:
   - Closed drawer state uses `translate-x-full opacity-0 pointer-events-none invisible` to prevent mobile web browsers from calculating viewport expansion for offscreen translated elements.

---

## 6. Styling System & Theme Tokens

Tailwind CSS configuration (`tailwind.config.js`) extends theme tokens:
- **Primary Color**: `#a855f7` (Purple accent)
- **Backgrounds**: `#030303` (Deep Obsidian), `#050505` (Card Dark)
- **Glassmorphism Utilities**: Custom backdrop blur (`blur(24px)`), semi-transparent borders (`rgba(168, 85, 247, 0.15)`), subtle gradient overlays.
