import { converge, reduce, nthArg, partialRight, unapply, tail} from 'ramda';
import headArg from './headArg';
/**
 * Extends the reduce functionality by adding the original accumulator value
 * as a third argument and the original list as a fourth argument to the
 * iterator function.
 *
 * @func
 * @category List
 *
 * @param {Function} fn The iterator function. Receives four arguments, the
 *        accumulator, the current element, the source accumulator and the
 *        source list.
 * @param {*} acc The initial accumulator value and value passed as the source
 *        accumulator value in the iterator function.
 * @param {Array} list The list to iterator over and value passed as the source
 *        list in the iterator function.
 * @return {*} The reduced result.
 *
 * @example
 *        R_.reduceSource((acc, v, sAcc) => v + acc + sAcc, 1, [1, 2, 3]); // 10
 *        R_.reduceSource(R.pipe(R.unapply(R.flatten), R.sum), 0, [1, 2]); // 9
 *
 * @sig ((a, b, a, [b]) -> a) -> a -> [b] -> a
 */
const reduceSource = converge(
	reduce,
	[
		converge(
			partialRight,
			[
				headArg, // iteratorFn
				unapply(tail), // [accumulator, list]
			]
		),
		nthArg(1), // accumulator
		nthArg(2), // list
	],
);

export default reduceSource;
