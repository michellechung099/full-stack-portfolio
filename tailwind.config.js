/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          300: '#5eead4',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
      },
    },
  },
  plugins: [],
};
