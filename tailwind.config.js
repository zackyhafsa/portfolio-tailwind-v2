/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      roboto: ["roboto"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#4338ca",
      },
      screens: {
        "2xl": "1380px",
      },
    },
  },
  plugins: [],
};
