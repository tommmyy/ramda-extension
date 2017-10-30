# ramda-extension

Library that adds utilities functions composed mainly on the top of the marvelous [Ramda](ramdajs.com) library.

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

Functions can be imported separately:

```js
import toKebabCase from 'ramda-extension/toKebabCase';

toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```

Or as a named import (not recommended without [treeshaking](https://webpack.js.org/guides/tree-shaking/):

```js
import { toKebabCase } from 'ramda-extension';

toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```


And if you prefer browser/jQuery/global-namespace style:

```js
import R_ from 'ramda-extension';

R_.toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```
