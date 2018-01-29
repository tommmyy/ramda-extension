import { containsAll } from '../';

describe('containsAll', () => {
	it('resolves to true if all elements in first list are found within the second list', () => {
		expect(containsAll(['a', 'b'], ['a', 'b', 'c'])).toBe(true);
	});
	it('resolves to false if any element in first list is not found within the second list', () => {
		expect(containsAll(['a', 'b', 'd'], ['a', 'b', 'c'])).toBe(false);
	});
});
