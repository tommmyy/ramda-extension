import { isEmpty, not, o } from 'ramda';

/**
 * Returns true if the given value is not its type's empty value
 *
 * @func
 * @category Logic
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEmpty([1, 2, 3]);   //=> true
 *    R_.notEmpty([]);          //=> false
 *        R_.notEmpty('');          //=> false
 *        R_.notEmpty(null);        //=> true
 *        R_.notEmpty({});          //=> false
 *        R_.notEmpty({length: 0}); //=> true
 *
 */
const notEmpty = o(not, isEmpty);

export default notEmpty;
