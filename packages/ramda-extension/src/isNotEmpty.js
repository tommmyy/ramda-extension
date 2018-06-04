import { complement, isEmpty } from 'ramda';

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
 *        R_.isNotEmpty([1, 2, 3]);   // true
 *        R_.isNotEmpty([]);          // false
 *        R_.isNotEmpty('');          // false
 *        R_.isNotEmpty(null);        // true
 *        R_.isNotEmpty({});          // false
 *        R_.isNotEmpty({length: 0}); // true
 *
 */
const isNotEmpty = complement(isEmpty);

export default isNotEmpty;
