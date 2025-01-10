module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths to match your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"]
      },
      colors: {
        primary: "#D32F2F", // Red
        secondary: "#1ABC9C", // Teal
      },
      container: { 
        center: true,
        padding: {
          default: '1rem',
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
};
