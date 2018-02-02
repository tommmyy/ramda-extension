import { o, map } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import toUpperFirst from './toUpperFirst';
import listToString from './listToString';

/**
 * Converts string into PascalCase.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toPascalCase('hello-world')		// 'HelloWorld'
 *        R_.toPascalCase('hello- world')		// 'HelloWorld'
 *        R_.toPascalCase('  hello-/ world/ ')	// 'HelloWorld'
 *
 * @sig String -> String
 */
const toPascalCase = o(
	listToString,
	o(map(toUpperFirst), splitByNonAlphaNumeric)
);

export default toPascalCase;
