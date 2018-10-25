import { applyIfFunction } from '../';

describe('applyIfFunction', () => {
	it('returns a value if value is not a function', () => {
		expect(applyIfFunction('x', [])).toBe('x');
	});

	it('is curried', () => {
		expect(applyIfFunction('x')([])).toBe('x');
	});

	it('returns an application of a function to arguments if value is a function', () => {
		expect(applyIfFunction((x, y) => x + y, [1, 2])).toBe(3);
	});
});
