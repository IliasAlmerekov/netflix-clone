// .stylelint.config.mjs
export default {
  extends: ['stylelint-config-standard'],
  plugins: [],
  rules: {
    'string-quotes': 'double',
    indentation: 2,
    'number-leading-zero': 'always',
    'color-hex-case': 'lower',
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
  },
}
