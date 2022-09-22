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
      },
    },
  },
  plugins: [],
};
