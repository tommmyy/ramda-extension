import { all, equals } from 'ramda';
import { isNumeric } from '../';

describe('isNumeric', () => {
	it('returns true for finite numbers', () => {
		expect(all(equals(true), [
			isNumeric(-1),
			isNumeric(0),
			isNumeric(1),
			isNumeric(1.1),
		])).toBeTruthy();
	});

	it('returns false for infinite numbers and non-number types', () => {
		expect(all(equals(false), [
			isNumeric(Infinity),
			isNumeric(NaN),
			isNumeric(''),
			isNumeric(() => {}),
			isNumeric(false),
			isNumeric(null),
			isNumeric(undefined),
			isNumeric({}),
			isNumeric([]),
		])).toBeTruthy();
	});
});
