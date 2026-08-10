# Dralagar George — Portfolio

Personal portfolio built with React 18, Vite and React Bootstrap.

Pages: Home (`/`), Portfolio (`/Portfolio`), Resume (`/CV`), Contact (`/Contact`).
Unknown paths redirect to Home.

## Getting started

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

## Deployment

The app is a single page application using the HTML5 history API, so the host
must rewrite unknown paths to `index.html`. `public/_redirects` does this on
Netlify; other hosts need their own equivalent rewrite rule.
