import { allPass } from 'ramda';
import notNil from './notNil';
import isObject from './isObject';


/**
 * Returns true if argument is not nil object.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 * 		R_.isNotNilObject(null) // false
 * 		R_.isNotNilObject({}) // true
 * 		R_.isNotNilObject([]) // true
 * 		R_.isNotNilObject() // false
 * 		R_.isNotNilObject(1) // false
 * 		R_.isNotNilObject("") // false
 *
 * @sig a -> Boolean
 *
 */
const isNotNilObject = allPass([notNil, isObject]);

export default isNotNilObject;
