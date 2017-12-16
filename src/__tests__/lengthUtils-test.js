import {
	equalsLength,
	gtThanLength,
	gteThanLength,
	ltThanLength,
	lteThanLength,
} from '../';

describe('Length utils', () => {
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
});
