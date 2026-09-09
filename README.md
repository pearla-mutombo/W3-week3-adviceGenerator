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

**Netlify URL:** To be added after deployment.

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
