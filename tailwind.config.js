/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#E7F8FF',
        'custom-text-blue':'background: #172B4D',
      },
    },
  },
  plugins: [],
}

