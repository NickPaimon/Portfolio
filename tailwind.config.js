/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'float-0': 'float 3s ease-in-out infinite',
        'float-1': 'float 3s ease-in-out 100ms infinite',
        'float-2': 'float 3s ease-in-out 200ms infinite',
        // ... and so on for each letter ...
      },
    },
    variants: {
      extend: {
        opacity: ['focus'],
      },
    },
    plugins: [],
  },
};
