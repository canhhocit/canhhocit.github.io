# Pham Huu Canh — Personal Portfolio

> A minimalist, production-ready personal portfolio website for **Pham Huu Canh**, Full-Stack Developer.

Live Website: **[https://canhhocit.github.io/](https://canhhocit.github.io/)**

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/) (configured with `base: '/'` for GitHub Pages user site)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand marks
- **Hosting & CI/CD**: [GitHub Pages](https://pages.github.com/) deployed via [GitHub Actions](https://github.com/features/actions)

---

## 📂 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom HC monogram SVG favicon
│   └── 404.html                # GitHub Pages 404 fallback
├── src/
│   ├── components/
│   │   ├── BrandIcons.tsx      # SVG icons for GitHub & LinkedIn
│   │   ├── Footer.tsx          # Minimal footer with dynamic year & back-to-top
│   │   ├── Header.tsx          # Sticky header, monogram, nav spy & mobile menu
│   │   ├── SectionHeading.tsx  # Reusable section heading with eyebrow
│   │   └── SocialLinks.tsx     # Accessible social & mail buttons
│   ├── data/
│   │   └── portfolio.ts        # Typed portfolio information & copy
│   ├── sections/
│   │   ├── About.tsx           # Bio narrative & 3 focus areas
│   │   ├── CareerFocus.tsx     # Full-stack vision & SDLC lifecycle visual
│   │   ├── Contact.tsx         # Direct email, copy-to-clipboard, socials
│   │   ├── Experience.tsx      # Software Engineering Intern timeline card
│   │   ├── Hero.tsx            # Hero typography, badge, CTAs & monogram card
│   │   └── Skills.tsx          # Categorized technical skill tags
│   ├── App.tsx                 # Root layout & scroll position spy
│   ├── index.css               # Tailwind v4 import & theme variables
│   └── main.tsx                # React root mount
├── index.html                  # SEO metadata, Open Graph, & font preload
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration with base: '/'
```

---

## 🚀 Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open `http://localhost:5173` to view the website in your browser.

### 3. Build for production
```bash
npm run build
```

The production output will be generated inside the `dist/` directory.

### 4. Preview the production build
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment Guide

This portfolio is configured for deployment to **`https://github.com/canhhocit/canhhocit.github.io`** as a GitHub Pages user site.

### Step 1: Initialize Git and Push to GitHub

```bash
git init
git add .
git commit -m "Initial release of portfolio website"
git branch -M main
git remote add origin https://github.com/canhhocit/canhhocit.github.io.git
git push -u origin main
```

*(If the remote is already connected, simply run `git add .`, `git commit -m "..."`, and `git push origin main`)*

### Step 2: Configure GitHub Repository Settings

1. On GitHub, navigate to your repository: `https://github.com/canhhocit/canhhocit.github.io`
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - Change **Source** from *Deploy from a branch* to **GitHub Actions**.
4. The workflow `.github/workflows/deploy.yml` will automatically trigger on every push to `main` (or via manual workflow dispatch) and deploy the website to `https://canhhocit.github.io/`.

---

## 🔒 Privacy & Data Policy

All published content conforms strictly to privacy requirements:
- Displays only confirmed personal & professional details.
- No confidential company information or invented statistics.
- Clean presentation without fake skill proficiency metrics.
