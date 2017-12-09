import { o, join, adjust, toLower } from 'ramda';

/**
 * Decapitalize first letter.
 *
 * @func
 * @category String
 *
 * @example
 *
 * 		R_.toLowerFirst('HELLO') // 'hELLO'
 *
 * @sig String -> String
 */
const toLowerFirst = o(join(''), adjust(toLower, 0));

export default toLowerFirst;
