import { ltThanLength } from '../';

describe('ltThanLength', () => {
	it('[{}] should be > zero', () => {
		expect(ltThanLength(0, [{}])).toBeTruthy();
	});
	it('[] should not be > zero', () => {
		expect(ltThanLength(0, [])).toBeFalsy();
	});
	it('should support curry', () => {
		const lengthBiggerThanZero = ltThanLength(0);
		expect(lengthBiggerThanZero([{}])).toBeTruthy();
	});
});
