/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaCompressed: ['Helvetica Compressed', 'sans-serif'],
        helveticaLight: ['Helvetica Light', 'sans-serif'],
      },
      colors: {
        primary: {
          red: '#EB0028',
          deepRed: '#8C0018',
          wineRed: '#6F0012',
          burgandy: '#4E000D'
        },
        secondary: {
          white1: '#FAFAFA',
          white2: '#F5F5F5',
          black1: '#161616',
          black2: '#737373'
        }
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'top center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'bottom center',
          },
        },
      },

    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};
