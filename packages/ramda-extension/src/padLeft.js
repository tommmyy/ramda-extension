import { useWith, identity } from 'ramda';

import padLeftUntil from './padLeftUntil';
import lteThanLength from './lteThanLength';

/**
 * Length of the output string, `padString` and initial value.
 * `padString` is repeatedly concated to `init` until the length of the string is equal to `lengthString`.
 *
 * @param {number} lengthString Length of the output string.
 * @param {string} padString
 * @param {string} init Intitial value
 * @see R_.padRight, R_.padLeftUntil, R.padRightUntil
 *
 * @return String
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padLeft(10, '0')('1') // '00000000001'
 *        R_.padLeft(-9, '0')('1') // '1'
 *        R_.padLeft(1, '0')('1') // '1'
 *
 * @sig Number -> a -> a
 */
const padLeft = useWith(padLeftUntil, [lteThanLength, identity, identity]);

export default padLeft;
