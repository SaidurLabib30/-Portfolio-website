# Portfolio (Next.js)

This is your portfolio site, converted into a real Next.js project (Pages Router).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `pages/index.js` — the portfolio page (hero, about, skills, experience, projects, education, contact) with React state powering the section switcher (previously vanilla JS).
- `pages/_app.js` — loads global styles.
- `pages/_document.js` — loads the Google Fonts (JetBrains Mono, Inter).
- `styles/globals.css` — all the original styling.
- `public/profile.png` — your profile photo (extracted from the original inline base64 image).

## Deploy

This is a standard Next.js app, so it deploys directly to Vercel, Netlify, or any Node host:

```bash
vercel
```
