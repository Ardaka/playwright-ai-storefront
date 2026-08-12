# Copilot instructions

- Use TypeScript and Playwright Test.
- Prefer user-facing locators (`getByRole`, `getByLabel`) and intentional `data-testid` hooks.
- Do not use fixed sleeps. Wait for observable UI or network state.
- Keep reusable page behavior in `tests/pages` and assertions in specs.
- Every new critical path needs a `@smoke` or `@regression` tag.
- Mock third-party calls so the suite remains deterministic.
- Before proposing a change, run `npm run typecheck` and the narrowest relevant test.

