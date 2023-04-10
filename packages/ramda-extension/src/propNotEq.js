import { complement, propEq } from 'ramda';

/**
 * Returns true if property of object literal does not equals the given value.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 *        R_.propNotEq(1, 'a', { a: 1 })	// false
 *        R_.propNotEq(1, 'a', { a: 2 })	// true
 *        R_.propNotEq(1, 'a', {})	// true
 *
 * @sig a → String → Object → Boolean
 */
const propNotEq = complement(propEq);

export default propNotEq;
