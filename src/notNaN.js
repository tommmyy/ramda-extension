import R from 'ramda';

/**
 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 * @sig a -> Boolean
 */
export default R.o(R.not, isNaN);
