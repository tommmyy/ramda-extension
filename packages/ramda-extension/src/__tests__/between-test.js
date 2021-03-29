import { between } from '../';

describe('between', () => {
	it('should return true between numbers', () => {
		expect(between(0.4, 10, 1.5)).toEqual(true);
	});
	it('should return false outside of number', () => {
		expect(between(80.2, 99.0, 9.9)).toEqual(false);
	});
	it('should return true outside of number', () => {
		expect(between(20.2, 99.0, 55.5)).toEqual(true);
	});
});
