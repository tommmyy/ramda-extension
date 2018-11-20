import { o, join, adjust, toLower } from 'ramda';

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
const toLowerFirst = o(join(''), adjust(0, toLower));

export default toLowerFirst;
