module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepBlue: "#0F172A",
        slateGray: "#1E293B",
        skyBlue: "#38BDF8",
        lightGray: "#F1F5F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class", // Enable dark mode using the 'class' strategy
  plugins: [],
};