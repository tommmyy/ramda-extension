import { o } from 'ramda';
import toPascalCase from './toPascalCase';
import toLowerFirst from './toLowerFirst';

/**
 * Converts string into camelCase.
 * @func
 * @category String
 *
 * @example
 *
 * 		toCamelCase('hello-world') // 'helloWorld'
 * 		toCamelCase('hello- world') // 'helloWorld'
 * 		toCamelCase('  hello-/ world/ ') // 'helloWorld'
 *
 * @sig String -> String
 *
 */
const toCamelCase = o(toLowerFirst, toPascalCase);
export default toCamelCase;
