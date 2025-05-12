import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",     
        sm: "640px",      
        md: "1024px",   
        lg: "1200px",      
        xl: "1400px",     
      },
      
      colors: {
        'color_01': "#2377FC",
        'color_02':'#36BD79',
        'color_03':'#926BFF',
        'color_04':'#FFC960',
        'color_05':'#FF7E95',
        'color_06':'#50BCFF',
        'neutral_01':'#FCFDFE',
        'neutral_02':'#F5F6F7',
        'neutral_03':'#EEEEEE',
        'neutral_04':'#787F84',
        'neutral_05':'#585858',
        'neutral_06':'#313336',
        'neutral_07':'#202225',
        'shade_02':'#F7F9F9',
        'shade_03':'#F5F5F6',
        'shade_04':'#BCBEC2',
        'shade_05':'#EFEFEF',
        'shade_06':'#438BFB'


      },
      fontFamily: {
        poppins: 'poppins',
        inter: 'inter',
        manrope: 'manrope',
      },
    },
  },
  plugins: [],
};
export default config;
