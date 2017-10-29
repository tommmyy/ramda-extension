import { o } from 'ramda';
import toPascalCase from './toPascalCase';
import toLowerFirst from './toLowerFirst';
/**
 * @example
 *
 * 		toCamelCase('hello-world') // 'helloWorld'
 * 		toCamelCase('hello- world') // 'helloWorld'
 * 		toCamelCase('  hello-/ world/ ') // 'helloWorld'
 */
export default o(toLowerFirst, toPascalCase);
