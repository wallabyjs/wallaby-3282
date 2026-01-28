# Vitest Browser Mode + Wallaby.js Issue #3282

This repository is a **minimal reproducible example** for investigating [wallabyjs/public#3282](https://github.com/wallabyjs/public/issues/3282#issuecomment-3783338315).

## Issue Description

A customer reported that browser mode tests fail with Wallaby.js:

```
src/components/FormFields.test.tsx: vitest/browser can be imported only inside the Browser Mode. 
Your test is running in forks pool. Make sure your regular tests are excluded from the 
"test.include" glob pattern.
```

## Current Status

**We cannot reproduce the issue with this sample repo.** The vitest configuration matches the customer's setup with:

- Split projects (`unit` and `browser`)
- Mutually exclusive include/exclude globs
- Browser mode using `@vitest/browser-playwright`

## Project Structure

```
src/
├── components/     # Browser mode tests (uses @vitest/browser-playwright)
│   ├── Button.test.tsx
│   └── Input.test.tsx
├── hooks/          # Unit tests (node environment)
│   └── useCounter.test.tsx
└── utils/          # Unit tests (node environment)
    └── math.test.tsx
```

## Vitest Configuration

The config uses vitest projects with:
- **unit project**: Runs tests in `src/hooks/` and `src/utils/` with node environment
- **browser project**: Runs tests in `src/components/` with playwright browser

## Running Tests

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run only unit tests
npm run test:unit

# Run only browser tests
npm run test:browser
```