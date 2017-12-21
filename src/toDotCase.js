import { o, map, toLower } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import joinWithDot from './joinWithDot';

/**
 * Converts string into dot.case.
 *
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
	joinWithDot,
	o(map(toLower), splitByNonAlphaNumeric)
);

export default toDotCase;
