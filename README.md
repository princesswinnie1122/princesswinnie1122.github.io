# Winnie Sheng's personal website

An Astro website with About and CV pages, a sticky profile sidebar, and light/dark themes.

## Run locally

Requires Node.js **22.12.0 or newer**.

```bash
npm ci
npm run dev
```

Open the Local URL printed by Astro (normally http://localhost:4321).

To build and preview the static site:

```bash
npm run build
npm run preview
```

The build is written to `dist/`. There are no lint or typecheck scripts configured.

## Update your content

| Content | Where to edit |
| --- | --- |
| About text, name, institution | `src/content/bio.md` |
| Embedded CV PDF URL | `src/content/cv.md` |
| Downloadable PDF | `public/cv.pdf` |
| Email and social links | `src/config/social.ts` |
| Site title, description, themes | `src/config/site.ts` |
| Page headings and availability | `src/config/pages.ts` |
| Navigation links | `src/config/navigation.ts` |

The About page is based on the supplied CV. The CV page embeds `public/cv.pdf` directly, so there is no duplicate web CV to maintain.

### Add your portrait

Place your image in `public/`, for example `public/winnie.jpg`, and add `avatar: "winnie.jpg"` to the YAML frontmatter in `src/content/bio.md`. The sidebar omits the image when `avatar` is absent. No placeholder portrait is shown.

### Replace or link your PDF

Replace `public/cv.pdf` with your latest PDF, keeping this value in the YAML frontmatter of `src/content/cv.md`:

```yaml
pdfUrl: "/cv.pdf"
```

The CV page embeds the document using the browser's PDF viewer. Download, print, and zoom controls are provided by that viewer; their availability and appearance depend on the browser. A small **Open PDF in a new tab** link is available beneath the viewer for browsers that do not display embedded PDFs well. No separate download button or duplicate CV text is added to the page.

The PDF is served unchanged, including the contact information in the source document. The HTML pages show email and GitHub but omit the phone number. Remove `pdfUrl` to display “CV coming soon.”

For Google Drive, use a publicly viewable file's embed URL in the form `https://drive.google.com/file/d/FILE_ID/preview` as `pdfUrl`; a regular `/view` sharing link is not the embed URL. Local `public/cv.pdf` is the default and does not depend on Drive permissions.

### Add social profile links

Edit `src/config/social.ts`. GitHub and email are already populated. The Mail entry also supplies the typewriter-style email address in the sidebar. Google Scholar and LinkedIn have `href: ""` placeholders: paste your profile URLs between the quotes. Their icons are visible but inactive until a URL is filled in. Set `isActive: false` to hide an icon. ORCID is omitted.

### Change background and text colors

Edit `src/config/themes.ts`. The selected palettes are `light_default` (light mode) and `dark_midnight` (dark mode). In each palette:

- `background`: page background
- `foreground`: main text color
- `accent`: links on hover and visual accents
- `muted`: secondary text
- `border`: borders and dividers
- `surface`: secondary surfaces

Use hex values such as `"#ffffff"` for white or `"#111827"` for dark text. For example, set `light_default.background` to `"#ffffff"` and `light_default.foreground` to `"#222222"`. Keep text and background colors readable together.

Select different palettes using `THEME_CONFIG.themeLight` and `THEME_CONFIG.themeDark` in `src/config/site.ts`. While `npm run dev` is running, saved changes update the local site. These colors style the website around the PDF; the PDF retains the colors in the original document.

## Project structure

```text
public/                 # CV PDF, portrait, favicons, robots.txt
src/assets/             # Icons used by the sidebar and theme toggle
src/components/layout/  # Sidebar, navigation, content wrapper, footer
src/components/ui/      # Shared icon renderer
src/config/             # Site, pages, navigation, socials, themes
src/content/            # bio.md and cv.md
src/layouts/            # Shared page layout
src/pages/              # About, CV, and 404
src/styles/             # Global styles
src/types/              # Configuration and theme types
```

Only About (`/`), CV (`/cv/`), and the 404 page are generated. The template's blog, publications, projects, talks, teaching, tags, RSS, and developer tools have been removed, together with their sample content and supporting code. The sitemap contains About and CV only.

The CV is maintained at `public/cv.pdf`; the identical root-level source copy was removed. Your portrait is kept at `public/winnie.jpg` and can be enabled with the `avatar` frontmatter field above.

The installed `node_modules/` and generated `.astro/` and `dist/` directories are ignored by Git. Keep `node_modules/` for local development; `npm run build` recreates `dist/`.

## Hosting configuration

The site URL is configured for `https://princesswinnie1122.github.io/`, at the domain root. Keep `astro.config.mjs` and `SITE.website` in `src/config/site.ts` aligned if the domain changes.

The existing GitHub Pages workflow deploys pushes to `main` and supports manual runs. Local development and builds do not publish anything.

## Maintenance

Unused RSS, math-rendering, and font dependencies have been removed. This cleanup does not upgrade the remaining dependency versions. Use `npm audit` to review dependency advisories before publishing.

## Template credit

Based on [Academic Portfolio Astro](https://github.com/rubzip/academic-portfolio-astro), using Astro and Tailwind CSS v4. Content stays in Markdown; component styling belongs in `src/styles/global.css` or Tailwind classes.
