import { values, flatten, map, cond, T, o, of } from 'ramda';
import isArray from './isArray';
import isObject from './isObject';

const recursiveArray = (r) => o(flatten, map(flattenValues))(r);
const recursiveObject = (r) => o(flattenValues, values)(r);

/**
 * Returns flatten values from object and array. Recursively.
 *
 * @func
 * @category Array, Object
 *
 * @param  {Array|Object} value
 * @return {Array} array of values
 *
 * @example
 *
 *        R_.flattenValues([
 *				'hi',
 *				{ foo: 'bar' },
 *				{ foo: 'hi' },
 *				{
 *					foo: {
 *						bar: ['cuuus', { foo: 'hi' }],
 *					},
 *				},
 *				['haha', 'hi'],
 *				['haha', { foo: 'hi' }],
 *			]) // ['hi','bar','hi','cuuus','hi','haha','hi','haha','hi']
 *
 */
const flattenValues = cond([
	[isArray, recursiveArray],
	[isObject, recursiveObject],
	[T, of],
]);

export default flattenValues;
