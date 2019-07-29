module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle": ["error", "always-multiline"],
    // 変数宣言時など、値の縦位置を揃えたい
    "no-multi-spaces": 0,
    // オブジェクトプロパティの後のスペース
    "key-spacing": 0,
    // カンマの前にくるスペース
    "comma-spacing": 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
