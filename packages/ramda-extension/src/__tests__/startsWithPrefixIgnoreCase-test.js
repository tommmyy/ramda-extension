import { startsWithPrefixIgnoreCase } from '../';

describe('startsWithPrefixIgnoreCase', () => {
	it('should be defined', () => {
		expect(startsWithPrefixIgnoreCase).toBeDefined();
	});
	describe('when two equal strings are passed', () => {
		it('should return true', () => {
			expect(startsWithPrefixIgnoreCase('a', 'a')).toBe(true);
		});
	});
	it('should support currying', () => {
		const startsWithA = startsWithPrefixIgnoreCase('a');
		expect(startsWithA('a')).toBe(true);
	});
	describe('when two different strings are passed', () => {
		it('should return false', () => {
			expect(startsWithPrefixIgnoreCase('a', 'b')).toBe(false);
		});
		describe('when second string starts with the first', () => {
			it('should return true', () => {
				expect(startsWithPrefixIgnoreCase('r', 'ramda')).toBe(true);
			});
			describe('when one is upper case and second lower case', () => {
				it('should return true', () => {
					expect(startsWithPrefixIgnoreCase('R', 'ramda')).toBe(true);
				});
			});
		});
	});
});
