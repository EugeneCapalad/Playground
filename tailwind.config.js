/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#1B8057',
        primaryBeige: '#D7C37A',
        secondaryBeige: '#EDE9A3',


        primaryTeal: '#219F94',
        secondaryGreen: '#C1DEAE',
        lightBeige: '#F2F5C8',
        darkBeige: '#E8E8A6',

        toDoPrimary: '#185ABD',
        toDoSecondary: '#4AB0F1',
        disabled: '#b4b4b4',

        primary: '#0048d9',
        bin: '#cc1b1b'
      },

      margin: {
        26: '6.1rem'
      }
    },
  },
  plugins: [],
}
