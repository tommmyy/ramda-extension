import { constructN } from 'ramda';

/**
 * Constructs RegExp.
 *
 * @func
 * @category Function
 *
 * @example
 *
 * 		test(R_.constructRegExp('end$', 'gi'), 'in the end') // true
 *
 */
const constructRegExp = constructN(2, RegExp);

export default constructRegExp;
