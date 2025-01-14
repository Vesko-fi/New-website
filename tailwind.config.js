/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "custom-container": "80rem",
      },
      colors: {
        background: "var(--background-color-rgb)",
        primary: "var(--primary-text-color-rgb)",
        secondary: "var(--secondary-text-color-rgb)",
        tertiary: "var(--tertiary-color-rgb)",
        accent1: "var(--accent-color-1-rgb)",
      },
      animation: {
        "gradient-running": "gradient-running 9s ease infinite",
      },
      keyframes: {
        "gradient-running": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const colors = theme("colors");
      const alphas = [
        0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
        0.7, 0.75, 0.8, 0.85, 0.9, 0.95,
      ];

      const properties = [
        { property: "backgroundColor", prefix: "bg" },
        { property: "borderColor", prefix: "border" },
        { property: "fill", prefix: "fill" },
        { property: "color", prefix: "text" },
        { property: "boxShadow", prefix: "shadow" },
        { property: "outlineColor", prefix: "outline" },
      ];

      const newUtilities = {};

      // Generate utility classes
      Object.entries(colors).forEach(([colorKey, colorValue]) => {
        const color = `rgb(${colorValue})`;

        // Generate default utility classes
        properties.forEach(({ property, prefix }) => {
          newUtilities[`.${prefix}-${e(colorKey)}`] = { [property]: color };
        });

        // Generate utility classes for alpha values
        alphas.forEach((alpha) => {
          const alphaValue = Math.round(alpha * 100);
          const rgbaColor = `rgba(${colorValue}, ${alpha})`;

          properties.forEach(({ property, prefix }) => {
            newUtilities[`.${prefix}-${e(`${colorKey}-${alphaValue}`)}`] = {
              [property]: rgbaColor,
            };
          });
        });
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
