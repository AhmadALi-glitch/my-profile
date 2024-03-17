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
      'secondary': '#F7F9F9',
      'overflow': '#333'
    },
    backgroundColor: {
      'primary': '#F1E8B8',
      'secondary': '#00a676',
      'side': '#eee',
      'overflow': '#333'
    },
    borderColor: {
      'primary': '#F1E8B8',
      'secondary': '#00a676',
      'side': '#eee',
      'overflow': '#333'
    },
    boxShadow: {
      'flat': 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
      'float': 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;',
      'soft': 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;'
    },
    backgroundImage: {
      'diagonal-pattern': 'repeating-linear-gradient( -45deg, #00A676, #00A676 5px, transparent 5px, transparent 25px )',
      'primary-diagonal-pattern': 'repeating-linear-gradient( 90deg, #F1E8B8, #F1E8B8 1px, transparent 1px, transparent 25px )'
    },
    fontFamily: {
      'classic': 'Cinzel',
      'handwritten': 'Caveat'
    },
    screens: {
      'xsm': '250px',
      // => @media (min-width: 350px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '868px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

