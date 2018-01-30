import { view, flip, o, identity, useWith } from 'ramda';

/**
 * Applies custom view function on the given lens
 *
 * @func
 * @category Object
 * @param {Lens} lens
 * @param {*} v view function
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R_.viewWith(R.lensIndex(0), R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 * 		R_.viewWith(R.lensIndex(0), R.divide(R.__, 2), [4]) //=> 2
 */
const viewWith = useWith(flip(o), [view, identity, identity]);

export default viewWith;
