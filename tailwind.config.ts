import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./_lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#2D2C33",
      white: "#FFFFFF",
      green: "#96AB8F",
      darkGreen: "#77805B",
      salmon: "#D38672",
      grey: "#8E8E93",
      linkBlue: "#0000FF",
      transparent: "transparent",
    },
    dropShadow: {
      default: "0 4px 4px rgba(0, 0, 0, 0.1)",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          letterSpacing: "0.01rem",
          fontWeight: "200",
          lineHeight: "130%",
        },
      ],
      subheading: [
        "1rem",
        {
          letterSpacing: "0.01rem",
          fontWeight: "600",
          lineHeight: "120%",
        },
      ],
      heading: [
        "2.5rem",
        {
          letterSpacing: "0.05rem",
          fontWeight: "800",
          lineHeight: "120%",
        },
      ],
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktop: "1280px",
    },
    extend: {
      margin: {
        "15": "60px",
      },
      padding: {
        "15": "60px",
      },
      gap: {
        "15": "60px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
