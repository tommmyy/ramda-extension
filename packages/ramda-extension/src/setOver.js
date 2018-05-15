import { converge, set } from 'ramda';

import headArg from './headArg';
import alwaysEmptyObject from './alwaysEmptyObject';
import viewWith from './viewWith';

/**
 * Firstly applies transformation on input data structure according to provided "lens".
 * Returning value is made by the "setting" the portion
 * of the result focused by the given `lens`.
 *
 * @func
 * @category Object
 *
 *
 * @param {Object} lens Lens
 * @param {function} tranformation Transformation function
 * @param {any} input
 * @returns {Object} Firstly applies transformation on `input` according to `lens` (`R.over`)
 * and than returning value is made by the "setting" (`R.set`) the portion
 * of previous result focused by the given `lens`.
 *
 * @example
 *
 * 		R_.setOver(
 * 			R.lensPath(['a', 'b']),
 * 			(x) => "Hello " + x,
 * 			{
 * 				a: { b: 'foo' },
 * 				c: 'bar',
 * 			}
 * 		)
 * 		// { a: { b: "Hello foo" } }
 *
 */
const setOver = converge(set, [headArg, viewWith, alwaysEmptyObject]);

export default setOver;
