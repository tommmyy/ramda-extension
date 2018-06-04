import { notEqualToNull } from '../';

describe('notEqualToNull', () => {
	it('returns true', () => {
		expect(notEqualToNull(0)).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToNull(null)).toEqual(false);
	});
});
