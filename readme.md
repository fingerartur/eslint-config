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

It applies basic Eslint rules for JS and TS recommended by the authors of Eslint.

It applies awesome rules for import sorting and deduplication, with is a really powerful tool for resolving merge conflicts. (Accept both and let Eslint do its magic.)
Import sorting is powered by `github:fingerartur/eslint-plugin-import`.

And lastly it applies a bunch of formatting rules
- indent with 2 spaces
- no semicolons
- max line length 160 chars
- enforce dangling comma
- use single quotes only
- enforce curly braces for `if` statements
- allow empty functions
- allow rich auto-inference of TS types across functions and files
