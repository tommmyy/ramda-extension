import { o, map, toLower, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * Converts string into snake_case.
 *
 * @category String
 *
 * @example
 *
 * 		toSnakeCase('hello-world') // 'hello_world'
 * 		toSnakeCase('hello- world') // 'hello_world'
 * 		toSnakeCase('  hello-/ world/ ') // 'hello_world'
 *
 * @sig String -> String
 */
export default o(
	join('_'),
	o(map(toLower), splitByNonAlphaNumeric)
);
