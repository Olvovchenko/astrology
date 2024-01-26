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
        "stars-one": "url('../zvezdy.png')",
        "natal-circle": "url('../chartnatal1.jpg')",
        "sun-circle": "url('../chartnatal3.jpg')",
        "hand-space": "url('../purplenight.jpg')",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translate(100%,0)" },

          "100%": { transform: "translate(-100%,0)" },
        },
        newslide: {
          "0%": { transform: "translate(0,0)" },

          "100%": { transform: "translate(-100%,0)" },
        },
      },
      animation: {
        "spin-slow": "spin 65s linear infinite",
        "spin-reverse": "spin 50s linear infinite reverse",
        "scroll-slide": "slide 400s linear infinite",
        "slide-delay": "slide 400s linear infinite -200s",
      },
    },
  },

  plugins: [],
};
