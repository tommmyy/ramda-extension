import { notFlipInclude } from '../';

describe('notFlipInclude', () => {
	it('returns false if array contains item', () => {
		expect(notFlipInclude(['a'], 'a')).toEqual(false);
	});
	it('returns true if array does not contain item', () => {
		expect(notFlipInclude(['a'], 'b')).toEqual(true);
	});
});
