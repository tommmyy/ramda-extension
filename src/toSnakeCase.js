import { o, map, toLower, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * @example
 *
 * 		toSnakeCase('hello-world') // 'hello_world'
 * 		toSnakeCase('hello- world') // 'hello_world'
 * 		toSnakeCase('  hello-/ world/ ') // 'hello_world'
 */
export default o(
	join('_'),
	o(map(toLower), splitByNonAlphaNumeric)
);
