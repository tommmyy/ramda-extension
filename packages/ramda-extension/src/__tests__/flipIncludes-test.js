import { flipIncludes } from '../';

describe('flipIncludes', () => {
	it('returns true if array contains item', () => {
		expect(flipIncludes(['a'], 'a')).toEqual(true);
	});
	it('returns false if array does not contain item', () => {
		expect(flipIncludes(['a'], 'b')).toEqual(false);
	});
});
