import { equalsToEmptyArray } from '../';

describe('equalsToEmptyArray', () => {
	it('return true', () => {
		expect(equalsToEmptyArray([])).toBe(true);
	});
	it('return false', () => {
		expect(equalsToEmptyArray(['Ramda'])).toBe(false);
	});
});
