import { o, join, adjust, toLower } from 'ramda';

/**
 * @example
 *
 * 		toLowerFirst('HELLO') // 'hELLO'
 */
export default o(join(''), adjust(toLower, 0));
