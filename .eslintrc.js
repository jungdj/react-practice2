module.exports = {
  extends: [
    'airbnb',
  ],
  plugins: [
    'jsx-a11y',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
  },
  env: {
    browser: true,
  },
};
