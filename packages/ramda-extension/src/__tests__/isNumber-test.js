import { any, equals } from 'ramda';
import { isNumber } from '../';

describe('isNumber', () => {
	it('returns true for numbers', () => {
		expect(any(equals(true), [isNumber(Infinity), isNumber(NaN), isNumber(1), isNumber(1.1)])).toBe(true);
	});

	it('returns false for infinite numbers and non-number types', () => {
		expect(
			any(equals(true), [
				isNumber(''),
				isNumber(() => {}),
				isNumber(false),
				isNumber(null),
				isNumber(undefined),
				isNumber({}),
				isNumber([]),
			])
		).toBe(false);
	});
});
