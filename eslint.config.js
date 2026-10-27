
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// Export the ESLint configuration
export default defineConfig([
  // Ignore the dist folder during linting
  globalIgnores(['dist']),

  {
    // Apply these rules to JavaScript and JSX files
    files: ['**/*.{js,jsx}'],

    // Extend recommended ESLint and React plugin configurations
    extends: [
      js.configs.recommended, // General JavaScript best practices
      reactHooks.configs.flat.recommended, // Rules for using React Hooks correctly
      reactRefresh.configs.vite, // Rules for React Fast Refresh in Vite
    ],

    // Configure the JavaScript language environment
    languageOptions: {
      ecmaVersion: 2020, // Set the ECMAScript version
      globals: globals.browser, // Enable browser global variables

      parserOptions: {
        ecmaVersion: 'latest', // Support the latest JavaScript syntax
        ecmaFeatures: { jsx: true }, // Enable JSX syntax
        sourceType: 'module', // Allow import and export statements
      },
    },

    // Define additional linting rules
    rules: {
      // Report unused variables, except names starting with uppercase letters or underscores
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
