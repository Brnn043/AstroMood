/** @type {import('tailwindcss').Config} */
export default {
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
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        spinSlow: 'spin 5s linear infinite',
        smoothFloat: "smoothFloat 6s ease-in-out infinite",
        customPulse: "customPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        smoothFloat: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-10px, -5px)" },
          "50%": { transform: "translate(10px, 10px)" },
          "75%": { transform: "translate(-5px, 10px)" },
        },
        customPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.1" },
          "50%": { transform: "scale(1.05)", opacity: "0.15" }, // Adjust the scale and opacity values
        },
      },
    },
  },
  plugins: [],
};
