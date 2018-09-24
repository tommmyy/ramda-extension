import { isPlainObject } from '../';

describe('isPlainObject', () => {
	it('should exist', () => {
		expect(isPlainObject).toBeTruthy();
	});

	it('handles various types', () => {
		expect(isPlainObject(null)).toBe(false);
		expect(isPlainObject([])).toBe(false);
		expect(isPlainObject(new Date())).toBe(false);
		expect(isPlainObject(new Error())).toBe(false);
		expect(isPlainObject(undefined)).toBe(false);
		expect(isPlainObject('[object Object]')).toBe(false);

		expect(isPlainObject({})).toBe(true);
		expect(isPlainObject(Object.create(null))).toBe(true);
		expect(isPlainObject({ constructor: () => {} })).toBe(true);
	});
});
