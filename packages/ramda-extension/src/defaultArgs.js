import {
	map,
	defaultTo,
	transpose,
	apply,
	call,
	lt,
	equals,
	when,
	pipe,
	curryN,
	o,
	flip,
	useWith,
	length,
	append,
	identity,
	prepend,
	gt,
	cond,
} from 'ramda';
import argumentsToList from './argumentsToList';
import equalsLength from './equalsLength';
import overHead from './overHead';

const pipe4 = curryN(4, pipe);
const pipe2 = curryN(2, pipe);
const call3 = curryN(3, call);

const mapOrphans = o(map, when(equalsLength(1)));
const prependUndefined = o(mapOrphans(prepend(undefined)), transpose);
const appendUndefined = o(mapOrphans(append(undefined)), transpose);

const mapLength = map(length);
const inputIsSameAsDefault = o(apply(equals), mapLength);
const inputIsBigger = o(apply(lt), mapLength);
const inputIsSmaller = o(apply(gt), mapLength);

const transposeAndFillMissing = cond([
	[inputIsSameAsDefault, transpose],
	[inputIsBigger, prependUndefined],
	[inputIsSmaller, appendUndefined],
]);

const makeDefaultArgs = o(apply(call), overHead(defaultTo));

const transformationPipe = pipe4(
	argumentsToList,
	transposeAndFillMissing,
	map(makeDefaultArgs)
);

const createTransformationPipeWithSuppliedFn = o(
	call3,
	o(transformationPipe, apply)
);

const waitForArguments = pipe2(argumentsToList);
const callInputsAndWaitForArguments = pipe(call, waitForArguments);

/**
 * Creates default arguments for given function
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.defaultArgs(['a', 'b'], R.concat)(undefined, 'c') // ac
 *
 */
const defaultArgs = useWith(flip(callInputsAndWaitForArguments), [
	identity,
	createTransformationPipeWithSuppliedFn,
]);

export default defaultArgs;
