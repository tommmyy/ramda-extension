import { converge, compose, call, juxt, cond, map, last } from 'ramda';
import applyCompose from './applyCompose';
import xPairs from './xPairs';

/**
 * Returns first result from evaluation of functions in the list, that satisfies predicate.
 * Returns `undefined` otherwise.
 *
 * @func
 * @category Function
 *
 * @param {function} predicate Predicate that is applied to result of calling fn from `listFns` with `values`
 * @param {array} listFns List of functions
 * @param {*} values Values applied to functions from `listFns`
 * @return {any} Returns first result of calling fn from `listFns` with `values` that satisfies `predicate`.
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
	map(juxt([applyCompose, last])),
	xPairs
);

const dispatchWith = converge(call(cond), [getPredicates]);

export default dispatchWith;
