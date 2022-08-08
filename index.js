const fs = require('fs')

/**
 * Returns the name of the TSconfig file which Eslint uses to determine which files it should
 * process. First file that exists is returned, tried in this order:
 *
 * 1. ./tsconfig.eslint.json (Special tsconfig dedicated to Eslint configuration)
 * 2. ./tsconfig.json (Classic tsconfig)
 * 3. undefined
 */
const getTsConfigFilename = () => {
  const ESLINT_TS_CONFIG = './tsconfig.eslint.json'
  if (fs.existsSync(ESLINT_TS_CONFIG)) {
    return ESLINT_TS_CONFIG
  }

  const TS_CONFIG = './tsconfig.json'
  if (fs.existsSync(TS_CONFIG)) {
    return TS_CONFIG
  }

  return undefined
}

/**
 * Eslint config for typescript web apps and libs
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    // text files
    '**/*.md',
    '**/*.json',
    '**/*.xml',
    '**/*.txt',
    '**/*.drawio',
    // libs
    '**/node_modules/',
    '**/*.lock',
    // dist files
    '**/dist/',
    '**/lib/',
    '**/out/',
    // docs
    '.doc/',
    'doc/',
    'docs/',
    // envs
    '**/.env',
    '**/.gitignore',
    '**/.eslintrc.js'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    /**
     * Prevent people from writing extremely convoluted or nonsensical JS/TS which is syntactically correct,
     * yes, but only a madman would code this way.
     */
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    /**
     * Sorting and dedupe of module imports
     */
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: getTsConfigFilename(),
  },
  rules: {
    // Basic formatting (something like prettier) ----------------------------

    // no semicolons
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    // indentation 2 spaces
    indent: 'off',
    '@typescript-eslint/indent': ['error',
      2,
      {
        SwitchCase: 1,
        // Workaround for this issue with TS generics and their params
        // https://github.com/typescript-eslint/typescript-eslint/issues/455
        ignoredNodes: ['TSTypeParameterInstantiation'],
      },
    ],

    // max line length 160 chars
    'max-len': [
      'warn',
      160,
    ],

    // enforce dangling comma
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      'always-multiline',
    ],

    // single quotes only
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    // enforce curly braces for functions, ifs, etc.
    curly: ['warn', 'all'],

    // curly spacing
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],

    // comma spacing
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['warn',
      {
        after: true,
      },
    ],

    // make user JS object keys are not quoted like a JSON object, unless absolutely necessary
    'quote-props': ['error', 'as-needed'],

    // Module imports -------------------------------------------------------
    'import/order': [
      'warn',
      {
        // Ordering of what types/groups of imports come first and what next
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        // Make sure imports are ordered alphabetically
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'import/newline-after-import': [
      'warn',
      {
        count: 1,
      },
    ],

    // Typescript config -----------------------------------

    // Disallow namespaces
    '@typescript-eslint/no-namespace': 'off',

    /**
     * Make sure type / interface attrs do not have any delimiter
     *  e.g.
     *
     * interface A {
     *    a:number
     *    b: string
     *  }
     */
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'semi',
      },
    }],

    // Allow return types to be auto-inferred
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Allow types to be auto-inferred across files
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Sometimes you need empty functions
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    /**
     * Override eslint rules for Javascript config files.
     *
     * e.g.
     *  webpack.config.js
     *  jest.config.js
     *  jest.setup.js
     *
     * I want to lint them as well, but different rules apply to them. I don't care about being too strict with them
     * and one big difference is that they run in the `node` environment.
     */
    {
      files: ["**/*.js"],
      env: {
        node: true
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      }
    }
  ]
}
