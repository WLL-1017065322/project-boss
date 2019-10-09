module.exports = {
  // lintOnSave: false,
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    //一行最大长度
    'max-len':['error',{'code':300}],
    // 关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    // 空行最多不能超过100行
    'no-multiple-empty-lines': [0, { max: 100 }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    indent: ['off', 'tab'],
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    eqeqeq: 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
