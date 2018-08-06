import { isError } from '../';

describe('isError', () => {
	it('returns true for different types of errors', () => {
		expect(isError(new Error())).toBe(true);
		expect(isError(new TypeError())).toBe(true);
		expect(isError(new RangeError())).toBe(true);
	});

	it('returns false for other values', () => {
		expect(isError(true)).toBe(false);
		expect(isError(false)).toBe(false);
		expect(isError([])).toBe(false);
		expect(isError(1)).toBe(false);
		expect(isError('hello')).toBe(false);
		expect(isError(null)).toBe(false);
		expect(isError({ error: true, message: true, stack: true })).toBe(false);
	});
});
