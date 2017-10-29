import { constructN } from 'ramda';

/**
 * @example
 *
 * 		test(constructRegExp('end$', 'gi'), 'in the end') // true
 */
export default constructN(2, RegExp);
