import { propSatisfies, complement } from 'ramda';

/**
 * Returns `true` if the specified object property at given prop not satisfies the given predicate; false otherwise.
 *
 * @func
 * @category Object
 *
 * @param {Function} predicate
 * @param {String} prop The prop to use.
 * @param {Object} obj
 *
 * @return {Boolean}
 *
 * @example
 *
 * 		const positive = x => x > 0;
 *
 *		R_.propNotSatisfies(positive, 'a', { }); // true
 *		R_.propNotSatisfies(positive, 'a', { a: -1 }); // true
 *		R_.propNotSatisfies(positive, 'a', { a: 3 }); // false
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */
const propNotSatisfies = complement(propSatisfies);

export default propNotSatisfies;
