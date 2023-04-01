/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " rgb(247, 243, 240)",
        secondary: " rgb(235, 195, 166)",
        accent: "rgb(215, 142, 100)",
        footer: "rgb(202, 163, 134)",
      },
    },
  },
  plugins: [require("daisyui")],
};
