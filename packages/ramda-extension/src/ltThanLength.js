import { lt } from 'ramda';
import { compareLength } from './lengthUtils';

/**
 * Returns true if length of array is bigger than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 * 		const lengthBiggerThanZero = R_.ltThanLength(0)
 * 		lengthBiggerThanZero([{}]) // true
 * 		lengthBiggerThanZero([]) // false
 *
 * @sig Number -> [a] -> Boolean
 */
const ltThanLength = compareLength(lt);

export default ltThanLength;
