# tonikyy.github.io

Personal portfolio and online CV for Toni Heino, built as a small static website and hosted with GitHub Pages.

The site presents my professional background, current developer focus, work experience, contact links, and web development service offering. It is intentionally lightweight: plain HTML, CSS, images, and a small browser-side script for local visit counting.

## Preview

<img width="920" height="895" alt="image" src="https://github.com/user-attachments/assets/bbb0999e-4470-456a-b731-42053479c9f5" />

## Live Site

[https://tonikyy.github.io](https://tonikyy.github.io)

## Tech Stack

- HTML5
- CSS3
- GitHub Pages
- Google Fonts
- Font Awesome icons

No build tooling or package manager is required.

## Project Structure

```text
.
+-- index.html          # Main portfolio page
+-- css/
|   +-- tyylit.css      # Site styling, layout, animations, and responsive rules
+-- Images/             # Profile, logo, and social media image assets
+-- README.md
```

## Running Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local development server, you can also run one of these commands from the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

If you use VS Code, the Live Server extension also works well for quick previewing.

## Editing The Site

Most content changes happen in `index.html`:

- Hero title, subtitle, and contact buttons
- About text
- Experience cards
- Web development services section
- Social links and footer links

Visual changes are handled in `css/tyylit.css`:

- Color palette and theme variables
- Layout spacing
- Cards, buttons, and hover states
- Mobile responsiveness
- Animations

Image assets live in the `Images/` directory. When replacing images, keep file names consistent or update the matching `src` paths in `index.html`.

## Deployment

This repository is named `tonikyy.github.io`, so GitHub Pages can serve it directly from the repository.

Typical deployment flow:

1. Commit changes to the default branch.
2. Push to GitHub.
3. GitHub Pages publishes the updated static files.

The live site should update automatically after GitHub Pages finishes deploying.

## Notes

- The site uses external font and icon stylesheets from Google Fonts and Cloudflare CDN.
- There is no backend, database, or build step.
- The visit counter stores a local count in the visitor's own browser using `localStorage`; it does not track analytics or send data anywhere.
