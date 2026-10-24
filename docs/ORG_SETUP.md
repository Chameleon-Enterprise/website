# GitHub organization setup

This is a backlog, not a claim that organization settings are configured. Bootstrap is scoped to `Chameleon-Enterprise/website`; organization defaults live outside this repository.

## Included here

- Agent instructions and contribution workflow.
- Security boundary and reporting guidance.
- Dependency-free site check and least-privilege CI.
- PR template and architecture/deployment notes.

## Configure and verify in GitHub

- Confirm owners, maintainers, backup administrators, and team membership before granting access. Prefer least-privilege teams.
- Review organization 2FA policy, membership, third-party access, and agent/app installation scope.
- Configure a `main` ruleset: PRs, appropriate review requirements, required `validate` check from `Site checks` once it has run, and force-push/deletion restrictions. Keep an intentional recovery path.
- Enable available secret scanning, push protection, and private vulnerability reporting. Verify availability and billing before selecting paid features.
- Configure Actions policy and default token permissions. The included workflow uses `contents: read` and commit-pinned checkout.
- Add `CODEOWNERS` after confirming a real team/maintainer handle. No placeholder owners are shipped.
- Decide whether shared templates and contacts belong in an organization `.github` repository. Do not create it silently.
- Choose licensing and public business/security contacts.
- Select a host and domain/DNS administrator; follow `DEPLOYMENT.md`.

## Agent operating model

Use scoped access, branches/PRs, attributable commits, CI, and clear handoffs. Keep production credentials in the host or GitHub secret store. Review permissions before expanding access. Record verified settings and dates here when configuration is completed.
