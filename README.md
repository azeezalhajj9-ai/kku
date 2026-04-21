# KKU Pages

Premium static rebuild of the original `isssm/kku` site using Astro for GitHub Pages.

## What changed

- Replaced the flat HTML site with reusable Astro layouts and components.
- Preserved the original topic coverage: plans, calendar, GPA, grades, money countdown, advice, absence calculator, transfers, honors, master's requirements, deanship contacts, apology workflow, and Evolve links.
- Removed PHP-based visitor tracking so the site is fully GitHub Pages compatible.
- Added a clearer information architecture with a guided homepage, tools section, policies section, search, callouts, metadata, and related navigation.
- Improved mobile behavior, typography, spacing, focus states, skip links, and reduced-motion support.

## Project structure

```text
public/
  images/
  icons/
  favicon.svg
src/
  components/
  data/
  layouts/
  pages/
  styles/
.github/workflows/deploy.yml
astro.config.mjs
package.json
```

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## GitHub Pages

This repo is configured for the project site path `/kku/` under `https://isssm.github.io`.

- The Astro `base` is set to `/kku/`.
- The workflow in `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages.

If the repository name changes, update `base` in [astro.config.mjs](/C:/Users/pc/Desktop/UNI-PROJECTS/kku/astro.config.mjs:1).

## Notes

- Image-based legacy references such as the academic calendar, deanship contacts, and apology workflow were preserved as static assets inside `public/images/`.
- The final exam page keeps the old dates from the legacy site only as archived references and does not present them as current dates.
- The site is intended to be deployed through GitHub Pages using the repository workflow.
