import { endsWithSuffixIgnoreCase } from '../';

describe('endsWithSuffixIgnoreCase', () => {
	it('should be defined', () => {
	    expect(endsWithSuffixIgnoreCase).toBeDefined();
	});
	describe('when two equal strings are passed', () => {
		it('should return true', () => {
			expect(endsWithSuffixIgnoreCase('a', 'a')).toBe(true);
		});
	});
	it('should support currying', () => {
		const endsWithA = endsWithSuffixIgnoreCase('a');
		expect(endsWithA('a')).toBe(true);
	});
	describe('when two different strings are passed', () => {
		it('should return false', () => {
			expect(endsWithSuffixIgnoreCase('a', 'b')).toBe(false);
		});
		describe('when second string ends with the first', () => {
			it('should return true', () => {
				expect(endsWithSuffixIgnoreCase('a', 'ramda')).toBe(true);
			});
			describe('when one is upper case and second lower case', () => {
				it('should return true', () => {
					expect(endsWithSuffixIgnoreCase('A', 'ramda')).toBe(true);
				});
			});
		});
	});
});
