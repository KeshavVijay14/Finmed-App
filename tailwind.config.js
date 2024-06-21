/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D42",
        secondary: "#2C2C6A",
        accent: "#33F9FF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        trebuchet: ['"Trebuchet MS"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
