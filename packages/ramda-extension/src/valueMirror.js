import { o, fromPairs, map } from 'ramda';
import duplicate from './duplicate';

/**
 * Creates object mirror from list of keys.
 *
 * @func
 * @category Object
 *
 *
 * @param {Array} keyList List of values representing the keys and values of resulting object.
 *
 * @return {Object} Object, where keys and appropriate values equals to value in `keyList`.
 *
 * @example
 *
 *    const actionTypes = R_.valueMirror([
 *        'ITEM_REQUEST',
 *        'ITEM_SUCCESS',
 *        'ITEM_ERROR',
 *    ]);
 *
 *        const action = { type: actionTypes.ITEM_REQUEST };
 *
 *        action.type === actionTypes.ITEM_REQUEST // true
 *        actionTypes.ITEM_SUCCESS // "ITEM_SUCCESS"
 *
 * @sig [String] -> Object
 *
 */
const valueMirror = o(fromPairs, map(duplicate));

export default valueMirror;
