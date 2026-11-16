<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
=======
# Shopping Cart Testing Assignment

## Testing Strategy & Reflection

For this assignment, I used Vitest and React Testing Library to create both unit tests and component tests for the shopping cart application. 

The utility function tests focused on validating calculations, formatting, and edge cases such as empty arrays, boundary discount values,

invalid quantities, and floating-point math. For the React component, I tested real user behaviors including adding items, removing items, 

updating quantities, clearing the cart, and verifying that totals were calculated correctly.

Through this project, I learned how important automated testing is for verifying application behavior and preventing regressions. 

I gained experience using assertions such as toBe, toEqual, and toBeCloseTo, as well as using userEvent to simulate realistic user interactions. 

Generating code coverage reports helped me identify untested areas of the application and improve overall test quality. Vitest provided a fast and

efficient testing environment that made it easy to run and maintain tests throughout development.

## Running the Application

npm install
npm run dev

## Running Tests

npm test

## Running Tests with Coverage

npm run test:coverage

## Coverage Report

After generating coverage, open:

coverage/index.html
to view the HTML coverage report in the browser.
>>>>>>> 3746c1f9a8493c8aab0d9ff7ca5d808d4fdd7710
