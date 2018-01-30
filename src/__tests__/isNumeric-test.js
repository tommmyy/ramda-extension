import R from 'ramda';
import { isNumeric } from '../';

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
