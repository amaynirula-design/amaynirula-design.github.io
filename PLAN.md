# Portfolio site plan

## Site

Build a static, multi-page Jekyll portfolio for `amaynirula-design.github.io`, published by GitHub Pages from the repository root on `main`. Keep all site files at the root; use Markdown pages with YAML front matter, reusable layouts and includes, and URL filters with an empty `baseurl`.

## Pages and content

- **Home:** A concise introduction to Amay as an engineer-turned-product manager, with links to the other pages.
- **About:** The supplied career summary, MBA at Berkeley Haas, engineering education, and international perspective.
- **Work Experience:** A chronological account of the supplied Tanium, Otis, DuPont, and University of Illinois roles, including résumé accomplishments where relevant.
- **Contact:** A public `mailto:` link using the address supplied in the résumé, plus the supplied LinkedIn profile.

Do not publish the résumé phone number. Do not invent employers, projects, achievements, or metrics. Use the supplied information only.

## Design and accessibility

Use a responsive, single-column layout with minimalist, editorial storytelling inspired by the user's Apple.com reference. Use clean, modern system fonts and a restrained color palette with readable contrast. Support light and dark themes with a small, accessible theme control and minimal JavaScript. Use semantic HTML, keyboard-accessible navigation, and a consistent footer.

## Jekyll and publishing

Create the site directly in the repository root, including `index.md`, `_config.yml`, `_layouts/`, `_includes/`, page Markdown files, CSS, a favicon, SEO tags, and a sitemap. Include a README with editing guidance, local preview instructions, and Lighthouse steps. Keep it compatible with GitHub Pages publishing from `main` and `/ (root)` without a separate app, backend, database, or manual build pipeline.

## Assumptions to confirm

- Use the résumé Tanium dates, **June–August 2026**, as confirmed by the user; the LinkedIn text instead says June 2026–Present.
- Use the email address in the uploaded résumé for the public mailto link, as explicitly approved.
- No headshot, custom logo, or additional project descriptions were provided, so the initial site will not invent or require them.