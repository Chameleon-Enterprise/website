# Chameleon Enterprise website

Public marketing website for **Chameleon Enterprise Ltd Co**, an adaptable professional services business specializing in operations, IT, and HR consulting.

- GitHub Pages: https://chameleon-enterprise.github.io/website/
- Intended custom domain: https://www.chameleonenterprise.com (DNS/custom-domain setup pending)
- Employee Login: https://id.chameleonenterprise.com
- Repository: https://github.com/Chameleon-Enterprise/website

## Develop and validate

Requires Python 3. No dependencies or build step.

```sh
python3 -m http.server 8080 --bind 127.0.0.1
python3 scripts/check_site.py
git diff --check
```

Open http://127.0.0.1:8080 after starting the server. Run the checks in a second terminal.

## Website features

- People-centered introduction, practical Operations / IT / HR services, and company approach.
- Real, self-hosted Pexels photography of small-business work, with photographer credits.
- Restrained teal accents and a decorative chameleon that follows scroll progress down the left on desktop and left to right along the bottom on smaller screens; respects reduced motion.
- Navy, white, and slate branding with a teal-accented chameleon wordmark.
- Self-hosted Source Serif 4 headings and Inter body/control text, with font licenses included.
- Responsive layouts and accessible mobile navigation with a JavaScript-free fallback.
- Sticky header that hides on downward scrolling and returns on upward scrolling.
- Employee Login links directly to Pocket ID; the website does not process sign-ins.

## Publishing

GitHub Pages uses the **GitHub Actions** publishing source. Approved changes merged into `main` run the [deployment workflow](.github/workflows/pages.yml), which validates the site, packages only `index.html`, `styles.css`, `site.js`, and `assets/`, and deploys the artifact. Repository instructions and validation tooling are not included in the hosted site.

Check deployment progress under [Actions](https://github.com/Chameleon-Enterprise/website/actions) and configuration under [Settings → Pages](https://github.com/Chameleon-Enterprise/website/settings/pages). The workflow can also be run manually. See [deployment guidance](docs/DEPLOYMENT.md) for domain setup and rollback.

Agents must obtain explicit user approval before committing or pushing. A request to edit or preview the site does not grant publishing approval; see [AGENTS.md](AGENTS.md).

## Start here

- [AGENTS.md](AGENTS.md): coding-agent instructions.
- [CONTRIBUTING.md](CONTRIBUTING.md): branches, review, and validation.
- [SECURITY.md](SECURITY.md): security boundaries and reporting.
- [Architecture](docs/ARCHITECTURE.md): structure and login behavior.
- [Brand and typography](docs/BRAND.md): logo, colors, font roles, and licenses.
- [Deployment](docs/DEPLOYMENT.md): hosting and domain setup.
- [Organization setup](docs/ORG_SETUP.md): remaining GitHub setup decisions.

## Current scope

The site uses static HTML and CSS with a small local navigation script. The mobile menu is collapsible; the sticky header hides on downward scrolling and returns on upward scrolling. Without JavaScript, the navigation stays visible. The site does not authenticate visitors, collect form submissions, or store employee data. Employee Login navigates to Pocket ID; it does not establish an authenticated session on this website.

Custom-domain DNS and domain verification remain separate from the Pages deployment. A public contact address has not been supplied, so no contact email or form is published. No license has been selected for the project; a public repository alone is not a license grant. The bundled fonts retain their included licenses.
