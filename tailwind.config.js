/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "var(--light-bg)",
        "light-bg-content": "var(--light-bg-content)",
        "dark-bg": "var(--dark-bg)",
        "dark-bg-content": "var(--dark-bg-content)",
        "badge-clr": "var(--badge-clr)",
        "light-font-clr": "var(--light-font-clr)",
        "light-hover-clr": "var(--light-hover-clr)",
        "light-pressed-clr": "var(--light-pressed-clr)",
        "dark-font-clr": "var(--dark-font-clr)",
        "dark-hover-clr": "var(--dark-hover-clr)",
        "dark-pressed-clr": "var(--dark-pressed-clr)",
        "section-light": "var(--section-light)",
        "section-hover-light": "var(--section-hover-light)",
        "section-hover-light-border": "var(--section-hover-light-border)",
        "section-active-light": "var(--section-active-light)",
        "section-active-light-border": "var(--section-active-light-border)",
        "section-dark": "var(--section-dark)",
        "section-hover-dark": "var(--section-hover-dark)",
        "section-hover-dark-border": "var(--section-hover-dark-border)",
        "section-active-dark": "var(--section-active-dark)",
        "section-active-dark-border": "var(--section-active-dark-border)",
        "border-clr": "var(--border-clr)",
        "tooltip-clr": "var(--tooltip-clr)",
      },
      height: {
        "badge-height": "var(--badge-height)",
      },
      width: {
        "badge-button-width": "var(--badge-button-width)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      gridTemplateColumns: {
        sidebar: "250px auto", //for sidebar layout fixed size taken from design files
        "sidebar-collapsed": "66px auto", //for collapsed sidebar layout fixed size taken from design files
      },
    },
  },
  plugins: [],
};
