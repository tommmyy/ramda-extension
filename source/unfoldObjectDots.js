import {
	o,
	mergeAll,
	values,
	mapObjIndexed,
	map,
	objOf,
	useWith,
	flip,
	call,
	identity,
	compose,
	apply,
} from 'ramda';
import splitByDot from './splitByDot';

/**
 * Unfolds input object by dot delimetered path inside its keys.
 *
 * @category Object
 *
 * @example
 *
 *		unfoldObjectDots({'a.b.c': 1, 'd.e.f': 2, 'g': 3})
 *	 	// {a: {b: {c: 1}}, d: {e: {f: 2}}, g: 3}
 *
 * @sig Object -> Object
 */
export default o(
	o(mergeAll, values),
	mapObjIndexed(useWith(flip(call), [identity, compose(apply(compose), map(objOf), splitByDot)]))
);
