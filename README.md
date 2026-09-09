# Advice Generator App

A responsive React Advice Generator application built with Vite and the Advice Slip API.

The application fetches random pieces of advice and displays them in a responsive card layout. Users can request new advice, with loading, error, retry, and cooldown states included for a smoother experience.

## Features

- Responsive mobile and desktop design
- React components for the advice card and button
- Advice Slip API integration using Axios
- Environment variable configuration with Vite
- Loading state while fetching advice
- Error handling with retry support
- Request cooldown to prevent rapid repeated requests
- Request cancellation with `AbortController`
- Automated tests using Vitest and React Testing Library
- GitHub Actions continuous integration
- Netlify deployment configuration
- Copy Advice functionality

## Technologies

- React
- Vite
- Axios
- Sass / SCSS
- Vitest
- React Testing Library
- GitHub Actions
- Netlify
- Advice Slip API

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pearla-mutombo/W3-week3-adviceGenerator.git
cd W3-week3-adviceGenerator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the environment variable

Create a `.env` file in the project root:

```env
VITE_ADVICE_API_URL=https://api.adviceslip.com
```

The `.env` file is intentionally excluded from GitHub. A `.env.example` file is included in the repository so other developers know which environment variable is required.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Available Scripts

### Start development server

```bash
npm run dev
```

### Run linting

```bash
npm run lint
```

### Run tests

```bash
npm run test:run
```

### Run tests in watch mode

```bash
npm run test
```

### Build for production

```bash
npm run build
```

### Run all quality checks

```bash
npm run check
```

The `check` command runs linting, tests, and the production build.

## Testing

The project uses Vitest and React Testing Library.

The automated test suite covers:

- Advice button interaction
- Button disabled state while loading
- Loading display
- Successful API response
- Error handling
- Mocked API responses

Run the complete test suite with:

```bash
npm run test:run
```

## Continuous Integration

GitHub Actions runs the project's quality checks automatically.

The workflow verifies:

1. Dependencies can be installed.
2. Linting passes.
3. Automated tests pass.
4. The production build succeeds.

## Deployment

This project is configured for Netlify deployment using `netlify.toml`.

### Netlify build settings

- Build command: `npm run build`
- Publish directory: `dist`

The Netlify environment must also include:

```text
VITE_ADVICE_API_URL=https://api.adviceslip.com
```

### Live Deployment

**Netlify URL:**
https://benevolent-dango-c28834.netlify.app

## Project Structure

```text
src/
├── components/
│   ├── AdviceButton/
│   │   ├── AdviceButton.jsx
│   │   └── AdviceButton.test.jsx
│   └── AdviceCard/
│       └── AdviceCard.jsx
├── hooks/
│   └── useAdvice.js
├── services/
│   └── adviceApi.js
├── test/
│   └── setup.js
├── App.jsx
├── App.test.jsx
├── main.jsx
└── styles/
    └── main.scss
```

## API

This project uses the Advice Slip API:

https://api.adviceslip.com

The API provides random pieces of advice that are displayed in the application.

## Course Project

This project was completed as part of a three-day React course project based on the Frontend Mentor Advice Generator App challenge.

The project demonstrates:

- React component development
- API integration
- Custom React hooks
- Environment configuration
- Responsive styling
- Automated testing
- Continuous integration
- Production deployment
- Clipboard functionality

## Reflection

### What I Learned

Working on the Advice Generator project gave me an opportunity to strengthen my understanding of React and apply several concepts that I have been learning throughout the course. I learned how to break an application into reusable components, including the `AdviceCard`, `AdviceButton`, and `CopyAdviceButton` components. I also gained more experience working with React state, effects, custom hooks, and asynchronous API requests.

One of the most valuable parts of this project was learning how to separate API logic from the user interface. Creating an API service and the `useAdvice` custom hook helped me understand how applications can organize data-fetching logic separately from presentation components. I also learned how environment variables can be used to configure an API URL without hard-coding configuration throughout the application.

The testing portion of the assignment helped me understand the importance of verifying application behavior instead of relying only on manually testing the browser. Using Vitest and React Testing Library, I learned how to test component interactions, loading states, successful API responses, error states, and clipboard functionality. I also learned how mocked API responses make tests more reliable and predictable.

