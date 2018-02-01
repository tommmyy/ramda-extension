import { compose, fromPairs, identity, map, toPairs, useWith } from 'ramda';

/**
 * Always returns null.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.mapKeysAndValues(([a, b]) => [b, a], { foo: "bar", baz: "boo" })
 *        // { bar: "foo", boo: "baz" }
 *
 * @sig ([a] -> [b]) -> Object -> Object
 */
const mapKeysAndValues = useWith(compose(fromPairs, map), [identity, toPairs]);

export default mapKeysAndValues;


