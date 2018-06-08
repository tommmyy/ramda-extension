import { pathSatisfies, complement } from 'ramda';

/**
 * Returns `true` if the specified object property at given path not satisfies the given predicate; false otherwise.
 *
 * @func
 * @category Object
 *
 * @param {Function} predicate
 * @param {String} path The path to use.
 * @param {Object} obj
 *
 * @return {Boolean}
 *
 * @example
 *
 * 		const positive = x => x > 0;
 *
 *		R_.pathNotSatisfies(positive, ['a', 'b'], { }); // true
 *		R_.pathNotSatisfies(positive, ['a', 'b'], { a: { b: -1 } }); // true
 *		R_.pathNotSatisfies(positive, ['a', 'b'], { a: { b: 3 } }); // false
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */
const pathNotSatisfies = complement(pathSatisfies);

export default pathNotSatisfies;
