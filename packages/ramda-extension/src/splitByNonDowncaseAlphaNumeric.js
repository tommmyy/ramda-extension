import { o, equals, map, trim, split, reject } from 'ramda';
import { nonDowncaseAlphaNumericRegexp } from './internal/nonDowncaseAlphaNumericRegexp';
import { emptyString } from './internal/primitives';

/**
 * Splits string into list. Delimiter is every sequence of non-alphanumerical
 * and non-downcased values.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.splitByNonDowncaseAlphaNumeric('fooBar'); // ['foo', 'Bar']
 *        R_.splitByNonDowncaseAlphaNumeric('foo AND bar and fooBar') // ['foo', 'AND', 'bar', and', 'foo', Bar']
 *
 * @sig String -> [String]
 *
 */
const splitByNonDowncaseAlphaNumeric = o(
	reject(equals(emptyString)),
	o(map(trim), split(nonDowncaseAlphaNumericRegexp))
);

export default splitByNonDowncaseAlphaNumeric;
