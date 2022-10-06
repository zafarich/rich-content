module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          grey: "#333333",
        },
        grey: {
          DEFAULT: "#D5D8DF",
          light: "#F7F7F7",
        },
        white: {
          DEFAULT: "#fff",
          100: "#F5F7F9",
          200: "#EFF3F6",
          300: "#E9EBEF",
        },
        yellow: {
          DEFAULT: "#FBC100",
        },
        red: {
          DEFAULT: "#f91155",
        },
      },

      borderRadius: {
        none: "0",
        DEFAULT: "8px",
        10: "10px",
        12: "12px",
      },
      screens: {
        sm: {
          max: "640px",
        },
        md: {
          max: "768px",
        },
        lg: {
          max: "1024px",
        },
        xl: {
          max: "1280px",
        },
        "2xl": {
          max: "1536px",
        },
      },
    },
  },
  plugins: [],
};
