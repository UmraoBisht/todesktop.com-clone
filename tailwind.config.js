/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        secondary: "#f1c40f",
        tertiary: "#e74c3c",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        tech: "tech 6s infinite alternate ease-in-out;",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
        tech: {
          "0% 100%": { transform: " translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
