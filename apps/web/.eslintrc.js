module.exports = {
  root: true,
  extends: ['hyeon'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@next/next/no-page-custom-font': 'off',
    'space-before-function-paren': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
