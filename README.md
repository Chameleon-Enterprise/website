# Chameleon Enterprise website

Public marketing website for an adaptable professional services business specializing in operations, IT, and HR consulting.

- Intended public domain: https://www.chameleonenterprise.com
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

## Start here

- [AGENTS.md](AGENTS.md): coding-agent instructions.
- [CONTRIBUTING.md](CONTRIBUTING.md): branches, review, and validation.
- [SECURITY.md](SECURITY.md): security boundaries and reporting.
- [Architecture](docs/ARCHITECTURE.md): structure and login behavior.
- [Deployment](docs/DEPLOYMENT.md): hosting and domain setup.
- [Organization setup](docs/ORG_SETUP.md): remaining GitHub setup decisions.

## Current scope

The site is static HTML and CSS. It does not authenticate visitors, collect form submissions, or store employee data. Employee Login navigates to Pocket ID; it does not establish an authenticated session on this website.

Hosting and DNS are not configured by adding source files. A public contact address has not been supplied, so no contact email or form is published. No license has been selected; a public repository alone is not a license grant.
