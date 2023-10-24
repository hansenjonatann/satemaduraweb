/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB800",
        secondary: "#FFFFFF",
      },
      backgroundImage: {
        my: "url('./assets/images/login-bg.png')"
      }
    },
  },
  plugins: [],
};
