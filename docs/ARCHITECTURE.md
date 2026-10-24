# Architecture

- `index.html`: marketing copy, navigation, metadata, Employee Login.
- `styles.css`: responsive visual design.
- `site.js`: accessible mobile navigation and a sticky header that hides on downward scrolling and reappears on upward scrolling. Also positions a decorative chameleon along a left-side rail on wide screens and a bottom rail on smaller screens, according to page scroll progress. No storage, tracking, or network requests.
- `assets/`: transparent logo and self-hosted fonts with their licenses; typography is defined in `docs/BRAND.md`.
- `scripts/check_site.py`: dependency-free structure, link, and login checks.
- `.github/workflows/check.yml`: validation on pushes and pull requests.
- `.github/workflows/pages.yml`: validates and deploys an allowlisted static artifact from `main` to GitHub Pages.
- `.github/pull_request_template.md`: review context and evidence.

No framework, package manager, database, build step, or application server is required.

## Responsive navigation

Below 761px, the header uses a native menu button with `aria-expanded` and `aria-controls`. JavaScript collapses navigation; without it, all links remain visible. Opening the menu keeps the header visible. Selecting a link, clicking outside, or pressing Escape closes it; Escape returns focus to the toggle. Keyboard focus within the header also keeps it visible. Scroll handling is passive and scheduled with `requestAnimationFrame`; reduced-motion preferences disable header/menu transitions. Footer content is limited to copyright and service labels.

## Photography and motion

Real Pexels photographs are self-hosted in responsive sizes under `assets/photos/`; source and license records are in that directory’s README. They illustrate small-business settings without identifying the pictured people as clients or staff. The hero image loads eagerly; the approach image is lazy-loaded.

The decorative chameleon uses the approved transparent mark, is hidden from assistive technology, and ignores pointer input. Position updates share the header’s passive, animation-frame-scheduled scroll handler. A short stepping animation runs only during scrolling. Above 1100px the rail sits to the left of the content with the chameleon facing down or up according to the scroll direction. At widths of 1100px or less it runs left to right along the bottom, with safe-area spacing and a chameleon facing right when scrolling down and left when scrolling up. Direction changes mirror the mark in its travel axis, keeping the tail curl toward the outer screen edge in both layouts. Neither layout has a visible guide line. On smaller screens a masked translucent backdrop fades the bottom blur into the page; browsers without backdrop-filter retain the translucent fade. The rail is hidden when JavaScript is unavailable or reduced motion is requested. Resize, history restoration, and preference changes refresh its position/visibility.

## Login boundary

```text
Public website → Employee Login → https://id.chameleonenterprise.com
```

This is normal navigation to Pocket ID. It does not create a session on this website or automatically authenticate a separate employee portal. A future authenticated portal needs its own OIDC integration and end-to-end validation. Never embed a confidential OIDC client secret in frontend code.

## Content and design

The owner described adaptable professional services specializing in operations, IT, and HR consulting. Copy elaborates on those areas without claiming credentials, customer outcomes, or testimonials. No public contact address has been supplied. The owner selected navy, white, and slate for the palette. The marketing direction emphasizes people, judgment, creativity, and relationships, with AI framed as a useful supporting tool within IT consulting.

Keep additions static unless behavior requires a server. New data collection, analytics, external services, authentication, or dependencies require updated security/deployment guidance and relevant checks.
