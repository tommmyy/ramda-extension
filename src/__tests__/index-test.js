import R from 'ramda';
import { alwaysNull, startsWith, dispatch, noop, isNumeric, unfoldObject, reduceCallable, constructRegExp } from '../';

describe('noop', () => {
	it('returns null', () => {
		expect(noop()).toBe(null);
	});
});

describe('alwaysNull', () => {
	it('returns null', () => {
		expect(alwaysNull()).toBe(null);
	});
});

describe('isNumeric', () => {
	it('returns true for finite numbers', () => {
		expect(R.any(R.equals(true), [isNumeric(-1), isNumeric(0), isNumeric(1), isNumeric(1.1)])).toBe(true);
	});

	it('returns false for infinite numbers and non-number types', () => {
		expect(
			R.any(R.equals(true), [
				isNumeric(Infinity),
				isNumeric(NaN),
				isNumeric(''),
				isNumeric(() => {}),
				isNumeric(false),
				isNumeric(null),
				isNumeric(undefined),
				isNumeric({}),
				isNumeric([]),
			])
		).toBe(false);
	});
});

describe('unfoldProject', () => {
	it('should unfold object', () => {
		expect(unfoldObject({ 'a.b.c': 1, 'd.e.f': 2, g: 3 })).toEqual({
			a: { b: { c: 1 } },
			d: { e: { f: 2 } },
			g: 3,
		});
	});
});

describe('dispatch', () => {
	it('should return first not nil result ', () => {
		expect(dispatch([R.always(null), R.identity, R.always(null)], 3)).toBe(3);
	});
	it('should return undefined', () => {
		expect(dispatch([R.always(null), R.identity, R.always(null)], null)).toBe(undefined);
	});
});

describe('reduceCallable', () => {
	it('should return result after appling arguments ', () => {
		expect(reduceCallable(a => b => a + b, [1, 2])).toBe(3);
	});
});

describe('startsWith', () => {
	const startsWithUtil = (str, prefix, result) =>
		it(`should return ${result} if is testing '${str}' to start with '${prefix}'`, () => {
			expect(startsWith('h', 'hello')).toBe(true);
			expect(startsWith('he', 'hello')).toBe(true);
		});

	startsWithUtil('', 'hello', true);
	startsWithUtil('h', 'hello', true);
	startsWithUtil('he', 'hello', true);
	startsWithUtil('h', 'good bye', false);
});

describe('constructRegExp', () => {
	it('should return RegExp ', () => {
		expect(constructRegExp('end$', 'gi') instanceof RegExp).toBe(true);
	});

	it('should return proper RegExp ', () => {
		expect(
			R.test(
				constructRegExp('end$', 'gi'),
				'in the end'
			)
		).toBe(true);
	});
});
