module.exports = {
  darkMode : "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      fontFamily: {
        'poppins': "poppins",
      }
    },
  },
  plugins: [],
}