import { joinWithDot } from '../';

describe('joinWithDot', () => {
	it('join array of string with dot determiner', () => {
		expect(joinWithDot(['a', 'b', 'c'])).toEqual('a.b.c');
	});
});
