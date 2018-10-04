import { values, flatten, map, cond, T, __, append, o } from 'ramda';
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
 *				'ahoj',
 *				{ foo: 'bar' },
 *				{ foo: 'ahoj' },
 *				{
 *					foo: {
 *						bar: ['cuuus', { foo: 'ahoj' }],
 *					},
 *				},
 *				['haha', 'ahoj'],
 *				['haha', { foo: 'ahoj' }],
 *			]) // ['ahoj','bar','ahoj','cuuus','ahoj','haha','ahoj','haha','ahoj']
 *
 */
const flattenValues = cond([
	[isArray, recursiveArray],
	[isObject, recursiveObject],
	[T, append(__, [])],
]);

export default flattenValues;
