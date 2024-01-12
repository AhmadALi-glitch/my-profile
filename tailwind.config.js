/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
    colors: {
      'primary': '#37371F',
      'secondary': '#F7F9F9'
    },
    backgroundColor: {
      'primary': '#F1E8B8',
      'secondary': '#00A676'
    },
    boxShadow: {
      'flat': 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
      'float': 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;',
      'soft': 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;'
    },
    backgroundImage: {
      'diagonal-pattern': 'repeating-linear-gradient( -45deg, #00A676, #00A676 5px, transparent 5px, transparent 25px )'
    },
    fontFamily: {
      'classic': 'Cinzel',
      'handwritten': 'Caveat'
    }
  },
  plugins: [],
}

