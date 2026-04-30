---
name: code-quality-checker
description: Verifies code quality, folder structure, and tech stack compliance before saving.
---

# Code Quality Checker

This skill ensures that the codebase maintains a high standard of quality, follows the defined architecture, and contains no linting or type errors.

## When to Use

- Use this skill when the user asks to "check the code", "check", "run lint", "verify", or "test the component".
- Use it to confirm that newly generated or modified code aligns with project standards.

## Instructions

- Run the `pnpm lint` command in the terminal to identify syntax or formatting errors.
- Strictly check if the code follows all the rules defined in the `.cursor/rules/` folder (especially `project-standards.mdc`).
- Verify the component structure: Ensure the code is placed in its dedicated folder with an `index.tsx` and a `styles.module.css` file.
- Verify the styling: Confirm that NO inline styles are used.
- Verify TypeScript rules: Confirm there are no `eslint-disable` comments and no missing types.
- If any issues or errors are found, fix them automatically and provide a clear explanation.
- If the code meets all standards, reply with: "Quality check passed. The code follows all project standards."