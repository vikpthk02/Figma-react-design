/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { quicksand: "Quicksand" } },
    colors: {
      white: "#fff",
      black: "#000",
      gray: { "100": "#f6f6f6", "200": "rgba(216, 216, 216, 0)" },
      orange: "#e97000",
    },
    fontSize: { xs: "10px", sm: "13px", base: "14px", lg: "15px" },
  },
  corePlugins: { preflight: false },
};
