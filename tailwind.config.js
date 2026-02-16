/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        accent: "#22c55e",
        dark: "#020617"
      },
      animation: {
        "gradient-slow": "gradientShift 12s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      backgroundSize: {
        "200": "200% 200%"
      }
    }
  },
  plugins: []
};
