# Throuple Tea Community Website

A professional GitHub Pages-ready starter site for the Throuple Tea Community.

## Included files

- `index.html` — main landing page
- `guidelines.html` — full community guidelines
- `join.html` — founding member waitlist page
- `platform.html` — backend/platform plan page
- `assets/style.css` — full brand styling
- `assets/script.js` — dynamic year script
- `assets/logo.svg` — simple placeholder SVG brand mark
- `docs/community-blueprint.md` — mission, audience, categories, moderation
- `docs/platform-notes.md` — GitHub Pages + waitlist + future Discourse plan

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload everything from this folder into the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/root`.
6. Save.

## Waitlist form setup

The join page currently has this placeholder:

```html
<form class="form-card" action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

Replace the action with your real form tool or change the button to link to a Wix Form, Brevo form, MailerLite form, or Google Form.

## Brand notes

The site is designed to visually match the current Throuple Tea energy: dark/neon, hot pink, orange, teal, premium glass cards, and direct friendship-first copy.

## Future backend

This website is the front door. The actual logged-in community can later live at:

`community.throupletea.com`

Recommended backend path:

1. Self-hosted Discourse
2. NodeBB
3. Flarum
