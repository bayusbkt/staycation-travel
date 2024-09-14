/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#152C5B",
        secondary: "#3252DF",
        tertiary: "#02BEE3"
      },
      boxShadow: {
        'blue': '0 4px 6px rgba(0, 0, 255, 0.3)', 
      },
    },
  },
  plugins: [],
};
