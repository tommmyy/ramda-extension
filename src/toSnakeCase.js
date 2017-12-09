import { o, map, toLower, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * Converts string into snake_case.
 * @func
 * @category String
 *
 * @example
 *
 * 		R_.toSnakeCase('hello-world') // 'hello_world'
 * 		R_.toSnakeCase('hello- world') // 'hello_world'
 * 		R_.toSnakeCase('  hello-/ world/ ') // 'hello_world'
 *
 * @sig String -> String
 */
const toSnakeCase = o(
	join('_'),
	o(map(toLower), splitByNonAlphaNumeric)
);
export default toSnakeCase;
