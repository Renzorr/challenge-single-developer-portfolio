/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1135px",
        },
        padding: "15px",
      },
      colors: {
        "black": "#151515",
        "pale-black": "#000000BF",
        "pale-gray": "#D9D9D9",
        cyan: "#4EE1A0",
      },
      screens: {
        desktop: { max: "1030px" },
        tablet: { max: "767px" },
        mobile: { max: "550px" },
      },
      fontFamily: {
        sans: ["Space Grotesk"],
      },
      fontSize: {
        "2xl": "clamp(40px,8cqw,83px)",
        xl: "clamp(32px,5cqw,48px)",
        "2lg": "clamp(20px,4cqw,24px)",
        lg: "clamp(16px,4cqw,18px)",
      },
      gridTemplateColumns: {
        hero: "minmax(300px, 830px) minmax(200px, 350px)",
        "grid-cols-3": "repeat(3, 1fr)",
        project: "repeat(2, minmax(240px, 538px))",
        contact: "minmax(250px, 440px) minmax(250px, 440px)",
      },
    },
  },
  plugins: [],
};
