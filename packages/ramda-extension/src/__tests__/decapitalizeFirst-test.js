import { decapitalizeFirst } from '../';

describe('decapitalizeFirst', () => {
	it('should exist', () => {
		expect(decapitalizeFirst).toBeTruthy();
	});
	it('should return null for null', () => {
		expect(decapitalizeFirst(null)).toBe(null);
	});
	it('should return undefined for undefined', () => {
		expect(decapitalizeFirst(undefined)).toBe(undefined);
	});
	describe('should return string with first lower-case letter', () => {
		it('when passed string with first letter being upper-case', () => {
			expect(decapitalizeFirst('Metallica')).toBe('metallica');
		});
		it('when passed string with first letter being lower-case', () => {
			expect(decapitalizeFirst('metallica')).toBe('metallica');
		});
	});
});
