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
 *      R_.between(1, 5, 4); //=> true
 *      R_.between(3, 8, 2.1); //=> false
 *      R_.between(100.1, 102, 100.1); //=> true


 */


const between = curry((min, max, val) => {
	if (val >= min && val <= max) {
		return true;
	}
	return false;
});

export default between;
