import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import cypressPlugin from "eslint-plugin-cypress";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  // Configuración específica para los archivos de prueba de Cypress
  {
    files: ["cypress/**/*.{js,jsx,ts,tsx}", "**/*.cy.{js,jsx,ts,tsx}"],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        // ...cypressPlugin.environments.globals.globals,
        cy: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        it: 'readonly'
      },
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    },
  },
];
