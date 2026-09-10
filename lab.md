# Student Lab — GitHub Repository Workflow

## Goal
Work as a team of 3–4. Improve the development workflow around this small Node.js service.

## Tasks
1. Create/fork this repository as `platform-demo`.
2. Create a branch named `feature/add-version-endpoint`.
3. Add `GET /version`, returning:
```json
{"service":"platform-demo","version":"1.0.0"}
```
4. Add a test for the feature.
5. Add `.github/pull_request_template.md`. It must ask: What changed? Why? Testing? Risks? Checklist.
6. Add `.github/CODEOWNERS`. For class, use `* @YOUR-GITHUB-USERNAME` or an instructor-provided team.
7. Open a PR against `main`.
8. Configure `main`: require PR, require 1 approval, resolve conversations, block direct pushes/force pushes. Require CI status checks when CI is available.
9. Have another teammate review, comment, approve, and merge.
10. Discuss: what should the platform automate if this had to be repeated for 100 repositories?

## Definition of done
- Feature + test
- PR opened
- PR template used
- CODEOWNERS present
- main protected
- teammate review
- merged PR
