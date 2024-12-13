import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#1F2021',
        'bg-dark': '#1B1C1E',
        'bg-light': '#272423',
        'primary': '#7DC9FF',
        'text': '#F1F6F6',
        'accent' : '#B8B8B8',
        'dark-accent': '#878787',
      },
      maxWidth: {
        'default': "50rem",
      },
      dropShadow: {
        'primary': '0px 10px 10px rgba(91, 205, 249, .2)',
        'dark': '0px 5px 3px rgba(0, 0, 0, .2)',
      },
      fontFamily: {
        // 👇 Add CSS variables
        rubik: ["var(--font-rubik)"],
        heebo: ["var(--font-heebo)"],
      },
    },
  },
  plugins: [],
};
export default config;
