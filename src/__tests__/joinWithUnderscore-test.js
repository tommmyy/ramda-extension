import { joinWithUnderscore } from '../';

describe('joinWithUnderscore', () => {
	it('join array of string with underscore determiner', () => {
		expect(joinWithUnderscore(['a', 'b', 'c'])).toEqual('a_b_c');
	});
});
