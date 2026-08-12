# How AI was used

This project demonstrates an **AI-assisted testing workflow**, not “AI wrote everything.”

## Example workflow

1. I gave Copilot the acceptance criteria for search and cart behavior.
2. Copilot suggested a first test outline and edge cases.
3. I replaced brittle CSS selectors with user-facing locators and test IDs.
4. I moved repeated actions into a small Page Object.
5. I reviewed assertions, mocked the product API, and ran the suite locally and in CI.

## Prompt example

> Review the storefront acceptance criteria. Suggest Playwright tests for the happy path and one meaningful edge case. Use observable assertions, avoid fixed waits, and explain what should be mocked.

## Human decisions

- Search and cart are the strongest interview demo because they show UI state, filtering, and totals.
- The product API is mocked so tests are fast and repeatable.
- The suite runs Chromium in CI and includes a mobile project for local cross-device checks.
- AI suggestions are reviewed like any other code contribution.

## What I would add in a production project

- Authentication state fixtures
- Visual regression baselines
- Accessibility scanning
- Test data cleanup through API fixtures
- Sharding for a larger test suite

