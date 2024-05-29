/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "theme-red": "#c00000",
      },
      fontFamily: {
        Barlow_Condensed: ["Barlow Condensed", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
