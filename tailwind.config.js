/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {extend: {
      
      // that is animation class
      animation: {
        fade: 'fade 2s ease-in-out',
        fadeimage: 'fade 0.5s ease-in-out',
        movebloss: 'movebloss 2s ease-in-out',
        movebutter:'movebutter 2s ease-in-out',
        movebubble:'movebubble 2s ease-in-out',
    
      },

      // that is actual animation
      keyframes: theme => ({
        movebloss:{
          '0%' :{opacity: 0,
          marginLeft: 650},
          '100%': {opacity: 1,
            marginLeft: 300}
        },
        movebutter:{
          '0%' :{opacity: 0,
            marginLeft: 0},
          '100%': {opacity: 1,
            marginLeft: 300}
        },
        movebubble:{
          '0%' :{opacity: 0,
            marginLeft: 0},
          '100%': {opacity: 1,
            marginLeft: 300}
        },
        fade:{
          '0%' :{opacity: 0},
          '1000%' :{opacity: 1,}
        },
      }),
    },
  },
  variants: {},
  plugins: [],
}