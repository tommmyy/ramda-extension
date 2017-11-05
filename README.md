# ramda-extension

Library that adds utilities functions composed mainly on the top of the marvelous [Ramda](http://ramdajs.com) library.

Most of the functions have its own tests and examples in the JS Doc.

Feel free to either contribute yourself or submit an issue if there is a bug or you have an idea for a new extension.

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
import R_ from 'ramda-extension';

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

NOTE: ramda itself is not part of bundle, you need to add it manually