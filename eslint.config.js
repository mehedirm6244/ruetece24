import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Custom configuration for React
    files: ["**/*.{js,jsx,tsx}"],
    rules: {
      // Disable the rule that requires React in scope when using JSX
      "react/react-in-jsx-scope": "off",
      // Disable unused expressions rule
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
]);