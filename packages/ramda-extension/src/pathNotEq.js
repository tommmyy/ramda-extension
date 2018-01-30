import { complement, pathEq } from 'ramda';

/**
 * Returns true if nested path of object literal does not contains given value.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 * 		R_.pathNotEq(['a', 'b'], 1, { a: { b: 1 } }) // false
 * 		R_.pathNotEq(['a', 'b'], 1, { a: { b: 2 } }) // true
 * 		R_.pathNotEq(['a', 'b'], 1, {}) // true
 * 		R_.pathNotEq(['a', 'b'], 1, { a: {} }) // true
 *
 * @sig [String | Int] → a → {a} → Boolean
 */
const pathNotEq = complement(pathEq);

export default pathNotEq;
