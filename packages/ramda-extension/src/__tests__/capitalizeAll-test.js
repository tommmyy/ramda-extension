import { capitalizeAll } from '../';

describe('capitalizeAll', () => {
	it('should exist', () => {
		expect(capitalizeAll).toBeTruthy();
	});
	it('should return null for null', () => {
		expect(capitalizeAll(null)).toBe(null);
	});
	it('should return undefined for undefined', () => {
		expect(capitalizeAll(undefined)).toBe(undefined);
	});
	describe('when string consists of just from one word', () => {
		describe('should return string with first capital letter', () => {
			it('when passed string with first letter being upper-case', () => {
				expect(capitalizeAll('Metallica')).toBe('Metallica');
			});
			it('when passed string with first letter being lower-case', () => {
				expect(capitalizeAll('metallica')).toBe('Metallica');
			});
		});
	});
	describe('when string consits of multiple words', () => {
		it('should return string with every word starting with capital letter', () => {
			expect(capitalizeAll('seek and destroy')).toBe('Seek And Destroy');
		});
	});
});
