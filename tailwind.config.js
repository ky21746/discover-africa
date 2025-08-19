/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Heebo קודם (עברית), Poppins לאנגלית; אח"כ גיבויים
        sans: ['Heebo', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#116466',
          50: '#E5F3F3',
          100: '#CCE7E7',
          200: '#99CFCF',
          300: '#66B7B7',
          400: '#339F9F',
          500: '#116466',
          600: '#0E5152',
          700: '#0B3E3E',
          800: '#072A2A',
          900: '#041717',
        },
      },
    },
  },
  plugins: [],
};