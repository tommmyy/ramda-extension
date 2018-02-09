# ramda-extension

<img src="https://media.giphy.com/media/l4pSTIv8sada9NmHS/giphy.gif" />

[![build status](https://img.shields.io/travis/tommmyy/ramda-extension/master.svg?style=flat-square)](https://travis-ci.org/tommmyy/ramda-extension)

[See the docs page](https://ramda-extension.firebaseapp.com)

Library that adds utilities functions composed mainly on the top of the marvelous [Ramda](http://ramdajs.com) library.

Most of the functions have its own tests and examples in the JS Doc.

Feel free to either contribute yourself or submit an issue if there is a bug or you have an idea for a new extension.

# Why to choose ramda-extension over other libraries?

We focus on functional point-free code. Our goal is to keep codebase composed only from ramda functions, not from own code. Basically, we are using only `const` and `ES6 modules` from the JavaScript itself.

We have a few functions with side-effects (like `log` and `trace`) to support better developer's experience in debugging process. It is only for development purpose and it should not be used in production code.

## Installation

```bash
$ npm install ramda ramda-extension
```

or

```bash
$ yarn add ramda ramda-extension
```

## Usage

We supports cjs and es6 modules syntax.

Import function as a named export (not recommended without [treeshaking](https://webpack.js.org/guides/tree-shaking/)):

```js
import { toKebabCase } from 'ramda-extension';

toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```
Or if your environment doesn't support treeshaking you can import it separately (Alternatively you can use [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)):

```js
import toKebabCase from 'ramda-extension/lib/toKebabCase';

toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```

If you prefer browser/jQuery/global-namespace style:

```js
import * as R_ from 'ramda-extension'

R_.toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```

Or you can use it directly in the browser:

```html
<script src="path/to/yourCopyOf/ramda.js"></script>
<script src="path/to/yourCopyOf/ramda-extension.js"></script>
```

The minified version:

```html
<script src="path/to/yourCopyOf/ramda.min.js"></script>
<script src="path/to/yourCopyOf/ramda-extension.min.js"></script>
```

_NOTE_: Ramda itself is not part of bundle, you need to add it manually
