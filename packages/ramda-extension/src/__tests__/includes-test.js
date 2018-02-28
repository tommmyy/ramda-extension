import { includes } from '../';

describe('includes', () => {
	it('returns true if array contains item', () => {
		expect(includes(['a'], 'a')).toEqual(true);
	});
	it('returns false if array does not contain item', () => {
		expect(includes(['a'], 'b')).toEqual(false);
	});
});
