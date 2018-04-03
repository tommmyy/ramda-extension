import { curry } from 'ramda';
/**
 * See if an number (`val`) is within an array of two numbers ('list').
 *
 * @func
 * @category Type
 * @param {Number} a Starting value
 * @param {Number} b Ending value
 * @param {Number} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R_.between(4, 1, 5); //=> true
 *      R_.between(2.1, 3, 8); //=> false
 *      R_.between(100.1, 100.1, 102); //=> true

 */


const between = curry((val, a, b) => {
	if (val >= a && val <= b) {
		return true;
	}
	return false;
});

export default between;
