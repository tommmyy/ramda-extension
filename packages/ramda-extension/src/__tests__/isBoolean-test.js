import { all } from 'ramda';
import { isBoolean, equalsToTrue, equalsToFalse } from '../';

describe('isBoolean', () => {
	it('should exist', () => {
		expect(isBoolean).toBeTruthy();
	});

	it('returns true for Boolean type', () => {
		expect(all(equalsToTrue, [
			isBoolean(true),
			isBoolean(false),
		])).toBeTruthy();
	});

	it('returns false for non-Boolean type', () => {
		expect(
			all(equalsToFalse, [
				isBoolean(1),
				isBoolean(0),
				isBoolean(''),
				isBoolean('true'),
				isBoolean('false'),
				isBoolean(() => {}),
				isBoolean(NaN),
				isBoolean(null),
				isBoolean(undefined),
				isBoolean({}),
				isBoolean([]),
			])
		).toBeTruthy();
	});
});
