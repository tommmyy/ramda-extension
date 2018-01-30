import { containsAny } from '../';

describe('containsAny', () => {
	it('resolves to true if at least one element from first list is found within the second list', () => {
		expect(containsAny(['a', 'e'], ['a', 'b', 'c'])).toBe(true);
	});
	it('resolves to false if non element from first list is not found within the second list', () => {
		expect(containsAny(['e', 'f'], ['a', 'b', 'c'])).toBe(false);
	});
});
