import { o, map, toLower } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import joinWithDash from './joinWithDash';

/**
 * Converts string into kebab-case.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toKebabCase('hello-world')		// 'hello-world'
 *        R_.toKebabCase('hello- world')		// 'hello-world'
 *        R_.toKebabCase('  hello-/ world/ ')	// 'hello-world'
 *
 * @sig String -> String
 */
const toKebabCase = o(joinWithDash, o(map(toLower), splitByNonAlphaNumeric));

export default toKebabCase;
