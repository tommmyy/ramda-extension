import { o, map } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import toUpperFirst from './toUpperFirst';
import listToString from './listToString';

/**
 * Converts string into PascalCase.
 *
 * @category String
 *
 * @example
 *
 * 		toPascalCase('hello-world') // 'HelloWorld'
 * 		toPascalCase('hello- world') // 'HelloWorld'
 * 		toPascalCase('  hello-/ world/ ') // 'HelloWorld'
 *
 * @sig String -> String
 */
export default o(
	listToString,
	o(map(toUpperFirst), splitByNonAlphaNumeric)
);
