import { uniq, filter } from 'ramda';
import composeC from './composeC';

/**
 * Returns unique values that were previously filtered by `filtering`.
 *
 * @func
 * @category List
 *
 * @param {Function} filtering filtering function
 * @param {array} xs Data
 *
 * @return {array} Unique array of values
 *
 * @example
 *
 *        R_.uniqFilter(R_.equalsLength(5), ["hello", "hello", "world"]) // ["hello", "world"]
 *
 * @sig (a -> Boolean) -> [a] -> [a]
 */
const uniqFilter = composeC(uniq, filter);

export default uniqFilter;
