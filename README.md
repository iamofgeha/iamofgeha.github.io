# Ofgeha Gelana: portfolio

Personal site for Ofgeha Gelana, AI/ML Engineer & Researcher.

Built with React 18, TypeScript, Vite, Tailwind CSS and Framer Motion. It is a single page with no router.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serves dist/
npm run lint
```

## Editing content

All copy, links, projects, experience and writing live in **`src/content/site.ts`**. Components only render that data.

- **New article or LinkedIn post:** add an entry to the top of `writing`.
- **New project:** add it to `builds`, or to `featured` if it needs a schematic figure (see `src/components/figures/ProjectFigure.tsx`).
- Fields marked `review:` need confirmation before they are treated as final. Search for `review:` to find them.

## Structure

```
src/
  content/site.ts          # single source of truth for content
  components/
    layout/                # Nav (desktop + mobile sheet), Footer
    sections/              # Hero, About, Experience, Projects, Research, Writing, Contact
    figures/               # SVG schematics (hero signal graph, project figures)
    ui/                    # Section shell, Reveal, Button, brand icons
  hooks/                   # theme, active section, scroll state
public/                    # CV, favicon, OG image, robots, sitemap
```

## Design notes

- Dark-first with a light theme. Colours are CSS variables in `src/index.css`, exposed to Tailwind as `bg`, `surface`, `fg`, `muted`, `accent` and so on.
- Type: Geist (UI), Instrument Serif (italic accents), Geist Mono (labels).
- Motion is short and runs once. `prefers-reduced-motion` is respected through `MotionConfig` and CSS.

## Deploy (free on GitHub Pages)

The site lives at **https://iamofgeha.github.io**.

One-time setup:
1. Create a free GitHub organisation named **`iamofgeha`** (github.com → **+ → New organization → Free**).
2. Put this code in a repository in that organisation named exactly **`iamofgeha.github.io`**.
3. In that repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main`. `.github/workflows/deploy.yml` lints, builds and publishes. No secrets are needed.

The site's address is set in **`.env`** (`VITE_SITE_URL`). It drives the canonical URL, Open Graph tags, `robots.txt` and `sitemap.xml`.
If you register a custom domain later (for example `iamofgeha.com`), add it under **Settings → Pages → Custom domain** and change that one line.
