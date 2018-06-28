import { isTruthy } from '../';

describe('isTruthy', () => {
	it('returns true for truthy values', () => {
		expect(isTruthy(true)).toBe(true);
		expect(isTruthy({})).toBe(true);
		expect(isTruthy([])).toBe(true);
		expect(isTruthy(1)).toBe(true);
		expect(isTruthy('hello')).toBe(true);
	});

	it('returns false for falsy values', () => {
		expect(isTruthy(false)).toBe(false);
		expect(isTruthy(0)).toBe(false);
		expect(isTruthy('')).toBe(false);
	});
});
