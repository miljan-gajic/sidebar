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
        "section-dark": "var(--section-dark)",
        "sidebar-w": "var(--sidebar-w)",
        "shadow-light": "var(--shadow)",
      },
    },
  },
  plugins: [],
};
