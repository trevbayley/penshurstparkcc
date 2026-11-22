# Penshurst Park Cricket Club website

Public website for Penshurst Park Cricket Club: https://<scrubbed-url-domain>

## Main files

- `index.html` - document shell, metadata and browser-side Content Security Policy.
- `app.js` - club content, routing and page behaviour.
- `styles.css` - responsive layout, visual design and accessibility styles.
- `media/` - club, event, history, poster, sponsor and team imagery.
- `staticwebapp.config.json` - response-header configuration for Azure Static Web Apps. GitHub Pages does not apply this file.
- `SECURITY-DEPLOYMENT.md` - deployment security notes and pre-publish checks.

## Content updates

Club content is currently maintained in `app.js`:

- `CFG` contains registration links, contact details, social links, sponsors and current-season team photographs.
- `CLUB_DATA` contains events, club-history entries and useful links.
- `TEAM_DIRECTORY` contains the team directory.

Keep media references within the existing `media/` subfolders and prefer WebP for website photographs where practical. Logos and posters may use other appropriate formats.

## Pre-publish checks

1. Check that every referenced media file exists with the exact filename and case used in `app.js` or `index.html`.
2. Check all external links, event dates, team information and contact details.
3. Check Home, About us, History, Members area, Our teams, Join us and Fundraising on desktop and mobile widths.
4. Check keyboard navigation, visible focus, reduced-motion behaviour and the mobile menu.
5. Do not commit ZIP packages, test reports, source maps, environment files, tokens, passwords or other credentials.
6. Use a descriptive commit message for each published change.

## Security

The site is static and uses a restrictive browser-side Content Security Policy in `index.html`, URL-scheme validation in `app.js`, and `rel="noopener noreferrer"` for external links opened in new tabs.

GitHub Pages does not apply `staticwebapp.config.json`, so response-header protections defined there only take effect when deployed on a host that supports that configuration. See `SECURITY-DEPLOYMENT.md` before changing hosting or security headers.

The CSS/JavaScript measures that disable dragging or the context menu on selected photographs only discourage casual saving. They do not make publicly served images private or inaccessible.
