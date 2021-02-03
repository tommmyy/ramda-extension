import { o, map, toLower, compose, replace, curry } from 'ramda';
import splitByNonAlphaNumeric from './splitByNonAlphaNumeric';
import joinWithDash from './joinWithDash';

const normalize = curry((form, str) => str.normalize(form));

/**
 * Converts string into kebab-case.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toKebabCase('hello-world')		// 'hello-world'
 *        R_.toKebabCase('hello- world')		// 'hello-world'
 *        R_.toKebabCase('  hello-/ world/ ')	// 'hello-world'
 *
 * @sig String -> String
 */
const toKebabCase = compose(
	joinWithDash,
	o(map(toLower), splitByNonAlphaNumeric),
	replace(/[\u0300-\u036f]/g, ''),
	normalize('NFD')
);

export default toKebabCase;
