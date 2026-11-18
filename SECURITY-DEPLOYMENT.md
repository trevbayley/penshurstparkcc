# Security deployment notes

The site now includes a browser-enforced CSP meta policy, URL scheme validation, and deployment header templates.

## Deployment files

- `_headers`: use on platforms that support a Netlify-style headers file.
- `staticwebapp.config.json`: use when deploying to Azure Static Web Apps.

## HTTPS / HSTS

Enable HSTS only after the production domain and every required subdomain are confirmed to work exclusively over HTTPS. A suggested production header is:

`Strict-Transport-Security: max-age=31536000; includeSubDomains`

## Pre-publish checks

- Replace placeholder `example.com` application URLs before publication.
- Review every external URL in `CFG`, `CLUB_DATA`, and the sponsors list.
- Do not publish old ZIP files, backup HTML files, test reports, or source maps.
- Disable directory listing on the host.
- Confirm the live server returns the headers defined in the applicable deployment file.
