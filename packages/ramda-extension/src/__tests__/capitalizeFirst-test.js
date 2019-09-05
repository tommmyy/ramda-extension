import { capitalizeFirst } from '../';

describe('capitalizeFirst', () => {
	it('should exist', () => {
		expect(capitalizeFirst).toBeTruthy();
	});
	it('should return null for null', () => {
		expect(capitalizeFirst(null)).toBe(null);
	});
	it('should return undefined for undefined', () => {
		expect(capitalizeFirst(undefined)).toBe(undefined);
	});
	describe('should return string with first capital letter', () => {
		it('when passed string with first letter being upper-case', () => {
			expect(capitalizeFirst('Metallica')).toBe('Metallica');
		});
		it('when passed string with first letter being lower-case', () => {
			expect(capitalizeFirst('metallica')).toBe('Metallica');
		});
	});
});
