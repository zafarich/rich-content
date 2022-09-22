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
      },

      borderRadius: {
        none: "0",
        DEFAULT: "8px",
        10: "10px",
        12: "12px",
      },
    },
  },
  plugins: [],
};
