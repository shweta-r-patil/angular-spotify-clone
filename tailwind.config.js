/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "background-base": "var(--background-base)",
        "background-highlight": "var(--background-highlight)",
        "background-press": "var(--background-press)",
        "background-elevated-base": "var(--background-elevated-base)",
        "background-elevated-highlight": "var(--background-elevated-highlight)",
        "background-elevated-press": "var(--background-elevated-press)",
        "background-tinted-base": "var(--background-tinted-base)",
        "background-tinted-highlight": "var(--background-tinted-highlight)",
        "background-tinted-press": "var(--background-tinted-press)",
      },
    },
  },
  plugins: [],
};
