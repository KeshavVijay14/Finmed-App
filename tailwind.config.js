/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "scale-animation": "scaleAnimation 500ms ease-in-out",
        "scale-opacity-z": "scaleOpacityZ 1s ease-in-out",
        "move-opacity": "moveOpacity 1s ease-in-out",
        "transform-move": "transformMove 1s ease-in-out forwards",
        "transform-move-2": "transformMove2 1s ease-in-out forwards",
        "transform-move-3": "transformMove3 1s ease-in-out forwards",
        "scale-up": "scaleUp 2s ease-in-out forwards",
      },
      keyframes: {
        scaleAnimation: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        scaleOpacityZ: {
          "0%": {
            transform: "scale(0.5) translateZ(0)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(1) translateZ(1)",
            opacity: "1",
          },
        },
        moveOpacity: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        transformMove: {
          "0%": {
            transform: "translate(-1rem, -1rem) scale(1.5)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        transformMove2: {
          "0%": {
            transform: "translate(1rem, -1rem) scale(1.5)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        transformMove3: {
          "0%": {
            transform: "translate(0, 1rem) scale(1.5)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        scaleUp: {
          "0%": {
            opacity: "0.5",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
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
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(28, 45, 92, 0), #081a49 29.5%, rgba(9, 26, 73, 0.99) 77%, rgba(28, 45, 92, 0))",
      },
    },
  },
  plugins: [],
};
