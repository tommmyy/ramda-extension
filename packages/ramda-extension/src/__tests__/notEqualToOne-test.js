import { notEqualToOne } from '../';

describe('notEqualToOne', () => {
	it('returns true', () => {
		expect(notEqualToOne(0)).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToOne(1)).toEqual(false);
	});
});
