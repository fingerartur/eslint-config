# @finga/eslint-config

This is a ready-for-action Eslint pack for TypeScript web projects and libs.

## Usage
**Install**

```
npm i -D eslint @typescript-eslint/eslint-plugin@^5 \
github:fingerartur/eslint-plugin-import \
@finga/eslint-config
```

**Configure**
```js
// ./eslintrc.js

module.exports = {
    root: true,
    extends: [ "@finga" ],
}
```

## Advanced Usage

If your TS config file is NOT located in the default location ./tsconfig.json,
you will have to specify its special location:

```js
// ./eslintrc.js

module.exports = {
    root: true,
    extends: [ "@finga" ],
    parserOptions: {
        project: "./path/to/tsconfig.json"
    },
}
```

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

It applies **awesome Eslint rules for import sorting and deduplication**, with is a really powerful tool for resolving merge conflicts of module exports. (Just accept both changes and let Eslint do its magic.)
Import sorting is powered by [github:fingerartur/eslint-plugin-import](https://github.com/fingerartur/eslint-plugin-import).

```js
{
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
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
- enforce that object keys are not in quotes unless absolutely necessary
- allow empty functions
- allow rich auto-inference of TS types across functions and files

*To learn precisely what configs are applied go and check out the [config file](https://github.com/fingerartur/eslint-config/blob/master/index.js).*
