/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("daisyui")],
  daisyui: {
    themes: [
      // "light",
      // "dark",
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "--rounded-btn": "2rem",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "base-content": "white",
          "--rounded-btn": "2rem",
        },
      },
    ],
  },
};
