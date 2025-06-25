# Yihua & Binqi’s Wedding Website

## How to deploy
1. Push this repo to GitHub.
2. In **Settings > Pages**, set the branch to `main` (or your default) and the folder to `/` (root).
3. If you want guestbook forms to work _out of the box_, sign up for [Formspree](https://formspree.io/) (or Netlify Forms) and replace the form `action` in `index.html`.

## Customization
- **Images:** put your photos in `images/` and update the `<img>` tags.
- **Updates:** either edit the `<ul id="updates-list">…</ul>` in HTML, or add entries in `js/main.js`.
- **Guestbook messages:** visitors will be emailed to you via Formspree. To _display_ past messages, manually add them to `data/messages.json`.

Enjoy—and congrats! 🥂
