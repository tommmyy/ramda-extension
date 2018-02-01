import { complement, propEq } from 'ramda';

/**
 * Returns true if property of object literal does not equals the given value.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 *        R_.propNotEq('a', 1, { a: 1 }) // false
 *        R_.propNotEq('a', 1, { a: 2 }) // true
 *        R_.propNotEq('a', 1, {}) // true
 *
 * @sig String → a → Object → Boolean
 */
const propNotEq = complement(propEq);

export default propNotEq;
