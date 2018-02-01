import { adjust, join, o, toLower } from 'ramda';

/**
 * Decapitalize first letter.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toLowerFirst('HELLO WORLD') // 'hELLO WORLD'
 *
 * @sig String -> String
 */
const toLowerFirst = o(join(''), adjust(toLower, 0));

export default toLowerFirst;
