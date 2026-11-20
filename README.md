# Ofgeha Gelana: portfolio

Personal site for Ofgeha Gelana, AI/ML Engineer & Researcher.

Built with React 18, TypeScript, Vite and Tailwind CSS. It is a single page with no router and no animation library.

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
- **Featured projects** are case studies: `summary`, `role`, `problem`, `contributions` (approach) and `results`.
- **Placeholders:** any value starting with `[ADD` renders as a dashed amber marker on the page. Search for `[ADD` and replace each with a real value, or delete the line. Never estimate a metric.
- Fields marked `review:` need confirmation before they are treated as final. Search for `review:` to find them.

## Structure

```
src/
  content/site.ts          # single source of truth for content
  components/
    layout/                # Nav (desktop + mobile sheet), Footer
    sections/              # Hero, About, Experience, Projects, Skills, Credentials, Writing, Contact
    figures/               # SVG project schematics (shown inside project details)
    ui/                    # Section, Details/Disclosure, Reveal, Button, TextLink, DashList, Placeholder, icons
  hooks/                   # theme, active section, scroll state
public/                    # CV, fonts, favicon, OG image, 404 page (robots + sitemap are generated at build)
```

## Design notes

- **Colour:** dark and light themes; the system setting is used until the visitor picks one. Tokens are CSS variables in `src/index.css`, exposed to Tailwind as `bg`, `surface`, `fg`, `muted`, `subtle`, `accent`. All text tokens meet WCAG AA (4.5:1) in both themes.
- **Type scale** (`tailwind.config.js`): `text-display` (hero), `text-title` (h2), `text-heading` (h3), `text-lead`, then Tailwind's `base`/`sm`/`xs`, and `text-micro` for chips. Avoid arbitrary sizes.
- **Components** (`src/index.css` + `src/components/ui`): `.btn` + `.btn-primary`/`.btn-secondary`, `.card`, `.chip`, `.eyebrow`, `.link`, `.icon-btn`; `ButtonLink`, `TextLink`, `DashList`, `Disclosure`, `Details`, `Reveal`, `Section`.
- **Layout:** `max-w-6xl` page; from `lg` up each section's heading sits in a sticky left rail.
- **Fonts:** Geist and Geist Mono, self-hosted from `public/fonts` (SIL OFL 1.1) with the main face preloaded.
- **Motion:** CSS only, short, runs once. `prefers-reduced-motion` disables it.

## Deploy (free on GitHub Pages)

The site lives at **https://iamofgeha.github.io**.

One-time setup:
1. Create a free GitHub organisation named **`iamofgeha`** (github.com → **+ → New organization → Free**).
2. Put this code in a repository in that organisation named exactly **`iamofgeha.github.io`**.
3. In that repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main`. `.github/workflows/deploy.yml` lints, builds and publishes. No secrets are needed.

The site's address is set in **`.env`** (`VITE_SITE_URL`). It drives the canonical URL, Open Graph tags, `robots.txt` and `sitemap.xml`.
If you register a custom domain later (for example `iamofgeha.com`), add it under **Settings → Pages → Custom domain** and change that one line.
