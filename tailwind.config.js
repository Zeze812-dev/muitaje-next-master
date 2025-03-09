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
      },
      fontFamily: {
        ztformom: ['var(--font-zt-formom)'],
        swiss: ['var(--font-swiss-siena)'],
        swiss_bt: ['var(--font-swiss-bt)'],
        basis33: ['var(--font-basis33)'],
      },
    },
  },
  plugins: [],
};
