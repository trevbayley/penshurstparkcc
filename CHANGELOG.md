# PPCC Website Daily Change Log

This log records completed changes to the Penshurst Park Cricket Club website. Add a new dated section at the top after each development session.

## 18 November 2026

### Mobile navigation fix
- Restored the collapsed mobile navigation state at widths up to 760 pixels.
- The menu is now hidden by default, opens as a full-width vertical menu, and remains visible on desktop and larger tablet layouts.
- Confirmed the existing button, ARIA expanded state, Escape-key closing, focus handling, and desktop resize reset logic remain in place.

### Browser shortcut icon
- Added club-crest favicon and Apple touch icon files generated from the existing PPCC club crest.
- Updated `index.html` so browser tabs, bookmarks, and compatible home-screen shortcuts can use the club crest.


### Site package and deployment
- Rebuilt the complete website package with the full `media` folder structure.
- Included `index.html`, `styles.css`, `app.js`, `_headers`, `staticwebapp.config.json`, `MEDIA-STRUCTURE.txt`, and `SECURITY-DEPLOYMENT.md`.
- Recreated the extensionless `_headers` file and removed accidental chat-generated HTML from its security policy values.
- Checked all media paths referenced by the HTML and JavaScript; no referenced media files were missing.
- Validated `app.js` with Node syntax checking.

### Footer
- Made the entire ECB Accredited Club Status logo clickable.
- Linked the logo to the Kent Cricket ECB Club Accreditation Success page.
- Preserved the logo's desktop and mobile footer positioning.
- Added a visible keyboard-focus outline for accessibility.

### Media structure
- Created and populated:
  - `media/club/`
  - `media/events/`
  - `media/posters/`
  - `media/sponsors/`
  - `media/teams/`
- Converted the Making Scents Dog Training image to `making-scents-dog-training.webp`.
- Optimised oversized cricket-ball and sponsor graphics while retaining their existing filenames.
- Preserved larger poster and event artwork where text clarity was important.

### Team gallery
- Replaced and optimised the Sunday team photographs.
- Added `sunday-2nd-xi-2026.webp` to the team gallery.
- Cropped the added portrait photograph to a 4:3 landscape composition at 960 x 720 pixels.
- Corrected the Sunday team image assignments so the newly cropped photograph is Sunday 1st XI and the previous photograph is Sunday 2nd XI.
- Retained the Ladies 1st XI and Ladies Softball team images.

### Social media panel
- Increased the Facebook, Instagram, and YouTube SVG logos from 30 x 30 pixels to 38 x 38 pixels.
- Kept the existing 48 x 48 pixel social button dimensions so the panel layout remains unchanged.

### Optimisation and validation
- Verified that all included images open successfully.
- Converted and compressed selected media to WebP for improved loading efficiency.
- Rebuilt and checked the final complete upload archive after each change.

---

## Daily entry template

## DD Month YYYY

### Added
- 

### Changed
- 

### Fixed
- 

### Optimised and tested
- 

### Deployment notes
- 
