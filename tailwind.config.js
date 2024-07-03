/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3238f2",
        "secondary": "#f1c40f",
        "tertiary": "#e74c3c",
      },
      fontFamily: {
        "display": ["Poppins", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
