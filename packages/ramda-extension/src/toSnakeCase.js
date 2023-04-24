import { o, map, toLower } from 'ramda';
import splitByNonDowncaseAlphaNumeric from './splitByNonDowncaseAlphaNumeric';
import joinWithUnderscore from './joinWithUnderscore';

/**
 * Converts string into snake_case.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toSnakeCase('hello-world')		// 'hello_world'
 *        R_.toSnakeCase('hello- world')		// 'hello_world'
 *        R_.toSnakeCase('  hello-/ world/ ')	// 'hello_world'
 *        R_.toSnakeCase('helloWorld')	// 'hello_world'
 *
 * @sig String -> String
 */
const toSnakeCase = o(
	joinWithUnderscore,
	o(map(toLower), splitByNonDowncaseAlphaNumeric)
);

export default toSnakeCase;
