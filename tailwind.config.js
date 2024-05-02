/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'YoungSerif':'YoungSerif',
        'outfit':'outfit'
      },
      colors:{
        'Rose':"hsl(330, 100%, 98%)",
        'EggShell':"hsl(30, 54%, 90%)",
        'LGrey':"hsl(30, 18%, 87%)",
        'Brown':"hsl(30, 10%, 34%)",
        'Charcoal':"hsl(24, 5%, 18%)",
        'Raspberry':"hsl(332, 51%, 32%)",
        'Nutmeg':"hsl(14, 45%, 36%)"
      }
    },
  },
  plugins: [],
}