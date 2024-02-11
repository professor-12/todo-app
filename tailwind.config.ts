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
        "muted": "#8D9CB8",
        "slate-purple": "#3F3D56",
        "lightblue": "#007FFF",
      }
    }
  },
  plugins: [],
};
export default config;
