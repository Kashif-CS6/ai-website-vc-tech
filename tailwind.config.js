/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-background-start": "rgba(214, 219, 200, 0.8)",
        "custom-background-used": "rgba(214, 219, 200, 0.1)",
        "custom-background-end": "rgba(255, 255, 255, 0.8)",
        "custom-bluish": " rgba(6, 78, 221, 0.1)",
        "grey-small": "rgb(229,231,235)",
        "normal-white": "rgb(255,255,255)",
        "normal-black": "rgb(0,0,0)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(to bottom, transparent, var(--custom-background-start), var(--custom-background-end), var(--custom-background-end))",
      },
    },
  },
  plugins: [],
};