I also gained experience with Git and GitHub workflows. Creating separate feature branches and pull requests for each stage of the project helped me better understand how developers organize changes in a collaborative development environment. Working with GitHub Actions also showed me how automated quality checks can help catch problems before changes are merged into the main branch.

Finally, deploying the application to Netlify helped me understand the difference between a project working locally and a project being successfully deployed to a production environment. I learned that environment variables used by Vite need to be configured in the deployment environment as well as locally.

### Challenges and How I Solved Them

One of the biggest challenges I encountered was organizing the project so that the Day 1, Day 2, Day 3, and Copy Advice requirements could each be completed through separate branches and pull requests. Because the project needed to follow a specific GitHub workflow, I had to carefully manage branches, commits, merges, and conflicts. I learned that when branches have different versions of the same files, Git may require conflicts to be resolved manually before a pull request can be merged. I was able to resolve these conflicts by comparing the changes, keeping the correct versions of the files, running the project's quality checks, and confirming that the application still worked before merging.

Another challenge was making sure the API integration handled more than just a successful request. The application needed loading, error, retry, cooldown, and request-cancellation behavior. I solved these challenges by creating the `useAdvice` custom hook and separating the API request into an `adviceApi` service. This helped keep the application logic organized and made it easier to manage the different states of an API request.

Testing also presented challenges because browser-specific functionality and React testing require the correct testing environment. I encountered issues related to the Vitest configuration and the `jsdom` environment while setting up the tests. I learned how important the testing configuration is and how `@testing-library/jest-dom` provides useful assertions for testing DOM behavior. After correcting the configuration and restoring the appropriate test setup, the complete test suite passed successfully.

The Copy Advice feature introduced another learning opportunity because it required interaction with the browser Clipboard API. I learned how to mock `navigator.clipboard.writeText` in automated tests so that clipboard behavior could be tested without depending on the actual system clipboard. I also added visible `Copied!` feedback so that users receive confirmation when their advice has been copied.

The final challenge was deployment. The application worked correctly locally, but Netlify required the `VITE_ADVICE_API_URL` environment variable to be configured in the production environment. I learned that local `.env` files should not be committed when they contain environment-specific configuration and that the required variables need to be configured separately in the deployment platform. After adding the environment variable in Netlify, the production deployment built successfully and the application worked correctly online.

### Key Takeaways

One of my biggest takeaways from this project is that building an application is not only about making the interface work. A professional application should also be organized, tested, documented, version-controlled, and deployable.

I learned the value of breaking a larger project into smaller features and completing each feature through its own branch and pull request. This made the development process more organized and gave me a better understanding of how professional development teams review and merge changes.

I also learned that errors and unexpected problems are an important part of software development. Instead of becoming discouraged when I encountered Git conflicts, testing errors, configuration problems, or deployment issues, I learned to investigate the error, understand what caused it, make one change at a time, and test the result. This helped me become more comfortable with debugging and troubleshooting.

Another important takeaway was the value of automated testing. Tests provide confidence that existing functionality continues to work as new features are added. By the end of the project, the application had automated tests covering the main application states, button interactions, API behavior, and Copy Advice functionality.

Most importantly, this project helped me become more confident in my ability to take a React application from initial setup through development, testing, version control, and production deployment.

### Future Improvements

If I continued developing the Advice Generator, I would consider adding additional accessibility improvements, more detailed user feedback for network failures, and additional automated tests for edge cases. I could also improve the visual design of the Copy Advice feature so that it is even more closely integrated with the overall interface.

I would also consider adding features such as a history of previously generated advice, the ability to favorite advice, social sharing options, or additional customization while keeping the application simple and user-friendly.

### Final Reflection

Overall, this project was a valuable learning experience because it allowed me to bring together many different parts of modern frontend development in one application. I strengthened my React skills, learned more about API integration and asynchronous state management, practiced automated testing, improved my Git and GitHub workflow, worked with CI, and successfully deployed a production application to Netlify.

The project also taught me that solving problems is a major part of becoming a developer. Each challenge gave me an opportunity to understand the technology better and become more confident in troubleshooting. My biggest takeaway is that persistence, careful debugging, testing, and a willingness to learn from mistakes are just as important as writing the code itself.
