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
        "pale-white": "#F5F7F9",
        "dark-gray": "#C6CFDC",
        "muted": "#8D9CB8",
        "slate-purple": "#3F3D56",
        "lightblue": "#007FFF",
        "lightgray": "#C6CFDC",
        "light-text-gray": "#8D9CB8",
        "dark-muted": "#3F3D56"
  
      }
    }
  },
  plugins: [],
};
export default config;
