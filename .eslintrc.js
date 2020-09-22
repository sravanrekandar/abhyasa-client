/* eslint-disable max-len */
module.exports = {
  extends: [
    'airbnb',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: 'babel-eslint',
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: [
    // '@typescript-eslint',
  ],
  rules: {
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: true, peerDependencies: true },
    ],
  },
};
