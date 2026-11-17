/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0c',
          card: '#121218',
          accent: '#6366f1',
          glow: '#a855f7',
        }
      }
    },
  },
  plugins: [],
}