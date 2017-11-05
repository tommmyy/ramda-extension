import { constructN } from 'ramda';

/**
 * Constructs RegExp.
 *
 * @category Function
 *
 * @example
 *
 * 		test(constructRegExp('end$', 'gi'), 'in the end') // true
 *
 */
export default constructN(2, RegExp);
