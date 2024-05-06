/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shuffle: {
          "0%": { left: 0, top: 0 },
          "100%": {},
        },
      },
    },
  },
  plugins: [],
};
