import { T, compose, cond, fromPairs, toPairs, identity, juxt, map, o, head, last } from 'ramda';
import toCamelCase from './toCamelCase';
import isNotNilObject from './isNotNilObject';
import isArray from './isArray';
import isFunction from './isFunction';

// Must be written as arrow `x => camelizeKeys(x)` due to recursion
// prettier-ignore
const camelizeObj = compose(
	fromPairs,
	map(juxt([
		o(toCamelCase, head),
		o((x) => camelizeKeys(x), last),
	])),
	toPairs
);
const camelizeArray = map((x) => camelizeKeys(x));

/**
 * Transform recursevely all keys within object
 *
 * @func
 * @category Object
 *
 * @param {any} x Object to transform
 * @return {any}
 * @example
 *
 *      camelizeKeys({
 *        "co-obj": {  "co_string": "foo" },
 *        "co-array": [0, null, { "f-f": "ff" }],
 *        "co-number": 1,
 *        "co-string": "1",
 *        "co-fn": head,
 *      });
 *
 *      // {
 *      //     coArray: [
 *      //         0,
 *      //         null,
 *      //         {
 *      //             fF: "ff"
 *      //         }
 *      //     ],
 *      //     coFn: {},
 *      //     coNumber: 1,
 *      //     coObj: {
 *      //         coString: "foo"
 *      //     },
 *      //     coString: "1"
 *      // }
 *
 */
// prettier-ignore
const camelizeKeys = cond([
	[isArray, camelizeArray],
	[isFunction, identity],
	[isNotNilObject, camelizeObj],
	[T, identity],
]);

export default camelizeKeys;
