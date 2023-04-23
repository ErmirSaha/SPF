/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,

  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-alert': 'off',
    'react/button-has-type': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'import/no-named-as-default': 0,
    'linebreak-style': 'off',
  },
};
