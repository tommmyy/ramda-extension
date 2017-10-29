import { o, map, toUpper, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * @example
 *
 * 		toScreamingSnakeCase('hello-world') // 'HELLO_WORLD'
 * 		toScreamingSnakeCase('hello- world') // 'HELLO_WORLD'
 * 		toScreamingSnakeCase('  hello-/ world/ ') // 'HELLO_WORLD'
 */
export default o(
	join('_'),
	o(map(toUpper), splitByNonAlphaNumeric)
);
