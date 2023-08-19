/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],

  theme: {
    extend: {
      spacing: {
        "24/50": "48.8%",
      },
      backgroundImage: {
        "sky-one": "url('../skynight.png')",
        "blue-tree": "url('../bluetree.png')",
      },
    },
  },

  plugins: [],
};
