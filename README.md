# Amay Nirula — Portfolio

A static Jekyll site for GitHub Pages. The website files live at the repository root and are intended to publish from the `main` branch and `/ (root)`.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, and `contact.md` to update page content.
- Shared navigation is in `_config.yml`; reusable page structure and site chrome are in `_layouts/` and `_includes/`.
- Styling is in `assets/css/site.css`. The small theme switcher is in `assets/js/theme.js`.
- The system appearance is used by default; visitors can switch between light and dark themes. Their choice is stored in their browser.
- The résumé and original prompt in `attached_assets/` are excluded from the generated site.

## Preview locally

Install Ruby and Bundler, then from the repository root run:

```sh
gem install bundler
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll (usually `http://127.0.0.1:4000`). Stop the server with `Ctrl+C`.

## Publish with GitHub Pages

1. Create or use the repository `amaynirula-design.github.io`.
2. Push the site files to its `main` branch.
3. In the repository settings, open **Pages** and select **Deploy from a branch**, branch **main**, folder **/ (root)**.
4. Save. GitHub Pages builds this Jekyll site and publishes it at `https://amaynirula-design.github.io`.

No separate application, database, or manual build step is needed for publishing.

## Check quality

Run the site locally, then use Chrome DevTools:

1. Open the home, About, Experience, and Contact pages and follow every navigation link.
2. In device emulation, check a 375px mobile viewport and a 1280px desktop viewport. Confirm content fits, the navigation remains usable, and there is no horizontal scrolling.
3. Open **Lighthouse** in DevTools, select Performance, Accessibility, Best Practices, and SEO, then run a mobile audit. Aim for a score of at least 90 in each category.
4. Test the theme control with a mouse and keyboard, and confirm focus indicators and readable contrast in both themes.