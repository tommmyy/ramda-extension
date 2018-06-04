import { notEqualToEmptyString } from '../';

describe('notEqualToEmptyString', () => {
	it('returns true', () => {
		expect(notEqualToEmptyString('Ramda')).toEqual(true);
	});
	it('returns false', () => {
		expect(notEqualToEmptyString('')).toEqual(false);
	});
});
