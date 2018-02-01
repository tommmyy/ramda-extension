import { equals, identity, reject, useWith } from 'ramda';

/**
 * Filters out every value in a list that equals to first argument.
 *
 * @func
 * @category List
 *
 * @example
 *
 * 		R_.rejectEq('foo', ['foo', 'bar', 'foo', 'bar']); // ['bar', 'bar']
 *
 * @sig a -> [b] -> [c]
 *
 */
const rejectEq = useWith(reject, [equals, identity]);

export default rejectEq;
