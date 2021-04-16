const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    node: true,
  },
  // Order important
  extends: [
    `eslint:recommended`,
    `plugin:@typescript-eslint/eslint-recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
    `prettier`,
    `plugin:typescript-sort-keys/recommended`,
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    requireConfigFile: false,
    sourceType: `module`,
  },
  plugins: [
    `typescript-sort-keys`,
    `autofix`,
    `@typescript-eslint`,
    `sort-keys-fix`,
    `sort-imports-es6-autofix`,
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': WARNING,
    'autofix/no-debugger': ERROR,
    'autofix/no-unused-vars': WARNING,
    'autofix/sort-imports': OFF,
    'no-unused-vars': OFF,
    'prettier/prettier': [ERROR, {bracketSpacing: false}],
    quotes: [ERROR, `backtick`, {allowTemplateLiterals: true}],
    'typescript-sort-keys/interface': `error`,
    'typescript-sort-keys/string-enum': `error`,
  },
};
