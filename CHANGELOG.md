#### 22 November 2026 - History missing-image treatment
- History entries without a usable image now leave the image frame as a plain dark PPCC blue panel instead of showing a missing-image marker.

#### 22 November 2026 - Compact History tabs and equal-height desktop panels
- Restyled Club history and Team history as a compact tab strip to reduce vertical space above the History content.
- Matched the History photograph and timeline panel heights on desktop, with the timeline list scrolling inside its available space.
- Preserved the stacked mobile History layout and 44px tab targets on smaller screens.

### 21 November 2026 - Fundraising sponsorship contact

- Added a dedicated Join as a Sponsor panel to the Fundraising page.
- The button opens an email to Jake Cheesman with the subject `Becoming a sponsor of PPCC`.

### 21 November 2026 - Team History rebuild

- Rebuilt Team History using the same direct-selection pattern as Club History.
- The first previous-season photograph is explicitly selected when the tab opens.
- Added selected photograph/caption display, Previous/Next controls, click/tap selection and Arrow/Home/End keyboard navigation.
- All unselected entries remain fully readable and the selected entry uses the club-yellow highlight.
- Team History remains user-controlled rather than automatically advancing.

### 21 November 2026 - Club History timeline rebuild

- Replaced the selector-line/centred-scroll implementation with a clean selectable chronological list.
- The first entry, 1719, is explicitly selected on render and can always be selected again.
- Added a dedicated selected-entry panel beside the historical image.
- Active entries use a solid club-yellow highlight; inactive dates remain fully readable rather than greyed out.
- Previous/Next, click/tap, Arrow keys, Home/End and seven-second automatic progression are retained.
- Mobile uses the same reliable selection model in a single-column layout.

### 21 November 2026 - Precise History selector fix

- Replaced the percentage-padding centring method with measured top and bottom edge spacing.
- The first and final entries now have real reachable centre positions.
- All entries use the same direct centre calculation: entry centre minus half the visible timeline height.
- Recalculation runs after layout settles and whenever the viewport size changes.

### 21 November 2026 - History timeline improvements

- Corrected first-entry geometry by normalising each history item offset to the timeline scroll content, so the first item can be selected and centred reliably on desktop. Initial positioning now waits for two animation frames so layout measurements are settled.
- Fixed initial desktop History positioning so the selector opens exactly on the first entry; initial alignment and subsequent scrolling now use the same target calculation.
- Added visible Previous and Next controls with a live entry-position indicator.
- Added Home and End keyboard support while retaining arrow-key, click, touch-scroll and automatic progression behaviour.
- Strengthened the fixed yellow selection area and made the selected entry more visually prominent.
- Reduced the prominence of surrounding entries and added gentle scroll snapping.
- Improved the mobile timeline height, image ratio, touch controls and narrow-screen typography.
- Kept the first and last entry limits, seven-second automatic progression and reduced-motion behaviour.
- Mobile test review corrected the selector position so it remains centred in the scrollable timeline below the new control bar.

### 21 November 2026 - Code cleanup

#### JavaScript
- Removed two browser-console regression-test helpers from the production JavaScript. They duplicated manual checks and were not used by the live site.
- Removed an unused History fade-timer variable and its redundant cleanup call.

#### CSS
- Removed obsolete development comments while retaining the existing cascade and responsive safeguards.
- Reviewed repeated selectors and retained those whose later declarations intentionally extend or override earlier component rules.

#### Validation
- Rechecked JavaScript syntax, local media references, image integrity and archive integrity after cleanup.

### 21 November 2026 - Foundation baseline update

#### Home page
- Replaced the About the club introduction with the agreed heritage-and-modern-club wording.
- Retained the Kent Cricket link on the 2026 Kent Women's Cricket League Championship reference.

#### History
- President's Match / 300 years celebration is the first of two 2024 Club History entries and uses `media/history/2024-presidents-day.webp`.
- Net 1 opening is the second 2024 Club History entry with the revised Russell Hammond / George Hammond description.
- The President's Day image is not part of Team History.

# PPCC Website Daily Change Log

This log records completed changes to the Penshurst Park Cricket Club website. Add a new dated section at the top after each development session.

## 19 November 2026

### History
- Reworked the History timeline so years and descriptions scroll through a fixed central yellow selector.
- Standardised automatic History timing to seven seconds and removed the separate ten-second interaction pause.
- Added 1960, 2019 and 2026 historical imagery.
- Added the 2026 Great Estates from Above entry and Channel 4 link.
- Corrected History markup so the Channel 4 link is not nested inside another interactive control.

### Members and About us
- Moved Useful links to the Members right column and merged the YouTube training links into the same card.
- Removed the Members Availability and Bookings coming-soon panel.
- Improved About us headings, contact touch targets, directions link and map labelling.

### Media and optimisation
- Localised the Cricketer Exchange logo.
- Retained JPEG/JPG originals as fallbacks where WebP is preferred.
- Kept JPEG/JPG as the preferred source where conversion to WebP produced a larger file.

### Security and maintenance
- Updated GitHub Pages deployment notes and HTTPS guidance.
- Removed the unused Availability button helper.

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
