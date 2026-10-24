# Deployment

## Current state

The selected host is GitHub Pages, with GitHub Actions as the publishing source. The default address is `https://chameleon-enterprise.github.io/website/`. The intended custom domain is `www.chameleonenterprise.com`; DNS and custom-domain verification remain pending until configured and verified separately.

## Static hosting

The `.github/workflows/pages.yml` workflow runs on pushes to `main` and manual dispatch. It validates the site, copies `index.html`, `styles.css`, `site.js`, and `assets/` into `_site/`, uploads a Pages artifact, and deploys through the `github-pages` environment. Font license notices are preserved. Repository instructions, validation scripts, and `.git` are not published. There is no framework build or dependency installation.

In repository Settings → Pages, keep Source set to **GitHub Actions**. The workflow uses commit-pinned actions and grants Pages deployment permissions only to the deploy job. Pull requests run site validation without deploying.

## Custom domain

1. Verify domain ownership in the organization Pages settings when possible.
2. Add `www.chameleonenterprise.com` in the repository Pages settings before changing its DNS.
3. At the DNS provider, point the `www` CNAME to `chameleon-enterprise.github.io` (the hostname, without `/website/`). Review existing records before any authorized DNS change.
4. Wait for GitHub's DNS/certificate checks, enable Enforce HTTPS when available, and verify the final URL.

For an Actions-based deployment, a source `CNAME` file is not required. Do not modify Pocket ID or other application subdomains. The apex domain needs a separate DNS/redirect decision. See [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Release checks

1. Obtain explicit user approval before committing or pushing, run repository checks, and confirm Pages publishes the intended commit.
2. Verify HTTPS, hostname, stylesheet loading, desktop/mobile rendering, and anchor navigation.
3. Verify Employee Login navigates to `https://id.chameleonenterprise.com`. Claim successful authentication only after a separately authorized sign-in test.
4. Configure supported security headers at the host. Derive CSP from actual assets; the current site needs same-origin CSS, images, fonts, and the local `site.js` file. Inline scripts, external scripts, and unsafe evaluation are not required.

## Rollback

Revert a problematic change with a normal commit and redeploy. Avoid rewriting shared history. Retain prior deployments if supported. Record old DNS values and TTLs before an authorized DNS change.
