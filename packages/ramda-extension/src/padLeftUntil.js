import { until, identity, concat, useWith } from 'ramda';

/**
 * Takes a predicate, string `padString` and initial value. `padString` is contacted to the output string
 * everytime `pred` returns falsy value.
 *
 * @param {fn} pred Called after every contactation of `padString`
 * @param {string} padString String that is added everytime the `pred` returns falsy value
 * @param {string} init Intitial value
 *
 * @return String
 * @see padLeft, padRight, padRightUntil
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padLeftUntil((x) => x.length === 10, '0')('1') // '0000000001'
 *
 * @sig (a -> Boolean) -> a -> a
 */
const padLeftUntil = useWith(until, [identity, concat, identity]);

export default padLeftUntil;
