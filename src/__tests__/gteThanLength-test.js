import { gteThanLength } from '../';

describe('gteThanLength', () => {
	it('[{}, {}] should be =< 2', () => {
		expect(gteThanLength(2, [{}, {}])).toBeTruthy();
	});
	it('[{}, {}, {}] should not be < 2', () => {
		expect(gteThanLength(2, [{}, {}, {}])).toBeFalsy();
	});
	it('[] should be > 5', () => {
		expect(gteThanLength(5, [])).toBeTruthy();
	});
	it('should support curry', () => {
		const lengthSmallerThanEqualsFive = gteThanLength(5);
		expect(lengthSmallerThanEqualsFive([{}])).toBeTruthy();
	});
});
