import { o, map, toLower, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * Converts string into dot.case.
 *
 * @category String
 *
 * @example
 *
 * 		toKebabCase('hello-world') // 'hello.world'
 * 		toKebabCase('hello/*? world') // 'hello.world'
 * 		toKebabCase('  hello -/ world/ ') // 'hello.world'
 *
 * @sig String -> String
 */
export default o(
	join('.'),
	o(map(toLower), splitByNonAlphaNumeric)
);
