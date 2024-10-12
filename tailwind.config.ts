import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      xxl: "1600px",
    },

    container: {
      center: true,
      // padding: "var(--container-padding)",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "992px",
        xl: "1280px",
        xxl: "1600px",
      },
    },

    extend: {
      maxWidth: {
        xxs: "20rem", // 320px
        xs: "25rem", // 400px
        sm: "30rem", // 480px
        md: "35rem", // 560px
        lg: "48rem", // 768px
        xl: "64rem", // 1024px
        xxl: "80rem", // 1280px
        xxxl: "100rem", // 1600px
        full: "100%",
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
        base: ["1rem", { lineHeight: "1.5" }], // 16px
        md: ["1.125rem", { lineHeight: "1.5" }], // 18px
        lg: ["1.25rem", { lineHeight: "1.5" }], // 20px
        xl: ["1.25rem", { lineHeight: "1.4" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.4" }], // 24px
        "3xl": ["1.75rem", { lineHeight: "1.4" }], // 28px
        "4xl": ["2rem", { lineHeight: "1.3" }], // 32px
        "5xl": ["2.25rem", { lineHeight: "1.2" }], // 36px
        "6xl": ["2.5rem", { lineHeight: "1.2" }], // 40px
        "7xl": ["2.75rem", { lineHeight: "1.2" }], // 40px
        "8xl": ["3rem", { lineHeight: "1.2" }], // 48px
        "9xl": ["3.25rem", { lineHeight: "1.2" }], // 52px
        "10xl": ["3.5rem", { lineHeight: "1.2" }], // 56px
        "11xl": ["4rem", { lineHeight: "1.2" }], // 64px
      },

      spacing: {
        px: "1px", // 1px
        0: "0px", // 0px
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        14: "3.5rem", // 56px
        16: "4rem", // 64px
        18: "4.5rem", // 72px
        20: "5rem", // 80px
        24: "6rem", // 96px
        28: "7rem", // 112px
        30: "7.5rem", // 120px
        32: "8rem", // 128px
        36: "9rem", // 144px
        40: "10rem", // 160px
        44: "11rem", // 176px
        48: "12rem", // 192px
        52: "13rem", // 208px
        56: "14rem", // 224px
        60: "15rem", // 240px
        64: "16rem", // 256px
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
      },

      colors: {
        accent: "var(--accent)",

        "dark-indigo": "var(--dark-indigo)",
        "electric-violet": "var(--electric-violet)",
        "darkTheme-text": "var(--darkTheme-text)",

        "light-background": "var(--light-background)",
        "light-foreground": "var(--light-foreground)",
        "light-border": "var(--light-border)",
        "light-chapeau": "var(--light-chapeau)",

        "dark-background": "var(--dark-background)",
        "dark-foreground": "var(--dark-foreground)",
        "dark-border": "var(--dark-border)",
        "dark-chapeau": "var(--dark-chapeau)",
        "dark-stroke": "var(--dark-stroke)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
