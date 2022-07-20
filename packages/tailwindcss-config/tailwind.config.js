const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const extendColors = require("./colors");

const colorReset = {
  color: null,
};

module.exports = {
  content: [
    "../../packages/ui/components/**/*.{tsx,scss}",
    "../../apps/web/src/**/*.{tsx,scss}",
  ],
  theme: {
    screens: {
      "#sm": { max: "639px" },
      "#md": { max: "767px" },
      "#lg": { max: "1023px" },
      "#xl": { max: "1279px" },
      "#xxl": { max: "1535px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: extendColors.base,
      borderColor: extendColors.base,
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
            color: null,
            a: {
              color: null,
              "&:hover": colorReset,
            },
            strong: colorReset,
            blockquote: colorReset,
            h1: colorReset,
            h2: colorReset,
            h3: colorReset,
            h4: colorReset,
            h5: colorReset,
            h6: colorReset,
            pre: null,
            code: null,
            "code::after": null,
            "code::before": null,
            "pre code": null,
          },
        },
      },
      fontFamily: {
        sans: ['"Pretendard"', ...defaultTheme.fontFamily.sans],
        dokdo: ['"East Sea Dokdo", cursive', ...defaultTheme.fontFamily.sans],
        code: ["'D2Coding', monospace"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".btn-light": {
          backgroundColor: theme("colors.white"),
          borderColor: theme("colors.gray.300"),
          color: theme("colors.gray.500"),
          border: "1px",
          "&:not(:disabled):hover": {
            backgroundColor: theme("colors.gray.50"),
          },
        },
        ".btn-dark": {
          backgroundColor: theme("colors.tuna.500"),
          borderColor: theme("colors.tuna.500"),
          color: theme("colors.heather.500"),
          border: "1px",
          "&:not(:disabled):hover": {
            backgroundColor: theme("colors.tuna.700"),
          },
        },
        ".btn-primary-light": {
          backgroundColor: theme("colors.shamrock.700"),
          borderColor: theme("colors.gray.300"),
          color: theme("colors.white"),
          border: "1px",
          "&:not(:disabled):hover": {
            backgroundColor: theme("colors.shamrock.700"),
          },
        },
        ".btn-primary-dark": {
          backgroundColor: theme("colors.shamrock.900"),
          borderColor: theme("colors.gray.300"),
          color: theme("colors.white"),
          border: "1px",
        },
      });
    }),
  ],
};
