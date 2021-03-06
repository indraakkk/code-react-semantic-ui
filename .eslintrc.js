module.exports = {
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['babel', 'react'],
    parser: 'babel-eslint',
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'babel/arrow-parens': 1
    }
  }