import { equalsLength } from '../';

describe('equalsLength', () => {
	it('[{}] should equals one', () => {
		expect(equalsLength(1, [{}])).toBeTruthy();
	});
	it('[] should equal zero', () => {
		expect(equalsLength(0, [])).toBeTruthy();
	});
	it('[] should not equal one', () => {
		expect(equalsLength(1, [])).toBeFalsy();
	});
	it('should support curry', () => {
		const lengthEqualsOne = equalsLength(1);
		expect(lengthEqualsOne([{}])).toBeTruthy();
	});
});
