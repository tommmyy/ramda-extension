import { notEqualToEmptyArray } from '../';

describe('notEqualToEmptyArray', () => {
	it('returns true', () => {
		expect(notEqualToEmptyArray([1])).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToEmptyArray([])).toEqual(false);
	});
});
