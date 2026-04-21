/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tactile-purple': '#813BAF',
        'tactile-blue': '#4C99F2',
        'tactile-green': '#65B375',
        'tactile-red': '#F25959',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"SF Pro Rounded"', '"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        'tactile': '0px 8px 0px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
