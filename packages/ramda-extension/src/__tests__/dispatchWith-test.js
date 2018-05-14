import R from 'ramda';
import { dispatchWith } from '../';

const notFalse = R.complement(R.equals)(false);

describe('dispatchWith', () => {
	it('should return first not false result', () => {
		expect(dispatchWith(
			notFalse,
			[R.F, R.identity, R.F]
		)(3)).toBe(3);
	});

	it('should be variadic', () => {
		expect(dispatchWith(notFalse, [(a, b) => a + b, R.F])(3, 2)).toBe(5);
	});

	it('should be curried', () => {
		expect(dispatchWith(notFalse)([(a, b) => a + b, R.F])(3, 2)).toBe(5);
	});

	it('should return undefined', () => {
		expect(dispatchWith(
			notFalse,
			[R.F, R.identity, R.F]
		)(false)).toBe(undefined);
	});
});
