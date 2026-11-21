# PPCC Website Project Status

## Foundation baseline
This is the authoritative Penshurst Park Cricket Club website development baseline created on 21 November 2026.

## Core files
`index.html`, `styles.css` and `app.js` are the primary site files. The package also contains `CHANGELOG.md`, `MEDIA-STRUCTURE.txt`, `SECURITY-DEPLOYMENT.md`, `staticwebapp.config.json`, `favicon-32x32.png` and `apple-touch-icon.png`.

## Media structure
- `media/club/` - crest and general club graphics
- `media/events/` - event artwork
- `media/history/` - Club History imagery
- `media/posters/` - recruitment posters
- `media/sponsors/` - sponsor logos
- `media/teams/` - current and archived team photographs

Use lower-case, hyphenated names for new media. WebP is preferred for normal website imagery. Existing PNG assets are retained where currently required.

## Navigation and responsive behaviour
The main site navigation contains Home, About us, History, Members area, Our teams, Join us, Bookings - coming soon, and Fundraising. Mobile navigation is collapsed by default up to 760px and retains ARIA state, Escape-key closing and focus handling.

## History
History has **Club history** and **Team history** tabs. Club history is selected by default.

Club History uses the vertically scrolling year/description timeline with the fixed central yellow selector and associated historical image. Automatic progression is seven seconds unless reduced-motion is requested. Direct scrolling is clamped at the first and last history items.

### 2024 Club History
There are two separate 2024 entries, in this order:

1. **2024 - 300 years / President's Match**
   - Text: `The club marked 300 years of cricket at Penshurst Park in July 2024 with a celebratory week and a 25-over match between a President's XI (featuring Penshurst Place heir Dr Hon Phillip Sidney) and a Penshurst Park XI.`
   - Image: `media/history/2024-presidents-day.webp`

2. **2024 - Net 1 opening**
   - Text: `Opening of Net 1 by Russell Hammond, son of George Hammond, a long standing Chairman of the club.`
   - Image: `media/history/2024-net-1-opening.webp`

`2024-presidents-day.webp` has therefore moved from the Teams collection to `media/history/` and is no longer a Team History entry.

The Great Estates from Above item is a **2025** Club History entry using `media/history/2025-great-estates-from-above.webp`.

Team History is generated from previous-season photographs in `CFG.teamPhotos`.

## Our Teams
The Our teams navigation opens the site's internal Our Teams page. Team sections use collapsible `details` controls and are explicitly reset closed when the page renders. Teams without a supplied photograph use the PPCC crest placeholder. Play-Cricket is retained as a separate link for fixtures, results, tables and statistics.

## Members area
Winter training schedules and Summer training schedules are separate collapsible `details` sections. Current JavaScript explicitly closes both sections after the Members page is rendered. Useful links and YouTube training links remain in the right-side resources panel.

## Home
The established blue/yellow PPCC hero contains the crest and red/pink cricket-ball graphics. The page includes recent and upcoming event cycles, current-season team photographs and an internal link to Our Teams.

## Accessibility and usability requirements to preserve
- Skip-to-content link.
- Visible keyboard focus.
- Mobile menu accessibility behaviour.
- Keyboard-operable History tabs and timeline.
- Reduced-motion behaviour.
- Semantic details/summary controls.
- Responsive mobile and desktop layouts.
- Appropriate mobile touch targets.

## Security and deployment
The baseline retains the CSP meta policy in `index.html`, URL/asset validation in `app.js`, `staticwebapp.config.json`, and `SECURITY-DEPLOYMENT.md`. HTTPS should remain enforced on the published site.

## Development workflow
Treat this foundation ZIP as the starting point for further development. At a later session, supply this status file together with the latest `index.html`, `styles.css` and `app.js`; individual media only needs to be supplied when it is being changed or added. Preserve existing working design and behaviour outside the requested change.

After substantial work, update this file and the change log before creating the next full-site package.

## Foundation changes incorporated on 21 November 2026
- Moved the President's Day photograph from Team History to Club History.
- Moved its site path to `media/history/2024-presidents-day.webp`.
- Made the President's Match celebration the first of two 2024 Club History entries.
- Kept the new Net 1 opening as the second 2024 Club History entry.
- Changed the Net 1 description to the requested Russell Hammond / George Hammond wording.
- Preserved the current History tabs, internal Our Teams page, collapsed team groups, collapsed Members training sections, mobile navigation safeguards and current media organisation.

## Baseline validation
The foundation build should be considered authoritative only together with its included files. JavaScript syntax and referenced local media were checked when the package was produced.
