import { o, equals, split, reject } from 'ramda';
import { nonAlphaNumericRegExp } from './internal/nonAlphaNumericRegExp';
import { emptyString } from './internal/primitives';

/**
 * Splits string into list. Delimiter is every sequence of non-alphanumerical values.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.splitByNonAlphaNumeric('Hello    world/1'); // ['Hello', 'world', '1']
 *
 * @sig String -> [String]
 *
 */
const splitByNonAlphaNumeric = o(
	reject(equals(emptyString)),
	split(nonAlphaNumericRegExp)
);

export default splitByNonAlphaNumeric;
