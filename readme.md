# editor-info

> Get details about the current editor environment.

## Installation

```bash
yarn add editor-info
```

## Usage

```js
import editor from 'editor-info'

console.log(editor.isEditor)
// -> true
```

## Example

When you want disable some ESLint rules in your editor.

```js
// .eslintrc.js
const {isEditor} = require('editor-info')

module.exports = {
  root: true,
  extends: ['@fisker'],
  rules: {
    'prettier/prettier': isEditor ? 'off' : 'error',
  },
}
```

## Supported Editors

| Name               | Constant      |
| :----------------- | :------------ |
| Atom               | editor.ATOM   |
| Visual Studio Code | editor.VSCODE |

---

This package is heavily inspired by [ci-info](https://github.com/watson/ci-info).
