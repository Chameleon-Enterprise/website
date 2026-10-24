# Contributing

Read `AGENTS.md` and `SECURITY.md`. Work from current `main`, inspect the working tree, and use a focused branch (`codex/description` for agents). Preserve unrelated changes.

## Validate

```sh
python3 scripts/check_site.py
git diff --check
python3 -m http.server 8080 --bind 127.0.0.1
```

For visual changes, inspect desktop and mobile layouts, anchors, keyboard navigation, and the Employee Login destination. Do not submit real employee credentials as part of public-site checks. Document any verification limits.

## Pull requests

Obtain explicit user approval before creating any Git commit or pushing to GitHub. An editing request does not authorize either action. Prepare the changes and validation results for review, then keep them local until approval covers the intended commit or push.

Describe the user-visible result, reason, checks, and remaining configuration. Include screenshots for substantial visual changes. Use the PR template for useful evidence; do not add tests that only mirror implementation.

After bootstrap, propose changes through PRs. Configure review enforcement and branch protection separately in GitHub; documentation alone does not enforce them. Merging is not deployment until hosting is configured.

Use code and assets with appropriate rights. No project license has been selected yet.
