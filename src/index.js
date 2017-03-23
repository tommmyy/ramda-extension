import R from 'ramda';

export const isArray = R.is(Array);
export const isString = R.is(String);
export const isFunction = R.is(Function);
export const isObject = R.is(Object);
export const isPromise = R.allPass([isObject, R.compose(isFunction, R.prop('then'))]);
export const deepMerge = R.curry((a, b) => (isObject(a) && isObject(b)) ?
	R.mergeWith(deepMerge, a, b) :
	b);
export const notNil = R.compose(R.not, R.isNil);
export const notEmpty = R.compose(R.not, R.isEmpty);
export const log = R.tap((x) => console.log(x));

// http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
export const isNumeric = (n) => !isNaN(parseFloat(n)) && isFinite(n);
export const notNumeric = R.compose(R.not, isNumeric);

// (a → ... → b) → [a, ..., b] → c
// Example:
// const f = (a) => (b) => a + b;
// reduceCallable(f, [1, 2]); // 3
export const reduceCallable = R.reduce((acc, next) => acc(next));

export const isNegative = R.lt(R.__, 0);

export const isNilOrEmptyString = R.anyPass([R.isNil, R.equals('')]);

export const dispatch = R.curry(
	(preds, value) => R.length(preds) ?
		R.reduce(
			(acc, next) => {
				return R.is(String)(acc) ?
			      acc :
			      next(value)
			    ;
			},
			R.head(preds)(value),
			R.tail(preds)
		) :
		null
);
export const alwaysNull = R.always(null);
export const noop = alwaysNull;

/**
 * Testing string if starts with some prefix.
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean}          True if `x` starts with `prefix`
 */
export const startsWith = R.curry((prefix, x) =>
	R.test(new RegExp(`^${prefix}`), x)
);


/**
 * Converts variadic function to function that accepts list.

 * (a, b, c, ... → d) → ([a, b, c, ...] → d)
 */
export const fromVariadic = R.unapply(R.identity);

export default {
	deepMerge,
	dispatch,
	isArray,
	isString,
	isFunction,
	isObject,
	isPromise,
	isNumeric,
	isNegative,
	notNumeric,
	reduceCallable,
	notNil,
	notEmpty,
	log,
	isNilOrEmptyString,
	alwaysNull,
	noop,
	startsWith,
	fromVariadic,
};
