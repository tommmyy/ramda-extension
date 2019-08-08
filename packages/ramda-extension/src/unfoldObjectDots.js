import {
	o,
	values,
	mapObjIndexed,
	map,
	objOf,
	useWith,
	flip,
	call,
	identity,
	compose,
} from 'ramda';
import applyCompose from './applyCompose';
import splitByDot from './splitByDot';
import mergeDeepRightAll from './mergeDeepRightAll';

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
	o(mergeDeepRightAll, values),
	mapObjIndexed(
		useWith(flip(call), [
			identity,
			compose(
				applyCompose,
				map(objOf),
				splitByDot
			),
		])
	)
);

export default unfoldObjectDots;
