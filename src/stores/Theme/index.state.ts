const themeState = {
  themeState: {
    isDark: () => {
      const result = !!(
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
      return window !== undefined ? result : false;
    },
  },
};

export default themeState;
