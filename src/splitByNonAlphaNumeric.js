import { o, equals, split, reject } from 'ramda';
import { emptyString, nonAlphaNumericRegExp } from './internal';

/**
 * Splits string into list. Delimeter is every sequnce of non-alphanumerical values.
 *
 * @func
 * @category String
 *
 * @example
 *
 * 		R_.splitByNonAlphaNumeric('Hello    world/1'); // ['Hello', 'world', '1']
 *
 * @sig String -> [String]
 *
 */
const splitByNonAlphaNumeric = o(reject(equals(emptyString)), split(nonAlphaNumericRegExp));

export default splitByNonAlphaNumeric;
