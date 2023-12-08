// const defaultTheme = require("tailwindcss/defaultTheme");
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // darkMode: false, // or 'media' or 'class'
  // mode: 'jit',
  theme: {
    boxShadow: {
      sm: '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)',
      md: '0 4px 4px rgba(0,0,0,0.16)',
      lg: '0 8px 16px rgba(0,0,0,0.24)',
    },
    extend: {
      fontFamily: {
        sans: ['Whitney', 'Open Sans', ...defaultTheme.fontFamily.sans],
        title: ['Ginto', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#5865F2',
        gray: {
          50: '#ECEDEE',
          100: '#DCDDDE',
          200: '#B9BBBE',
          300: '#8E9297',
          400: '#72767D',
          500: '#5C6067',
          550: '#4F545C',
          600: '#464950',
          700: '#36393F',
          800: '#2F3136',
          900: '#202225',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
}
