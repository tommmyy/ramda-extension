import { lteThanLength } from '../';

describe('lteThanLength', () => {
	it('[{}] should be > than zero', () => {
		expect(lteThanLength(0, [{}])).toBeTruthy();
	});
	it('[] should be >= than zero', () => {
		expect(lteThanLength(0, [])).toBeTruthy();
	});
	it('[] should not be > than 1', () => {
		expect(lteThanLength(1, [])).toBeFalsy();
	});
	it('should support curry', () => {
		const lengthBiggerThanEqualsZero = lteThanLength(0);
		expect(lengthBiggerThanEqualsZero([{}])).toBeTruthy();
	});
});
