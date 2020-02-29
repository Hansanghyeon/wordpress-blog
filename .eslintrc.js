const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: path.join(__dirname, 'tsconfig.json'),
    ecmaVersion: 11,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'import',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': [0],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
