# @finga/eslint-config

This is a ready-for-action Eslint pack for TypeScript web projects and libs.

## Usage
Install

```
npm i -D eslint @typescript-eslint/eslint-plugin@^5 github:fingerartur/eslint-plugin-import @finga/eslint-config
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
It combines basic recommended lint rules for JS and TS

```
"eslint:recommended"
"plugin:@typescript-eslint/recommended"
"plugin:@typescript-eslint/recommended-requiring-type-checking"
```

plus it adds import sorting and deduplication. Plus it configures your formatting out-of-the-box. The formatting rules are
- two spaces indentation
- omitting of curly braces not allowed
- one empty space after imports
