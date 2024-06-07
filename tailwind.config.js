/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        "theme-red": "#c00000",
      },
      fontFamily: {
        Barlow_Condensed: ["Barlow Condensed", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
