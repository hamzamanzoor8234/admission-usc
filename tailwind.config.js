/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D8C6E",
        secondary: "#E2E2E2",
      },
      backgroundImage: {
        "header-pattern": "url('./public/Captureccc 1.png')",
        "header-banner": "url('./public/Group 17.png')",
      },
    },
  },
  plugins: [],
};
