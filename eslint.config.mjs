import js from "@eslint/js";
import parser from "@typescript-eslint/parser";

const [
  typescript,
  react,
  reactHooks,
  jsxA11y,
  prettier,
  importPlugin,
  conarti,
] = await Promise.all([
  import("@typescript-eslint/eslint-plugin"),
  import("eslint-plugin-react"),
  import("eslint-plugin-react-hooks"),
  import("eslint-plugin-jsx-a11y"),
  import("eslint-plugin-prettier"),
  import("eslint-plugin-import"),
  import("@conarti/eslint-plugin-feature-sliced"),
]);

export default [
  js.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        __IS_DEV__: true,
        document: true,
        window: true,
        navigator: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescript.default,
      react: react.default,
      "react-hooks": reactHooks.default,
      "jsx-a11y": jsxA11y.default,
      prettier: prettier.default,
      import: importPlugin.default,
      "@conarti/feature-sliced": conarti.default,
    },
    settings: {
      react: {
        version: "999.999.999",
      },
    },
    rules: {
      "prettier/prettier": ["error"],

      // React
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // TypeScript
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // Import
      "import/prefer-default-export": "off",
      "import/extensions": "off",
      "import/no-absolute-path": "off",
      "import/order": "warn",

      // Feature-sliced
      "@conarti/feature-sliced/absolute-relative": "off",

      // General
      "no-console": "warn",
      "padding-line-between-statements": "error",
    },
  },
];
