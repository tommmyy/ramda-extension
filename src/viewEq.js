import { equals, identity, useWith } from 'ramda';
import viewWith from './viewWith';

/**
 * Returns true if the given lens equals to given value
 *
 * @func
 * @category Object
 * @param {Lens} lens
 * @param {*} v value to equal
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R_.viewEq(R.lensIndex(0), 'foo', ['foo', 'bar', 'baz']); //=> true
 */
const viewEq = useWith(viewWith, [identity, equals, identity]);

export default viewEq;
