module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
  },
};
