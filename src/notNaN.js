import { o, not } from 'ramda';

/* eslint-disable max-len */
/**
 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 * @sig a -> Boolean
 */
export default o(not, isNaN);
/* eslint-enable max-len */
