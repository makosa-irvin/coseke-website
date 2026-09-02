# Security Policy

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Instead, use GitHub's private vulnerability reporting for this repository
(Security tab → "Report a vulnerability"), or email the maintaining team
directly at **sales.ke@coseke.com** with:

- A description of the issue and its potential impact
- Steps to reproduce, or a proof of concept
- Any suggested remediation, if you have one

We aim to acknowledge reports within 3 business days.

## Scope

This is a marketing website with no user accounts and no storage of
sensitive personal data beyond contact-form submissions. Reports about the
contact form (`src/app/api/contact/route.ts`), dependency vulnerabilities,
and anything that could expose data or deface the site are all in scope.

## Supported versions

Only the `main` branch / latest deployed version is supported. There are no
maintained older versions of this site.
