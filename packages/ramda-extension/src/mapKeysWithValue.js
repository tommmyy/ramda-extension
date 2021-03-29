import {
	flip,
	prepend,
	apply,
	last,
	juxt,
	compose,
	identity,
	useWith,
} from 'ramda';

import mapKeysAndValues from './mapKeysAndValues';

const wrapMapping = compose(juxt, flip(prepend)([last]), apply);

/**
 * Map object keys. Mapping functions have both key and value as arguments.
 *
 * @func
 * @category Object
 *
 * @example
 *
 *      R_.mapKeysWithValue((key, value) => value)({ foo: "bar" }) // { bar: "bar" }
 *
 * @sig ((String, a) -> b) -> Object -> Object
 */

const mapKeysWithValue = useWith(mapKeysAndValues, [wrapMapping, identity]);

export default mapKeysWithValue;
