import { o, join, adjust, toLower } from 'ramda';

/**
 * Decapitalize first letter.
 *
 * @category String
 *
 * @example
 *
 * 		toLowerFirst('HELLO') // 'hELLO'
 *
 * @sig String -> String
 */
export default o(join(''), adjust(toLower, 0));
