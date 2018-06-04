import { notEqualToEmptyObject } from '../';

describe('notEqualToEmptyObject', () => {
	it('returns true', () => {
		expect(notEqualToEmptyObject([1])).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToEmptyObject({})).toEqual(false);
	});
});
