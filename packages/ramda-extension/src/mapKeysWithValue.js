import { append, apply, last, map, o, of, juxt, compose, toPairs, fromPairs, useWith } from 'ramda';

const appendLast = append(last);
const applyFnFirstAndAppendLast = compose(appendLast, map(apply), of);
const wrapMapping = o(juxt, applyFnFirstAndAppendLast);

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

const mapKeysWithValue = useWith(compose(fromPairs, map), [wrapMapping, toPairs]);

export default mapKeysWithValue;
