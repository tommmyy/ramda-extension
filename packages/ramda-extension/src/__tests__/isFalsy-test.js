import { isFalsy } from '../';

describe('isFalsy', () => {
	it('returns true for falsy values', () => {
		expect(isFalsy(false)).toBe(true);
		expect(isFalsy(0)).toBe(true);
		expect(isFalsy('')).toBe(true);
	});

	it('returns false for truthy values', () => {
		expect(isFalsy(true)).toBe(false);
		expect(isFalsy({})).toBe(false);
		expect(isFalsy([])).toBe(false);
		expect(isFalsy(1)).toBe(false);
		expect(isFalsy('hello')).toBe(false);
	});
});
