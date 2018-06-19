import { o, map, toUpper } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import joinWithUnderscore from './joinWithUnderscore';

/**
 * Converts string into SCREAMING_SNAKE_CASE.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toScreamingSnakeCase('hello-world')		// 'HELLO_WORLD'
 *        R_.toScreamingSnakeCase('hello- world')		// 'HELLO_WORLD'
 *        R_.toScreamingSnakeCase('  hello-/ world/ ')	// 'HELLO_WORLD'
 *
 * @sig String -> String
 */
const toScreamingSnakeCase = o(
	joinWithUnderscore,
	o(map(toUpper), splitByNonAlphaNumeric)
);

export default toScreamingSnakeCase;
