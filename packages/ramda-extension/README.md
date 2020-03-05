<p align="center">
  <a href="https://ramda-extension.firebaseapp.com">
    <img alt="Ramda!" src="/ramda_banner.gif" />
  </a>
</p>

<h1 align="center">
  <a href="https://ramda-extension.firebaseapp.com">Ramda extension</a>
</h1>

<h3 align="center">
🤘🤘🤘
</h3>

<h3 align="center">Utility library for functional JavaScript.</h3>

<p align="center">
Library adds utilities functions that are built on the top of marvelous <a href="http://ramdajs.com">Ramda</a> library.
</p>

<p align="center">
  <a href="https://ramda-extension.firebaseapp.com/repl/?v=%5E0.26.1&ve=0.10.2">
    Play wit Ramda and Ramda-extension in REPL.
  </a>
</p>

<p align="center">
  <a href="https://ramda-extension.firebaseapp.com">See our documentation site.</a>
</p>

<p align="center">
  <a href="https://github.com/tommmyy/ramda-extension">
    <img src="https://flat.badgen.net/badge/-/github?icon=github&label" alt="Github" />
  </a>

  <a href="https://github.com/tommmyy/ramda-extension/blob/master/LICENSE">
    <img src="https://flat.badgen.net/badge/license/Apache/blue" alt="Apache-2.0" />
  </a>
  
  <a href="https://travis-ci.org/tommmyy/ramda-extension">
    <img src="https://img.shields.io/travis/tommmyy/ramda-extension/master.svg?style=flat-square" alt="Travis" />
  </a>

  <a href="https://npmjs.com/package/ramda-extension">
    <img src="https://img.shields.io/npm/dm/ramda-extension.svg" alt="Downloads" />
  </a>

  <a href="https://npmjs.com/package/ramda-extension">
    <img src="https://flat.badgen.net/npm/v/ramda-extension" alt="Version" />
  </a>
</p>


```js
import { cx } from 'ramda-extension';

cx({ box: true, 'box--outline': false }, 'width-100'); // ".box .width-100"
```

## Why to choose ramda-extension over other libraries?

We focus on functional point-free code. Our goal is to keep codebase composed only from ramda functions, not from own code. Basically, we are using only `const` and `ES6 modules` from the JavaScript itself.

We have a few functions with side-effects (like `log` and `trace`) to support better developer's experience in debugging process. It is only for development purpose and it should not be used in production code.

## Installation

```bash
$ yarn add ramda ramda-extension
```
or

```bash
$ npm install ramda ramda-extension
```

## Usage

We support CommonJS and ES modules syntax.

Import function as a named export (not recommended without [treeshaking](https://webpack.js.org/guides/tree-shaking/)):

```js
import { toKebabCase } from 'ramda-extension';
import { flatten } from 'ramda'; // standard ramda function (if needed)

toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
flatten([1, 2, [3, 4], 5]) // [1, 2, 3, 4, 5]
```
* NOTE: standard ramda functions are still accessed via 'ramda'

Alternatively you can import it separately if your environment doesn't support treeshaking (Sse [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)):

```js
import toKebabCase from 'ramda-extension/lib/toKebabCase';

toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```

If you prefer jQuery-style:

```js
import * as R_ from 'ramda-extension'

R_.toKebabCase('I wanna eat my kebab.') // "i-wanna-eat-my-kebab"
```

_NOTE_: Ramda itself is not part of bundle, you need to add it manually

## CDN
You can use Ramda-extension directly in the browser:

```html
<script src="https://cdn.jsdelivr.net/npm/ramda@latest/dist/ramda.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ramda-extension@latest/dist/ramda-extension.js"></script>
```

## Articles & Resources

- [Why are we not afraid to think functionally with Ramda?](https://medium.com/@tyna.kamenicka/why-are-we-not-afraid-to-think-functionally-with-ramda-fb17f733fde8#c898-5ab767b22b17)

## Contributing

Most of the functions have its own tests and examples in the JS Doc.

Feel free to either contribute yourself or submit an issue if there is a bug or you have an idea for a new extension.

We are open to all ideas and suggestions, feel free to open an issue or a pull request!

See the [contribution guide](https://github.com/tommmyy/ramda-extension/blob/master/CONTRIBUTING.md) for guidelines.


## License

All packages are distributed under the Apache 2.0 license. See the license [here](https://github.com/tommmyy/ramda-extension/blob/master/LICENSE).

