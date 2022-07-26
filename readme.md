# @finga/eslint-config

This is a ready-for-action Eslint pack for TypeScript web projects and libs.

## Usage
Install

```
npm i -D eslint @typescript-eslint/eslint-plugin@^5 github:fingerartur/eslint-plugin-import \
eslint-plugin-jest@^26 @finga/eslint-config
```

```js
// ./eslintrc.js

module.exports = {
    "root": true,
    "extends": [
        "@finga",
    ],
}
```

If your TS config file is NOT located in the default location ./tsconfig.json,
you will have to specify its special location:

```js
// ./eslintrc.js

module.exports = {
    "root": true,
    "extends": [
        "@finga",
    ],
    "parserOptions": {
        "project": "./path/to/tsconfig.json"
    },
}
```

If your TS config file is not located in the default `./tsconfig.json` path,

## What does it do anyway?

It applies **basic Eslint rules for JS and TS** recommended by the authors of Eslint.

```js
{
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ]
}
```

It applies **awesome Eslint rules for import sorting and deduplication**, with is a really powerful tool for resolving merge conflicts. (Accept both and let Eslint do its magic.)
Import sorting is powered by `github:fingerartur/eslint-plugin-import`.

```js
{
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ]
}
```

It applies **Eslint rules for Jest testing**. These rules are only applied to test files. Jest uses a bunch of global functions like `describe`, `it`, but none of these are exist from the point of view of Eslint and these rules are here to fix that.

```js
{
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
  ]
}
```

And lastly it applies a extra bunch of **formatting rules**
- indent with 2 spaces
- no semicolons
- max line length 160 chars
- enforce dangling comma
- use single quotes only
- enforce curly braces for `if` statements
- allow empty functions
- allow rich auto-inference of TS types across functions and files
