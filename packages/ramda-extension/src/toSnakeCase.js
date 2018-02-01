import { map, o, toLower } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import joinWithUnderscore from './joinWithUnderscore';

/**
 * Converts string into snake_case.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toSnakeCase('hello-world') // 'hello_world'
 *        R_.toSnakeCase('hello- world') // 'hello_world'
 *        R_.toSnakeCase('  hello-/ world/ ') // 'hello_world'
 *
 * @sig String -> String
 */
const toSnakeCase = o(
	joinWithUnderscore,
	o(map(toLower), splitByNonAlphaNumeric)
);

export default toSnakeCase;
