import {
	apply,
	call,
	compose,
	flip,
	identity,
	map,
	mapObjIndexed,
	mergeAll,
	o,
	objOf,
	useWith,
	values,
} from 'ramda';
import splitByDot from './splitByDot';

/**
 * Unfolds input object by dot delimetered path inside its keys.
 *
 * @func
 * @category Object
 *
 * @example
 *
 *        R_.unfoldObjectDots({'a.b.c': 1, 'd.e.f': 2, 'g': 3})
 *        // {a: {b: {c: 1}}, d: {e: {f: 2}}, g: 3}
 *
 * @sig Object -> Object
 */
const unfoldObjectDots = o(
	o(mergeAll, values),
	mapObjIndexed(useWith(flip(call), [identity, compose(apply(compose), map(objOf), splitByDot)]))
);

export default unfoldObjectDots;
