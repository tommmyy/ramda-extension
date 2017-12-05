import { lensIndex, over } from 'ramda';

/**
 * Returns an over lens to the first index of list.
 * @func
 * @category List
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R_.overHead(R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
const overHead = over(lensIndex(0));
export default overHead;
