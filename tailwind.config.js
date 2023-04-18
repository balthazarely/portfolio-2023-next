/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("daisyui")],
  daisyui: {
    themes: [
      "dracula",
      "winter",
      "emerald",
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "--rounded-btn": "2rem",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#9059ED",
          "base-content": "white",
          "--rounded-btn": "2rem",
        },
      },
    ],
  },
};
