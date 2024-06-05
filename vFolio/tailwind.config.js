/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans - serif'],
      },
      colors: {
        'bg-color': '#091420',
        'bg-dark-color': '#0c1a28',
        'primary-color': '#4fe98c',
      },
      width: {
        'custom-image-width': '200px',
      },
    },
  },
  plugins: [],
};
