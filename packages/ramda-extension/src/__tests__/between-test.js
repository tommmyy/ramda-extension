import { between } from '../';

describe('between', () => {
	it('should return true between numbers', () => {
		expect(between(1.5, .4, 10)).toEqual(true);
	});
	it('should return false outside of number', () => {
		expect(between(9.9, 80.2, 99.0)).toEqual(false);
	});
	it('should return true outside of number', () => {
		expect(between(55.5)(20.2, 99.0)).toEqual(true);
	});
});
