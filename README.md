# Toni Heino — personal homepage

A lightweight portfolio and online CV, built with plain HTML, CSS and JavaScript and hosted on GitHub Pages.

## Local preview

Run a static server from this directory, for example:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. There are no dependencies or build steps.

## Features

- Responsive layout with a portrait, expertise cards, career timeline and web development services.
- Light and dark themes, with the visitor's choice saved locally when storage is available.
- Expertise filters, mobile navigation, active section indicators and reading progress.
- Email copying with visible success and error feedback, plus direct email and social links.
- Helsinki local time, keyboard focus indicators and reduced-motion support.
- Core content and navigation remain available without JavaScript.

## Files

- `index.html`: content and accessible page structure.
- `css/tyylit.css`: styles, themes, responsive layouts and print styles.
- `js/theme.js`: restores the selected theme before the page renders.
- `js/main.js`: progressive enhancements and interactive controls.
- `Images/`: existing photos and image assets.

## Live site

[tonikyy.github.io](https://tonikyy.github.io)

Local edits must be committed and pushed through the repository's normal GitHub Pages publishing workflow to appear on the live site.
