/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003b4f',
        'primary-light': '#38657b',
        'primary-dark': '#001627',

        secondary: '#ff7565',
        'secondary-light': '#ffa793',
        'secondary-dark': '#c7443a',
      },
    },
  },
  plugins: [],
};
