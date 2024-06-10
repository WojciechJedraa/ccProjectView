/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        "fade-in": 'fade-in 0.2s ease-in-out',
      } 
      /*       keyframes: {
        slideIn: {
          from: {
            opacity: "0",
            transofrm: "translateX(-50px)",
          },
          to: {
            opacity: "1",
            transofm: "translateX(0)",
          },
        },
      },

      animation: {
        slideIn: {
          slidein: "slideIn 3s ease 300ms",
        },
      }, */
    },
  },
  plugins: [],
};
