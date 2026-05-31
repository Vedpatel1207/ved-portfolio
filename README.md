# Ved Patel — Portfolio

A single-page personal portfolio inspired by [bhavyramani.me](https://www.bhavyramani.me/), built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Sections

1. Hero
2. About
3. Experience (tabbed)
4. Technical Skills
5. Achievements & Certifications
6. Education
7. Contact

## Getting Started

```bash
cd ved-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- Content lives inside `components/*.tsx` — edit text directly.
- Drop your resume PDF as `public/Ved_Resume_Data_Engineer_Azure.pdf` so the "Resume" nav button works.
- Optional: replace the `VP` initials block in `components/Hero.tsx` with `<img src="/profile.jpg" />` placed under `public/`.

## Build & Deploy

```bash
npm run build
npm start
```

Recommended host: **Vercel** (one-click deploy for Next.js).

## Tech

- Next.js 14, React 18, TypeScript 5
- Tailwind CSS 3
- Inter + JetBrains Mono fonts (via Google Fonts)
