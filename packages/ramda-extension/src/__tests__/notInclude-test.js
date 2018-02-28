import { notInclude } from '../';

describe('notInclude', () => {
	it('returns false if array contains item', () => {
		expect(notInclude(['a'], 'a')).toEqual(false);
	});
	it('returns true if array does not contain item', () => {
		expect(notInclude(['a'], 'b')).toEqual(true);
	});
});
