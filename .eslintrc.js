module.exports = {
  extends: [
    'airbnb-base',
    'airbnb/rules/react',
  ],
  plugins: [],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'no-unused-vars': 1,
  },
  env: {
    browser: true,
  },
};
