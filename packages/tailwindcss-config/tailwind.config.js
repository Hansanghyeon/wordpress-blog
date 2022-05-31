const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "../../packages/ui/components/**/*.{tsx,scss}",
    "../../app/web/src/**/*.{tsx,scss}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['"Pretendard"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
