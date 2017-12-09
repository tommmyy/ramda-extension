import { o, map, toLower, join } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';

/**
 * Converts string into dot.case.
 * @func
 * @category String
 *
 * @example
 *
 * 		R_.toDotCase('hello-world') // 'hello.world'
 * 		R_.toDotCase('hello/*? world') // 'hello.world'
 * 		R_.toDotCase('  hello -/ world/ ') // 'hello.world'
 *
 * @sig String -> String
 */
const toDotCase = o(
	join('.'),
	o(map(toLower), splitByNonAlphaNumeric)
);
export default toDotCase;
