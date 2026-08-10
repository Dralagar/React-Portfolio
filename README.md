# React Portfolio Repository

Two independent applications live side by side in this repository.

| Directory | App | Stack | Run |
|---|---|---|---|
| [`react-router/`](./react-router) | George's personal portfolio | React 18 + Vite | `cd react-router && npm install && npm run dev` |
| [`reactnowdev-website/`](./reactnowdev-website) | React Now Dev corporate website | Next.js 16 (App Router), TypeScript, Tailwind CSS v4 | `cd reactnowdev-website && npm install && npm run dev` |

Each app has its own `package.json` and is installed, built, and deployed
separately. See [`reactnowdev-website/README.md`](./reactnowdev-website/README.md)
for the corporate site's content model, brand tokens, and deployment notes.

## Deploying the corporate website

Set the project root directory to `reactnowdev-website` in Vercel/Netlify (or
run `npm run build && npm run start` from that directory on a Node host), and
set `NEXT_PUBLIC_SITE_URL` to the live domain so `/sitemap.xml` and
`/robots.txt` emit absolute URLs.
