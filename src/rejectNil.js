import { reject, isNil } from 'ramda';

/**
 * Filters out every nil value in a list.
 *
 * @category List
 *
 * @example
 *
 * 		rejectNil([null, undefined, '']); // ['']
 *
 * @sig [a] -> [a]
 *
 */
export default reject(isNil);
