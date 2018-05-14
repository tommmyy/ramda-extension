import dispatchWith from './dispatchWith';
import notNil from './notNil';

/**
 * Returns result of first not nil evaluated functions in the list.
 * `undefined` otherwise.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        const validateName = R_.dispatch([
 *           ifElse(Boolean, R_.noop, always('Name is required.')),
 *           ifElse(R_.isString, R_.noop, always('Name must be valid.')),
 *        ]);
 *
 * 		  validateName("") // 'Name is required.'
 * 		  validateName(111) // 'Name must be valid.'
 * 		  validateName("Valid name") // undefined
 *
 * @sig [a] -> b|undefined
 */
const dispatch = dispatchWith(notNil);

export default dispatch;
