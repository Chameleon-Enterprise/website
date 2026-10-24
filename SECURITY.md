# Security policy

## System and scope

This public repository contains the Chameleon Enterprise static marketing website and repository automation. Its intended domain is `www.chameleonenterprise.com`. Employee Login points to `https://id.chameleonenterprise.com`, a separate Pocket ID deployment.

Review HTML, CSS, assets, validation scripts, workflows, and deployment configuration here. Hosting, DNS, Pocket ID configuration, and organization permissions have not been verified by the existence of these files.

## Threat model and boundaries

Public visitors are untrusted. Repository writers and workflow maintainers can affect public content; restrict write access to authorized maintainers. Pull request content, issue text, external pages, and dependency outputs are untrusted inputs to automation and agents.

The site does not handle sessions, accept submissions, or store customer or employee information. Navigating to Pocket ID crosses into a separate authentication system. The static site does not verify identities or grant access to protected resources.

## Security invariants

- Never commit credentials, tokens, private keys, private customer/HR records, or Pocket ID client secrets.
- Keep Employee Login on the owner-approved HTTPS destination. Do not derive it from visitor-controlled input.
- Do not introduce credential or personal-data collection without a separately designed and reviewed backend and data flow.
- Protected applications must enforce authentication and authorization themselves. A redirect or browser flag is not access control.
- Minimize workflow permissions. Never execute untrusted pull-request content in a privileged context or expose secrets to forked pull requests.
- Review new dependencies, scripts, external assets, forms, analytics, and embeds for additional trust boundaries.
- Serve production over HTTPS; verify host configuration instead of inferring it from source.

## Reportable findings

Report reachable script injection, credential/private-data exposure, unauthorized content or deployment modification, malicious login redirects, and unsafe workflow execution. Explain preconditions, reachability, and impact. Header findings require deployment evidence; source files do not prove which headers the host sends.

## Exclusions and risk decisions

No finding classes are intentionally excluded and no specific risks have been accepted. External authentication and infrastructure remain assessment dependencies; their absence here is not evidence of security. Future suppressions and risk acceptance require an explicit owner decision.

## Reporting

Do not publish secrets or sensitive exploit details in issues. Use GitHub private vulnerability reporting if offered in the repository Security tab; otherwise contact a repository administrator privately through an established channel. A dedicated security contact and private-reporting availability still need owner confirmation.

## Limitations

This initial policy is not a security audit. Hosting, TLS, DNS, Pocket ID, branch protection, secret scanning, and organization access require separate verification. Revisit this policy if adding a backend, OIDC client, forms, analytics, or dependencies.
