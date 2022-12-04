/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
  variants:{
    extend :{
      display:["group-hover"],
    }
  }
}
