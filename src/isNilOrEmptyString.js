import { anyPass, isNil } from 'ramda';
import isEmptyString from './isEmptyString';

/**
 * @sig a -> Boolean
 */
export default anyPass([isNil, isEmptyString]);
