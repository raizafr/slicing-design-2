/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "side-desktop": 'url("../public/assets/images/bg-sidebar-desktop.svg")',
        "side-mobile": 'url("../public/assets/images/bg-sidebar-mobile.svg")',
      },
      fontFamily: {
        custom: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
