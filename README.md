# Portfolio

Professional portfolio website for Thiyagarajan A, built with React and Vite.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

On every push to `main`, the workflow builds the website and publishes the production files to the `gh-pages` branch.

If the page is blank, open the repository on GitHub and set:

`Settings -> Pages -> Build and deployment -> Source -> Deploy from a branch -> gh-pages -> / root`

The public website will be deployed at:

`https://a-thiyagarajan.github.io/Portfolio/`
