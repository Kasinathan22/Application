/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gre:'#42C8B7',
        ye:'#F8A440',
        r:'#D71921',
        fo:'#EBFFFC',
        g:'#EBEBEB',
        gy:'#6B6B6B',


        lg:'#F0F0F0',
        cg:'#333333',
        bp:'#EADBD4',
        nh:"#A0846C",


        
      },
    
    },
  },
  plugins: [],
};
