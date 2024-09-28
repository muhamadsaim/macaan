/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1D4ED8",     // Custom primary color
        secondary: "#9333EA",   // Custom secondary color
        accent: "#F59E0B",      // Custom accent color
        darkBlue: "#0F172A",    // Additional custom color
        lightGray: "#F3F4F6",   // Additional custom color
      },
      spacing: {
        '128': '32rem',         // Custom spacing unit
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',          // Custom border-radius
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Custom font family
      },
    },
  },
  plugins: [],
};
