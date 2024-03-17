/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        firstColor: 'hsl(176, 88%, 27%)',
        firstColorAlt: 'hsl(129, 44%, 94%)',
        secondColor: 'hsl(34, 94%, 87%)',
        titleColor: 'hsl(0, 0%, 13%)',
        textColor: 'hsl(154, 13%, 32%)',
        textColorLight: 'hsl(60, 1%, 56%)',
        bodyColor: 'hsl(0, 0%, 100%)',
        containerColor: 'hsl(0, 0%, 93%)',
        borderColor: 'hsl(129, 36%, 85%)',
        borderColorAlt: 'hsl(113, 15%, 90%)',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        leagueSpartan: ["League Spartan", "sans-serif"]
      }
    },
  },
  plugins: [],
}

