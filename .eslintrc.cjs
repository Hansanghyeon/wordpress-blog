module.exports = {
  extends: [
    '@hyeon/eslint-config',
    '@hyeon/eslint-config/typescript',
    '@hyeon/eslint-config/prettier',
  ],
  rules: {
    'no-undef': 'off',
    'lines-around-comment': 'off',
  },
  parserOptions: {
    sourceType: 'module',
  },
}
