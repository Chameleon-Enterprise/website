# Architecture

- `index.html`: marketing copy, navigation, metadata, Employee Login.
- `styles.css`: responsive visual design.
- `site.js`: accessible mobile navigation and a sticky header that hides on downward scrolling and reappears on upward scrolling. No storage, tracking, or network requests.
- `assets/`: transparent logo and self-hosted fonts with their licenses; typography is defined in `docs/BRAND.md`.
- `scripts/check_site.py`: dependency-free structure, link, and login checks.
- `.github/workflows/check.yml`: validation on pushes and pull requests.
- `.github/workflows/pages.yml`: validates and deploys an allowlisted static artifact from `main` to GitHub Pages.
- `.github/pull_request_template.md`: review context and evidence.

No framework, package manager, database, build step, or application server is required.

## Responsive navigation

Below 761px, the header uses a native menu button with `aria-expanded` and `aria-controls`. JavaScript collapses navigation; without it, all links remain visible. Opening the menu keeps the header visible. Selecting a link, clicking outside, or pressing Escape closes it; Escape returns focus to the toggle. Keyboard focus within the header also keeps it visible. Scroll handling is passive and scheduled with `requestAnimationFrame`; reduced-motion preferences disable header/menu transitions. Footer content is limited to copyright and service labels.

## Login boundary

```text
Public website → Employee Login → https://id.chameleonenterprise.com
```

This is normal navigation to Pocket ID. It does not create a session on this website or automatically authenticate a separate employee portal. A future authenticated portal needs its own OIDC integration and end-to-end validation. Never embed a confidential OIDC client secret in frontend code.

## Content and design

The owner described adaptable professional services specializing in operations, IT, and HR consulting. Copy elaborates on those areas without claiming credentials, customer outcomes, or testimonials. No public contact address has been supplied. The owner selected navy, white, and slate for the palette. The marketing direction emphasizes people, judgment, creativity, and relationships, with AI framed as a useful supporting tool within IT consulting.

Keep additions static unless behavior requires a server. New data collection, analytics, external services, authentication, or dependencies require updated security/deployment guidance and relevant checks.
