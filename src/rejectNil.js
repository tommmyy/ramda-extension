import { reject, isNil } from 'ramda';

/**
 * Filters out every nil value in a list.
 * @func
 * @category List
 *
 * @example
 *
 * 		R_.rejectNil([null, undefined, '']); // ['']
 *
 * @sig [a] -> [a]
 *
 */
const rejectNil = reject(isNil);
export default rejectNil;
