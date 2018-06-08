import dispatchWith from './dispatchWith';
import notNil from './notNil';

/**
 * Returns first not nil result from evaluation of functions in the list.
 * Returns `undefined` otherwise.
 *
 * @func
 * @category Function
 * @see dispatchWith
 *
 * @param {array} listFns List of functions
 * @param {*} values Values applied to functions from `listFns`
 * @return {any} Returns first not nil result of calling fn from `listFns` with `values`.
 *
 * @example
 *
 *        const validateName = R_.dispatch([
 *           ifElse(Boolean, R_.noop, always('Name is required.')),
 *           ifElse(R_.isString, R_.noop, always('Name must be valid.')),
 *        ]);
 *
 *        validateName("") // 'Name is required.'
 *        validateName(111) // 'Name must be valid.'
 *        validateName("Valid name") // undefined
 *
 * @sig [a] -> b|undefined
 */
const dispatch = dispatchWith(notNil);

export default dispatch;
