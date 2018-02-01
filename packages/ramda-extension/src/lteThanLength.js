import { lte } from 'ramda';
import { compareLength } from './lengthUtils';

/**
 * Returns true if length of array is bigger or equals than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 * 		const lengthBiggerThanEqualsOne = R_.lteThanLength(1)
 * 		lengthBiggerThanEqualsOne([{},{}]) // true
 * 		lengthBiggerThanEqualsOne([{}]) // true
 * 		lengthBiggerThanEqualsOne([]) // false
 *
 * @sig Number -> [a] -> Boolean
 */
const lteThanLength = compareLength(lte);

export default lteThanLength;
