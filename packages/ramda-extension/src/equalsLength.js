import { equals } from 'ramda';
import { compareLength } from './lengthUtils';

/**
 * Returns true if length of array equals first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        const lengthEqualsOne = R_.equalsLength(1)
 *        lengthEqualsOne([{}]) // true
 *        lengthEqualsOne([]) // false
 *
 * @sig Number -> [a] -> Boolean
 */
const equalsLength = compareLength(equals);

export default equalsLength;
