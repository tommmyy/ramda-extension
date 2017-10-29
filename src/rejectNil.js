import { reject, isNil } from 'ramda';

/**
 * @example
 *
 * 		rejectNil([null, undefined, '']); // ['']
 *
 * @sig [a] -> [a]
 *
 */
export default reject(isNil);
