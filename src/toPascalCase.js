import { o, map } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import toUpperFirst from './toUpperFirst';
import listToString from './listToString';
/**
 * @example
 *
 * 		toPascalCase('hello-world') // 'HelloWorld'
 * 		toPascalCase('hello- world') // 'HelloWorld'
 * 		toPascalCase('  hello-/ world/ ') // 'HelloWorld'
 */
export default o(
	listToString,
	o(map(toUpperFirst), splitByNonAlphaNumeric)
);
