# Security deployment notes

The site includes a browser-enforced Content Security Policy in `index.html`, URL-scheme and asset-path validation in `app.js`, and an Azure Static Web Apps response-header template in `staticwebapp.config.json`.

The current CSP uses `form-action 'none'` because the website has no forms that submit directly from the site.

## GitHub Pages

- Enforce HTTPS in the repository Pages settings.
- GitHub Pages does not apply `staticwebapp.config.json` or arbitrary custom response-header configuration from repository files.
- The CSP `<meta>` element in `index.html` still provides browser-side restrictions.
- Response-header-only protections require hosting or a delivery layer that supports custom HTTP response headers.

## Azure Static Web Apps

`staticwebapp.config.json` defines the intended response headers, including CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, framing restrictions and cross-origin policies. If the site is moved to Azure Static Web Apps, confirm the deployed responses actually contain the expected headers.

## HTTPS / HSTS

Enable HSTS only after the production domain and every required subdomain are confirmed to work exclusively over HTTPS. A suggested production value is:

`Strict-Transport-Security: max-age=31536000; includeSubDomains`

## Repository safety

- Never commit passwords, tokens, API keys, private keys or environment files containing credentials.
- Keep local archives, browser-test reports, source maps and temporary backup files out of the public repository.
- Treat club photographs published by the site as publicly retrievable even where the interface discourages casual saving.
- Retain original/licensed archival material outside the public web repository when it is not required by the live site.

## Pre-publish checks

- Review external URLs in `CFG`, `CLUB_DATA`, `TEAM_DIRECTORY` and sponsor entries.
- Confirm all referenced local assets exist and use the intended media subfolder.
- Do not publish old ZIP files, backup HTML files, test reports, source maps or credentials.
- Confirm HTTPS is enabled for the production domain.
- When using a host that supports response headers, confirm the live server returns the expected security headers.
