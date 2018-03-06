import { converge, curry, pipe } from 'ramda';

/**
 * Creates curried pipe. The leftmost function determines the arity of curry.
 *
 * @func
 * @category Function
 *
 * @example
 *
 * const appendAndRejectNil = R_.pipeC(R.append, R.rejectNil);
 * const appendCAndRejectNil = appendAndRejectNil('c');
 * appendCAndRejectNil(['a', null]) // ['a', 'c'];
 *
 */
const pipeC = converge(curry, [pipe]);

export default pipeC;
