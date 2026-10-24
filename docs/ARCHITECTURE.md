# Architecture

- `index.html`: marketing copy, navigation, metadata, Employee Login.
- `styles.css`: responsive visual design.
- `scripts/check_site.py`: dependency-free structure, link, and login checks.
- `.github/workflows/check.yml`: validation on pushes and pull requests.
- `.github/pull_request_template.md`: review context and evidence.

No framework, package manager, database, build step, or application server is required.

## Login boundary

```text
Public website → Employee Login → https://id.chameleonenterprise.com
```

This is normal navigation to Pocket ID. It does not create a session on this website or automatically authenticate a separate employee portal. A future authenticated portal needs its own OIDC integration and end-to-end validation. Never embed a confidential OIDC client secret in frontend code.

## Content and design

The owner described adaptable professional services specializing in operations, IT, and HR consulting. Copy elaborates on those areas without claiming credentials, customer outcomes, or testimonials. No public contact address has been supplied. The owner selected navy, white, and slate for the palette. The marketing direction emphasizes people, judgment, creativity, and relationships, with AI framed as a useful supporting tool within IT consulting.

Keep additions static unless behavior requires a server. New data collection, analytics, external services, authentication, or dependencies require updated security/deployment guidance and relevant checks.
