import { o, map, toUpper, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * Converts string into SCREAMINT_SNAKE_CASE.
 * @func
 * @category String
 *
 * @example
 *
 * 		toScreamingSnakeCase('hello-world') // 'HELLO_WORLD'
 * 		toScreamingSnakeCase('hello- world') // 'HELLO_WORLD'
 * 		toScreamingSnakeCase('  hello-/ world/ ') // 'HELLO_WORLD'
 *
 * @sig String -> String
 */
const toScreamingSnakeCase = o(
	join('_'),
	o(map(toUpper), splitByNonAlphaNumeric)
);
export default toScreamingSnakeCase;
