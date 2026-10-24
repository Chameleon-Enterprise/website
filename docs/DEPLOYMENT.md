# Deployment

## Current state

The intended domain is `www.chameleonenterprise.com`. Source files do not provision hosting or DNS. Production deployment, HTTPS, and domain ownership have not been verified during bootstrap.

## Static hosting

Serve `index.html` and `styles.css`. No build is needed. Prefer publishing only public files, excluding documentation, scripts, and `.git`.

If choosing GitHub Pages, configure Pages and select a source branch or dedicated deployment artifact. Set and verify the custom domain, then configure the records GitHub specifies. Do not add a custom-domain file or alter DNS before the hosting target is selected. For another provider, follow its domain-verification and DNS instructions. An apex-domain redirect needs a separate decision.

## Release checks

1. Run repository checks and confirm the host publishes the intended commit.
2. Verify HTTPS, hostname, stylesheet loading, desktop/mobile rendering, and anchor navigation.
3. Verify Employee Login navigates to `https://id.chameleonenterprise.com`. Claim successful authentication only after a separately authorized sign-in test.
4. Configure supported security headers at the host. Derive CSP from actual assets; the current site needs same-origin CSS and no JavaScript.

## Rollback

Revert a problematic change with a normal commit and redeploy. Avoid rewriting shared history. Retain prior deployments if supported. Record old DNS values and TTLs before an authorized DNS change.
