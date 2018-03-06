import { useWith, identity } from 'ramda';

import padRightUntil from './padRightUntil';
import lteThanLength from './lteThanLength';

/**
 * Length of the output string, `padString` and initial value.
 * `padString` is repeatedly appended to the `init` until the length of the string is equal to `lengthString`.
 *
 * @param {number} lengthString Length of the output string.
 * @param {string} padString
 * @param {string} init Intitial value
 * @see R_.padLeft, R_.padRightUntil, R.padRightUntil
 *
 * @return String
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padRight(10, '0')('1') // '10000000000'
 *        R_.padRight(-9, '0')('1') // '1'
 *        R_.padRight(1, '0')('1') // '1'
 *
 * @sig Number -> a -> a
 */
const padRight = useWith(padRightUntil, [lteThanLength, identity, identity]);

export default padRight;
