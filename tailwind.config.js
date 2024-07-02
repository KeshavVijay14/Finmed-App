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
        white: "#fff",
      },
      fontFamily: {
        roboto: "Roboto",
        "trebuchet-ms": "'Trebuchet MS'",
      },
      spacing: {},
      borderRadius: {
        sm: "14px",
      },
      fontSize: {
        base: "16px",
        
        lgi: "19px",
        "13xl": "32px",
        
       
        "21xl": "40px",
        
       
        "5xs": "8px",
        xs: "12px",
        sm: "14px",
        inherit: "inherit",
      },
    },
  },
};
