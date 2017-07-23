import R from 'ramda';
import notNil from './notNil';

/**
 * Returns first not nil value
 *
 * @sig [a] -> a
 */
export default R.find(notNil);
