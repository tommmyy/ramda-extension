import { decapitalizeAll } from '../';

describe('decapitalizeAll', () => {
	it('should exist', () => {
		expect(decapitalizeAll).toBeTruthy();
	});
	it('should return null for null', () => {
		expect(decapitalizeAll(null)).toBe(null);
	});
	it('should return undefined for undefined', () => {
		expect(decapitalizeAll(undefined)).toBe(undefined);
	});
	describe('when string consists of just from one word', () => {
		describe('should return string with first lower-case letter', () => {
			it('when passed string with first letter being upper-case', () => {
				expect(decapitalizeAll('Metallica')).toBe('metallica');
			});
			it('when passed string with first letter being lower-case', () => {
				expect(decapitalizeAll('metallica')).toBe('metallica');
			});
		});
	});
	describe('when string consits of multiple words', () => {
		it('should return string with every word starting with lower-case letter', () => {
			expect(decapitalizeAll('Seek And Destroy')).toBe('seek and destroy');
		});
	});
});
