import { values, flatten, map, cond, T, o, of } from 'ramda';
import isArray from './isArray';
import isObject from './isObject';

const recursiveArray = (r) => o(flatten, map(flattenValues))(r);
const recursiveObject = (r) => o(flattenValues, values)(r);

/**
 * Recursively flatten values from object and array.
 *
 * @func
 * @category List
 *
 * @param  {Array|Object} value
 * @return {Array} array of values
 *
 * @sig {k: v} → [v]
 *
 * @example
 *
 *        R_.flattenValues([
 *				'hi',
 *				{ foo: 'bar' },
 *				{
 *					foo: {
 *						bar: ['baz', { foofoo: 'hi' }],
 *					},
 *				},
 *				['bar', 'hi'],
 *				['barbar', { hrun: 'hi' }],
 *			]) // ['hi','bar','baz','hi','hi','hi']
 *
 */
const flattenValues = cond([
	[isArray, recursiveArray],
	[isObject, recursiveObject],
	[T, of],
]);

export default flattenValues;
