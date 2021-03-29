import {
	compose,
	filter,
	identity,
	when,
	anyPass,
	flatten,
	values,
	mapObjIndexed,
	map,
	into,
} from 'ramda';
import flattenArgs from './flattenArgs';
import joinWithSpace from './joinWithSpace';
import isObject from './isObject';
import isString from './isString';
import isNumber from './isNumber';

const filterFalsy = filter(identity);
const keepObjectStringNumber = filter(anyPass([isObject, isString, isNumber]));
const keepKeyIfValueIsTruthy = mapObjIndexed((v, k) => v && k);
const destructObject = compose(filterFalsy, values, keepKeyIfValueIsTruthy);

const transduceArgs = into(
	[],
	compose(
		map(when(isObject, destructObject)),
		keepObjectStringNumber,
		filterFalsy
	)
);

/**
 * Conditionally joining classNames together.
 *
 * The cx function takes any number of arguments which can be a string, object
 * even nested arrays of strings and objects.
 *
 * The argument 'foo' is short for { foo: true }.
 *
 * If the value associated with a given key is falsy, that key won't be included in the output.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.cx('Table', ['MagicTable'], {'Table--active': true })	// 'Table MagicTable Table--active'
 *        R_.cx('Table', ['MagicTable'], {'Table--active': false })	// 'Table MagicTable'
 *        R_.cx(['Table', ['MagicTable']])				// 'Table MagicTable'
 *
 * @sig String | [String] | Object -> String
 */
const cx = compose(joinWithSpace, flatten, transduceArgs, flattenArgs);

export default cx;
