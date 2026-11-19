# Security deployment notes

The repository's primary deployment platform is GitHub Pages with a custom DNS name.

## GitHub Pages

1. In repository **Settings → Pages**, select the `main` branch and root directory.
2. Add and verify the production custom domain.
3. Enable **Enforce HTTPS**.
4. Wait for GitHub to issue and confirm the TLS certificate before enabling browser-only HTTPS policies.

GitHub Pages does not apply `_headers`, `staticwebapp.config.json`, HSTS response headers, or other server configuration files. These files must not be described as active GitHub Pages protections. The CSP and referrer policy in `index.html` are the browser-enforced policies for this deployment.

## DNS

Configure only the DNS records required by GitHub Pages. DNS changes do not enable HSTS and do not replace HTTPS enforcement in repository settings.

Use DNSSEC at the registrar/DNS provider if offered. DNSSEC validates DNS responses, but it does not encrypt browser traffic.

## Pre-publish checks

- Remove backup HTML, ZIP files, test reports, and unpublished source maps.
- Disable directory listing on the hosting platform; GitHub Pages may expose repository-style directory listings when a directory lacks an index file.
- Review every external URL in site configuration and navigation.
- Ensure links opened in a new tab use `noopener noreferrer`.
- Confirm HTTPS works before and after DNS changes.
- Use private vulnerability reporting and keep security settings under source control where possible.
