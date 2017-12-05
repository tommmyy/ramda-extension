import { not, o, isEmpty } from 'ramda';

/**
 * Returns true if the given value is not its type's empty value
 * @func
 * @category Logic
 *
 * @example
 *
 * 		notEmpty([1, 2, 3]);   //=> true
 *   	notEmpty([]);          //=> false
 * 		notEmpty('');          //=> false
 * 		notEmpty(null);        //=> true
 * 		notEmpty({});          //=> false
 * 		notEmpty({length: 0}); //=> true
 *
 * @sig a -> Boolean
 */
const notEmpty = o(not, isEmpty);
export default notEmpty;
