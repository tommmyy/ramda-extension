import { toUpperFirst } from '../';

describe('toUpperFirst', () => {
	it('capitalize first letter', () => {
		expect(toUpperFirst('hello')).toBe('Hello');
	});
	it('works with empty strings', () => {
		expect(toUpperFirst('')).toBe('');
	});
});
