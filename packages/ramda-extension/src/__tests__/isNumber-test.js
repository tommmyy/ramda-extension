import { all, equals } from 'ramda';
import { isNumber } from '../';

describe('isNumber', () => {
	it('returns true for numbers', () => {
		expect(
			all(equals(true), [
				isNumber(Infinity),
				isNumber(NaN),
				isNumber(1),
				isNumber(1.1),
			])
		).toBeTruthy();
	});

	it('returns false for infinite numbers and non-number types', () => {
		expect(
			all(equals(false), [
				isNumber(''),
				isNumber(() => {}),
				isNumber(false),
				isNumber(null),
				isNumber(undefined),
				isNumber({}),
				isNumber([]),
			])
		).toBeTruthy();
	});
});
