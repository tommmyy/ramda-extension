import { apply, compose } from 'ramda';

/**
 * Applies composition by a list of functions.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.applyCompose([multiply(2), add(1)])(3) // 8
 *
 * @sig [(a -> b)] -> a -> b
 */
const applyCompose = apply(compose);

export default applyCompose;
