import { converge, curry, compose } from 'ramda';

/**
 * Creates curried compose. The rightmost function determines the arity of curry.
 *
 * @func
 * @category Function
 *
 * @example
 *
 * const appendAndRejectNil = R_.composeC(R.rejectNil, R.append);
 * const appendCAndRejectNil = appendAndRejectNil('c');
 * appendCAndRejectNil(['a', null]) // ['a', 'c'];
 *
 */
const composeC = converge(curry, [compose]);

export default composeC;
