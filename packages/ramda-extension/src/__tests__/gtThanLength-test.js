import { gtThanLength } from '../';

describe('gtThanLength', () => {
	it('[{}, {}] should not be < 2', () => {
		expect(gtThanLength(2, [{}, {}])).toBeFalsy();
	});
	it('[] should be > 5', () => {
		expect(gtThanLength(5, [])).toBeTruthy();
	});
	it('should support curry', () => {
		const lengthSmallerThanFive = gtThanLength(5);
		expect(lengthSmallerThanFive([{}])).toBeTruthy();
	});
});
