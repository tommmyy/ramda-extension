import R from 'ramda';
import isEmptyString from './isEmptyString';

/**
 * @sig a -> Boolean
 */
export default R.anyPass([R.isNil, isEmptyString]);
