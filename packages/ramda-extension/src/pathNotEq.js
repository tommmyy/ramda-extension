import { complement, pathEq } from 'ramda';

/**
 * Returns true if nested path of object literal does not contains given value.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 *        R_.pathNotEq(1, ['a', 'b'], { a: { b: 1 } })	// false
 *        R_.pathNotEq(1, ['a', 'b'], { a: { b: 2 } })	// true
 *        R_.pathNotEq(1, ['a', 'b'], {}) 		// true
 *        R_.pathNotEq(1, ['a', 'b'], { a: {} }) 		// true
 *
 * @sig [String | Int] → a → {a} → Boolean
 */
const pathNotEq = complement(pathEq);

export default pathNotEq;
