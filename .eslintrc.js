module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'prettier'
  ],
  // plugins: ['prettier', 'eslint-plugin-prettier'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/valid-v-slot': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ]
    // ' vue/no-mutating-props': ['error', { propProps: false }]
    // 'prettier/prettier': 'error'
  }
}
