# Liza Moody - Portfolio

A simple, responsive, one-page portfolio built with React, TypeScript, and Vite. Dark theme, system fonts, and no external UI libraries or tracking.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Put **the contents of this folder at the root of a GitHub repository**, including the `.github` folder and `package-lock.json`, and push to its `main` branch.
2. Open the repository's **Settings > Pages** and choose **GitHub Actions** as the source.
3. Open **Actions > Deploy portfolio to GitHub Pages > Run workflow**. After the first deployment, pushes to `main` deploy automatically.
4. Find the published URL under **Settings > Pages** or in the workflow's deployment summary.

The relative asset base in `vite.config.ts` supports both `https://USERNAME.github.io/REPOSITORY/` and a root-level Pages site without a repository-name setting. This is a static site: no server, secrets, or contact-form service is required.

If your default branch is not `main`, update the branch in `.github/workflows/deploy.yml`.

Before pushing updates, run `npm run build`. The development preview does not run
TypeScript's checks, but deployment does. If a build fails, GitHub Pages continues
serving the last successful deployment; view the failed run in **Actions** for the error.

## Update the content

- `src/App.tsx`: introduction, selected work, experience, education, skills, email, and LinkedIn.
- `src/styles.css`: colors, typography, spacing, and responsive layouts.
- `index.html`: page title and search/social descriptions.
- `public/favicon.svg`: browser icon.

Selected work summarizes contributions described in the resume, rather than linking to private customer projects. The original resume, phone number, and street address are intentionally not published.

The selected-work section and its `projects` data are currently commented out.
To restore it, uncomment both and restore the navigation links to `#work`.
