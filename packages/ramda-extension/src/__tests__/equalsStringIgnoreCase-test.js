import { equalsStringIgnoreCase } from '../';

describe('equalsStringIgnoreCase', () => {
	it('should be defined', () => {
		expect(equalsStringIgnoreCase).toBeDefined();
	});
	describe('when two equal strings are passed', () => {
		it('should return true', () => {
			expect(equalsStringIgnoreCase('a', 'a')).toBe(true);
		});
	});
	it('should support currying', () => {
		const equalsToA = equalsStringIgnoreCase('a');
		expect(equalsToA('a')).toBe(true);
	});
	describe('when two different strings are passed', () => {
		it('should return false', () => {
			expect(equalsStringIgnoreCase('a', 'b')).toBe(false);
		});
		describe('when one is upper case and second lower case of the same string', () => {
			it('should return true', () => {
				expect(equalsStringIgnoreCase('RAMDA', 'ramda')).toBe(true);
			});
		});
	});
});
