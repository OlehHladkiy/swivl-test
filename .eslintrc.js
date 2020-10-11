const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  plugins: ['prettier', 'fp', 'import', 'ramda', 'react-hooks'],
  globals: {
    __DEV__: true,
    google: true,
  },
  rules: {
    // General
    'global-require': 'warn',
    'key-spacing': 'off',
    'max-len': ['warn', 180, 4],
    'no-else-return': ['error', { allowElseIf: true }],
    'no-multi-spaces': 'off',
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // FP
    'fp/no-arguments': 'error',
    'fp/no-class': 'off',
    'fp/no-delete': 'error',
    'fp/no-events': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'error',
    'fp/no-loops': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutating-methods': 'off',
    'fp/no-mutation': 'off',
    'fp/no-nil': 'off',
    'fp/no-proxy': 'error',
    'fp/no-rest-parameters': 'off',
    'fp/no-this': 'off',
    'fp/no-throw': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-valueof-field': 'error',
    // Import
    'import/named': 'off',
    // JSX a11y
    'jsx-a11y/href-no-hash': 'off',
    // React hooks
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    react: {
      version: '16.7',
    },
    'import/resolver': {
      webpack: {
        config: path.resolve('./config/webpack.config.js'),
      },
    },
  },
};
