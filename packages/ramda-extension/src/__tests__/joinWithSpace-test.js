import { joinWithSpace } from '../';

describe('joinWithSpace', () => {
	it('join array of string with space determiner', () => {
		expect(joinWithSpace(['a', 'b', 'c'])).toEqual('a b c');
	});
});
