/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        borderLoad: {
          '0%': {
            'clip-path': 'polygon(0% 0%, 0% 0%, 0% 0%)',
            transform: 'rotate(-45deg)',
          },
          '100%': {
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transform: 'rotate(-45deg)',
          },
        },
      },
      animation: {
        'borderLoad': 'borderLoad 1s ease-in-out forwards',
      },
      colors: {
        'darkCol': '#333333',
      }
    },
  },
  plugins: [],
}

