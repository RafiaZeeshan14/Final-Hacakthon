/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #88C343 0%, #285192 40%)',
      },
    },
  },
  plugins: [],
}

