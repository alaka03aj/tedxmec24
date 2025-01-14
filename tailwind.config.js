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
        helvetica: ['Helvetica', 'sans-serif'],
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
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
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
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};
