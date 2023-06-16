/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "var(--light-bg)",
        "dark-bg": "var(--dark-bg)",
        "badge-clr": "var(--badge-clr)",
        "light-font-clr": "var(--light-font-clr)",
        "light-hover-clr": "var(--light-hover-clr)",
        "light-pressed-clr": "var(--light-pressed-clr)",
        "dark-font-clr": "var(--dark-font-clr)",
        "dark-hover-clr": "var(--dark-hover-clr)",
        "dark-pressed-clr": "var(--dark-pressed-clr)",
        "section-light": "var(--section-light)",
        "section-dark": "var(--section-dark)",
      },
    },
  },
  plugins: [],
};
