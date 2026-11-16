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

<img width="706" height="284" alt="Screenshot 2026-11-16 at 11 32 07 AM" src="https://github.com/user-attachments/assets/7a36b194-1e54-4125-a8dc-5f6665cd454f" />

## Running Tests with Coverage

npm run test:coverage

## Coverage Report

<img width="796" height="469" alt="Screenshot 2026-11-16 at 11 28 11 AM" src="https://github.com/user-attachments/assets/1c8ef9d1-bd88-4277-be15-49ad742bebfa" />

After generating coverage, open:

coverage/index.html
to view the HTML coverage report in the browser.

## Coverage Screenshot 

<img width="1234" height="801" alt="Screenshot 2026-11-16 at 10 23 42 AM" src="https://github.com/user-attachments/assets/db9efe48-89ba-485a-aaa6-a59901b4ce68" />

