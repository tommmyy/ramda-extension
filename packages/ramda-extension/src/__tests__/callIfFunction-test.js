import { callIfFunction } from '../';

describe('callIfFunction', () => {
	it('returns a value if value is not a function', () => {
		expect(callIfFunction('x', [])).toBe('x');
	});

	it('returns an call of a function to arguments if value is a function', () => {
		expect(callIfFunction((x, y) => x + y, 1, 2)).toBe(3);
	});
});
