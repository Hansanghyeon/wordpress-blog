module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'standard',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': 0,
    semi: ['error', 'always'],
    bracketSpacing: 0,
    'space-before-function-paren': 0
  },
  globals: {
    JSX: true,
    React: true
  },
};
