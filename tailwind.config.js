/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': "url('./app/Components/Assets/Ellipse.png')",
      },
    },
  },
  plugins: [],
}

