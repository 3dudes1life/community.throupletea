# Platform Notes

## Current version
This repo is a static GitHub Pages website. It includes:
- Countdown landing page
- Founding 50 invite request page
- Guidelines / culture code
- Launch plan page
- Thank-you page

## Form options
GitHub Pages does not process forms by itself. Use one of these:
- Formspree: simplest external form endpoint
- Netlify Forms: works if deployed on Netlify
- Google Forms: easiest free option, less polished
- Airtable Forms: good if you want applicant tracking
- Brevo / MailerLite: good if email list is the main goal

## Future community engine
Recommended: self-hosted Discourse on `community.throupletea.com` once the Founding 50 are ready.

Why Discourse later:
- Mature moderation tools
- Profiles
- Private messages
- Categories
- Trust levels
- Can scale beyond the first beta group

## Manual fields to update
- Countdown date: `assets/script.js`
- Applicant count: `index.html`
- Progress bar width: `assets/style.css` or inline style if preferred
