# Playwright AI Storefront

[![Playwright checks](https://github.com/Ardaka/playwright-ai-storefront/actions/workflows/playwright.yml/badge.svg)](https://github.com/Ardaka/playwright-ai-storefront/actions/workflows/playwright.yml)

A portfolio-sized UI automation project: a polished demo store, reliable Playwright tests, and a documented GitHub Copilot workflow.

![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.62-2EAD33?logo=playwright&logoColor=white)
![AI assisted](https://img.shields.io/badge/AI-assisted-6D5EF6)

## What this demonstrates

- End-to-end UI tests with Playwright and TypeScript
- Page Object pattern without over-engineering
- Stable locators, API mocking, tagged smoke/regression coverage
- Desktop and mobile browser projects
- HTML reports, screenshots, video, and trace on failure
- CI with GitHub Actions
- A realistic human + Copilot workflow

## Test scenarios

| Scenario | Technique |
|---|---|
| Search and add a product | Page Object, API mock, multi-step assertion |
| Empty search result | Edge-case validation |
| Desktop and Pixel 7 | Playwright projects |
| Failed CI run | Trace, screenshot, video, HTML report |

## Run locally

```bash
npm install
npx playwright install chromium
npm test -- --project=chromium
```

Useful commands:

```bash
npm run test:smoke
npm run test:ui
npm run report
```

## Project structure

```text
src/                         demo storefront
tests/pages/store.page.ts    reusable page actions
tests/storefront.spec.ts     readable business scenarios
.github/workflows/           CI pipeline
.github/copilot-instructions.md
docs/AI-WORKFLOW.md          where AI helped and where I reviewed
```

## AI contribution

Copilot was used to brainstorm scenarios, review edge cases, and improve the first draft. I owned test selection, locator strategy, mocking, refactoring, and verification. See [the AI workflow](docs/AI-WORKFLOW.md).

## Interview demo (2 minutes)

1. Run `npm run test:ui` and show the search/cart test.
2. Point out the API mock and Page Object.
3. Open a trace or HTML report.
4. Explain how Copilot accelerated drafting while review and test design stayed human-owned.

## Roadmap

- [ ] Accessibility test with axe-core
- [ ] Visual comparison for the product grid
- [ ] Authenticated checkout fixture

## License

MIT

