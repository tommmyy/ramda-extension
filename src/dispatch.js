import R from 'ramda';
import firstTruthy from './firstTruthy';

/**
 * Returns first not nil value of dispatching list of functions over a input.
 * @sig [a] -> b
 */
export default R.useWith(R.o(firstTruthy, R.call), [R.juxt, R.identity]);
