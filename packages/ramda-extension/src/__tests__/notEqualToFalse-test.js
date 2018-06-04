import { notEqualToFalse } from '../';

describe('notEqualToFalse', () => {
	it('returns true', () => {
		expect(notEqualToFalse(true)).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToFalse(false)).toEqual(false);
	});
});
