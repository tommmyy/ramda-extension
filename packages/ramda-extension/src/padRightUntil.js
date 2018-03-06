import { until, flip, identity, concat, useWith } from 'ramda';

/**
 * Takes a predicate, string `padString` and initial value. `padString` is prepend to the output string
 * everytime `pred` returns falsy value.
 *
 * @param {fn} pred Called after every prepend of `padString`.
 * @param {string} padString String that is added everytime the `pred` returns falsy value
 * @param {string} init Intitial value
 *
 * @return String
 * @see R_.padLeft, R_.padRight, R_.padLeftUntil
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padRightUntil((x) => x.length === 10, '0')('1') // '1000000000'
 *
 * @sig (a -> Boolean) -> a -> a
 */
const padRightUntil = useWith(until, [identity, flip(concat), identity]);

export default padRightUntil;
