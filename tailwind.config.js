module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Indigo-900
        secondary: "#2563eb", // Blue-600
        accent: "#fbbf24" // Amber-400
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideDown: "slideDown 0.4s ease-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
