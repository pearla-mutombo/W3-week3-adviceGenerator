import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // pretend the tests are running inside a browser
    setupFiles: "./src/test/setup.js", // before running tests, load our testing setup file
  },
});
