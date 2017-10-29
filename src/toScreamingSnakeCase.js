import { o, map, toUpper, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * Converts string into SCREAMINT_SNAKE_CASE.
 *
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
export default o(
	join('_'),
	o(map(toUpper), splitByNonAlphaNumeric)
);
