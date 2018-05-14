import { converge, compose, call, juxt, cond, map } from 'ramda';
import applyCompose from './applyCompose';
import snd from './snd';
import xPairs from './xPairs';

/**
 * Returns result of first not nil evaluated functions in the list.
 * `undefined` otherwise.
 *
 * @func
 * @category Function
 *
 * @example
 * const firstTruthy = dispatchWith(Boolean)([
 *   prop("foo"),
 *   prop("bar"),
 * ])
 *
 * firstTruthy({foo: "foo", bar: false}) // "foo"
 * firstTruthy({foo: false, bar: "bar" }) // "bar"
 *
 * @sig [a] -> b|undefined
 */
const getPredicates = compose(
	map(juxt([applyCompose, snd])),
	xPairs
);

const dispatchWith = converge(call(cond), [getPredicates]);

export default dispatchWith;
