import { o, map, toLower, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * @example
 *
 * 		toKebabCase('hello-world') // 'hello.world'
 * 		toKebabCase('hello/*? world') // 'hello.world'
 * 		toKebabCase('  hello -/ world/ ') // 'hello.world'
 */
export default o(
	join('.'),
	o(map(toLower), splitByNonAlphaNumeric)
);
