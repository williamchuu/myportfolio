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
        'bg': '#2C2928',
        'bg-dark': '#1E1B1B',
        'primary': '#7DC9FF',
        'text': '#F1F6F6',
        'accent' : '#B8B8B8',
        'dark-accent': '#878787',
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
