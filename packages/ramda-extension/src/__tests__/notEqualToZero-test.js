import { notEqualToZero } from '../';

describe('notEqualToZero', () => {
	it('returns true', () => {
		expect(notEqualToZero(1)).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToZero(0)).toEqual(false);
	});
});
