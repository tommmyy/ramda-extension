import { prepend, uniq } from 'ramda';
import composeC from './composeC';

/**
 * Returns a new list containing the unique contents of the given list, starting by the given element.
 *
 * @func
 * @category List
 *
 * @param {any} el The element to add to the tart of the new list.
 * @param Array list The list of elements to add a new item to.
 *
 * @return Array A new list with the given element at the front following by the elements of the old list.
 *
 *
 * @example
 *
 *        R_.uniqPrepend("b", ["a", "b"]) // ["b", "a"]
 *        R_.uniqPrepend("d", ["a", "b"]) // ["d","a", "b"]
 *
 * @sig a -> [a] -> [a]
 */
const uniqPrepend = composeC(uniq, prepend);

export default uniqPrepend;
