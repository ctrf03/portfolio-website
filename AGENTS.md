# Project instructions

## Purpose
This is Clinton's personal portfolio and a learning project for
graduate DevOps, cloud, platform, and SRE roles.

Prioritise understandable implementation and practical learning.
The owner should be able to explain the resulting system in interviews.

## Working approach
- Before editing, inspect the relevant files, package.json, and Git status.
- Briefly explain your proposed approach and the files likely to change.
- For clear, scoped implementation requests, proceed after explaining.
  If I ask only for advice or a plan, do not edit files.
- Ask before making major architectural changes or adding dependencies.
- Keep changes focused on the requested task.
- Preserve unrelated changes and existing documentation.
- Follow existing project conventions and prefer simple solutions.

## Content accuracy
- Never invent achievements, metrics, dates, job titles, credentials,
  project contributions, or links.
- Use information I provide or verified project content.
- If necessary information is missing, ask or use an explicitly marked
  placeholder.
- Clearly distinguish planned features from implemented features.
- Do not describe incoming internships as completed experience.

## Learning and explanations
- Explain important decisions and unfamiliar concepts in plain language.
- Explain why a command or configuration is needed, not just what to run.
- Avoid overwhelming me with a line-by-line explanation unless requested.
- For infrastructure changes, explain resources, permissions, costs,
  and failure implications before implementation.

## Frontend
- Use the existing React + Vite setup.
- Keep the website responsive and accessible.
- Use semantic HTML, visible keyboard focus, and readable contrast.
- Preserve normal scrolling.
- Respect reduced-motion preferences when adding animations.
- Do not add frameworks or animation libraries without discussing them.

## Verification
- Run relevant checks available in package.json after code changes.
- Do not disable lint rules or remove tests simply to make checks pass.
- Report the exact checks run, their results, and anything not verified.
- For UI changes, identify what still needs manual browser testing.
- Never claim a check passed if it was not run.

## Git and external actions
- Work on the current branch; do not switch branches without asking.
- Do not commit, push, merge, or deploy unless I explicitly request it.
- Do not discard local work or rewrite Git history without permission.
- Never put secrets in code, documentation, logs, or Git remote URLs.
- Do not create paid cloud resources, apply Terraform changes,
  or destroy infrastructure without explicit approval.

## Completion summary
After a task, briefly explain:
1. What changed and why.
2. What checks passed or failed.
3. What I should review or test manually.
4. Any remaining limitations or next steps.