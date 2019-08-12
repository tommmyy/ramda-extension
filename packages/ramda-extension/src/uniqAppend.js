import { append, uniq } from 'ramda';
import composeC from './composeC';

/**
 * Returns a new list containing the unique contents of the given list, followed by the given element.
 *
 * @func
 * @category List
 *
 * @param {any} el The element to add to the end of the new list.
 * @param Array list The list of elements to add a new item to.
 *
 * @return Array A new list containing the elements of the old list followed by `el`.
 *
 *
 * @example
 *
 *        R_.uniqAppend("a", ["a", "b"]) // ["a", "b"]
 *        R_.uniqAppend("d", ["a", "b"]) // ["a", "b", "d"]
 *
 * @sig a -> [a] -> [a]
 */
const uniqAppend = composeC(uniq, append);

export default uniqAppend;
