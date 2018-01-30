import { joinWithDash } from '../';

describe('joinWithDash', () => {
	it('join array of string with dash determiner', () => {
		expect(joinWithDash(['a', 'b', 'c'])).toEqual('a-b-c');
	});
});
