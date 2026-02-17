import js from '@eslint/js';
import globals from 'globals';
import pluginJest from 'eslint-plugin-jest';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, '@stylistic': stylistic },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    files: ['**/*.spec.js', '**/*.test.js'],
    plugins: {
      jest: pluginJest,
      '@stylistic': stylistic,
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'const',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'const',
          next: 'const',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'expression',
        },
      ],
    },
  },
]);
