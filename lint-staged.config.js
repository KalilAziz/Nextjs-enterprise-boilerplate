module.exports = {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": "npm run lint",
  "src/**/*.{ts,tsx}": "npm run typecheck",
  "src/**/*.{spec.js,spec.jsx,spec.ts,spec.tsx}": "npm run test"
}