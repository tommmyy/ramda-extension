import { find } from 'ramda';
import notNil from './notNil';

/**
 * Returns first not nil value
 *
 * @category List
 *
 * @example
 *
 * 		findNotNil([null, undefined, 0, true]) // 0
 *
 * @sig [a] -> a
 *
 */
export default find(notNil);
