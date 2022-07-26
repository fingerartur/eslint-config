/**
 * Eslint config for typescript web apps and libs
 */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "ignorePatterns": [
    // text files
    "**/*.md",
    "**/*.json",
    "**/*.xml",
    "**/*.txt",
    "**/*.drawio",
    // libs
    "**/node_modules/",
    "**/*.lock",
    // dist files
    "**/dist/",
    "**/lib/",
    "**/out/",
    // docs
    ".doc/",
    "doc/",
    "docs/",
    // envs
    "**/.env",
    "**/.gitignore",
  ],
  "plugins": [
    "@typescript-eslint",
    "import",
    "jest",
  ],
  "extends": [
    /**
     * Prevent people from writing extremely convoluted or nonsensical JS/TS which is syntactically correct,
     * yes, but only a madman would code this way.
     */
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    /**
     * Sorting and dedupe of module imports
     */
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    /**
     * Jest testing
     */
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "rules": {
    // Basic formatting (something like prettier) ----------------------------
    // no semicolons
    "semi": ["error", "never"],
    // indentation 2 spaces
    "indent": ["error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/no-namespace": "off",
    // max line length 160 chars
    "max-len": [
      "warn",
      160
    ],
    // enforce dangling comma
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    // single quotes only
    "quotes": ["error", "single"],
    // enforce curly braces for functions, ifs, etc.
    "curly": ["warn", "all"],
    "object-curly-spacing": ["warn", "always"],
    "comma-spacing": ["warn",
      {
        "after": true
      }
    ],

    // Module imports -------------------------------------------------------
    "import/order": [
      "warn",
      {
        // Ordering of what types/groups of imports come first and what next
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "newlines-between": "always",
        // Make sure imports are ordered alphabetically
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/newline-after-import": [
      "warn",
      {
        "count": 1
      }
    ],

    // Typescript config -----------------------------------
    /**
     * Make sure type / interface attrs do not have any delimiter
     *  e.g.
     *
     * interface A {
     *    a:number
     *    b: string
     *  }
     */
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "none",
      },
      "singleline": {
        "delimiter": "semi",
      },
    }],
    // Allow return types to be auto-inferred
    "@typescript-eslint/explicit-function-return-type": "off",
    // Allow types to be auto-inferred across files
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // Sometimes you need empty functions
    "@typescript-eslint/no-empty-function": "off",
  },
}
