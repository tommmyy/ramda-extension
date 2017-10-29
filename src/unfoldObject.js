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
	split,
} from 'ramda';
/**
 * @example
 *
 *	unfoldObject({'a.b.c': 1, 'd.e.f': 2, 'g': 3})
 *	// {a: {b: {c: 1}}, d: {e: {f: 2}}, g: 3}
 *
 * @sig Object -> Object
 */
export default o(
	o(mergeAll, values),
	mapObjIndexed(useWith(flip(call), [identity, compose(apply(compose), map(objOf), split('.'))]))
);
