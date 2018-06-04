import { notEqualToTrue } from '../';

describe('notEqualToTrue', () => {
	it('returns true', () => {
		expect(notEqualToTrue(false)).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToTrue(true)).toEqual(false);
	});
});
