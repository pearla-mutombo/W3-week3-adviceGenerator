# Advice Generator

A React-based Advice Generator that fetches random pieces of advice from the **Advice Slip API** and displays them in a clean, responsive interface.

The project was created as part of my Week 3 React assignment and demonstrates React components, hooks, API integration, automated testing, and a Git/GitHub feature-branch workflow.

## Live Project

The application can be run locally using the instructions below.

## About the Project

The Advice Generator allows users to:

* View a randomly generated piece of advice.
* Request a new piece of advice using the **Give Me Advice** button.
* See the advice displayed in a reusable Advice Card component.
* Receive advice retrieved from the Advice Slip API.
* Use the application through a simple and responsive user interface.

## Technologies Used

* React
* Vite
* JavaScript
* SCSS/CSS
* Advice Slip API
* Vitest
* React Testing Library
* Oxlint
* Git
* GitHub

## Project Structure

```text
src/
├── components/
│   ├── AdviceButton/
│   │   ├── AdviceButton.jsx
│   │   └── AdviceButton.test.jsx
│   └── AdviceCard/
│       └── AdviceCard.jsx
│
├── hooks/
│   └── useAdvice.js
│
├── services/
│   └── adviceApi.js
│
├── styles/
│   └── main.scss
│
├── App.jsx
├── App.test.jsx
├── index.css
└── main.jsx
```

## Key Features

### Advice Slip API

The application connects to the Advice Slip API to retrieve advice dynamically instead of using hard-coded advice.

The API request is handled through a dedicated service file:

```text
src/services/adviceApi.js
```

This keeps the API logic separate from the user interface.

### Custom React Hook

The project uses:

```text
src/hooks/useAdvice.js
```

The custom hook manages the advice data, loading state, error handling, and fetching new advice.

### Reusable Components

The application was broken into reusable React components.

**AdviceCard**

Displays the advice number and advice text.

**AdviceButton**

Provides the user with a button for requesting another piece of advice.

This component-based structure keeps the application organized and makes individual parts easier to test and maintain.

## Testing

Automated tests were created using Vitest and React Testing Library.

The test suite currently includes tests for:

* The main App component.
* The AdviceButton component.
* User interaction with the AdviceButton.
* Rendering behavior.

The latest test run completed successfully:

```text
Test Files: 2 passed
Tests: 5 passed
```

## Test Coverage

The latest coverage report showed:

```text
All files:
Statements: 90.32%
Branches: 71.42%
Functions: 87.5%
Lines: 90.32%
```

The main application components have 100% statement, branch, function, and line coverage in the current test suite.

## Code Quality

The project uses Oxlint for code-quality checks.

The current lint check completes with **0 errors**. There is one React warning related to calling a function that updates state from inside a `useEffect`. The application still successfully passes the test and production build checks.

## Running the Project

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

## Verification Commands

The project includes commands for checking the application before submission.

Run the complete check:

```bash
npm run check
```

Run the test suite with coverage:

```bash
npm run test:coverage
```

Create a production build:

```bash
npm run build
```

## Git and GitHub Workflow

The project was developed using a feature-branch workflow.

The main development branch is:

```text
feature/advice-generator
```

The completed work was prepared for review through a GitHub Pull Request into:

```text
main
```

This workflow provided an opportunity to review the completed work before merging it into the main branch.

## Reflection

Working on this project helped me better understand how React applications can be organized into reusable components and how a React application can communicate with an external API.

One of the most useful parts of the project was learning how to separate API functionality from the user interface. Creating the `adviceApi.js` service and the `useAdvice.js` custom hook helped me understand how data fetching, loading states, and error handling can be managed in a React application.

I also learned the importance of automated testing. Writing tests for the application and the AdviceButton helped me verify that the components behaved as expected instead of relying only on manually testing the browser.

The Git and GitHub workflow was another important learning experience. Using a feature branch, committing changes, pushing the branch to GitHub, and creating a Pull Request helped me understand how developers can organize and review changes before they become part of the main project.

Overall, this project strengthened my understanding of React components, hooks, API integration, testing, debugging, and professional Git/GitHub workflows.
