import { find } from 'ramda';
import notNil from './notNil';

/**
 * Returns first not nil value
 * @func
 * @category List
 *
 * @example
 *
 * 		R_.findNotNil([null, undefined, 0, true]) // 0
 *
 * @sig [a] -> a
 *
 */
const findNotNil = find(notNil);
export default findNotNil;
