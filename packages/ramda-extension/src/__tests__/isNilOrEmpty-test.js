import { isNilOrEmpty } from '../';

describe('isNilOrEmpty', () => {
	it('should return true', () => {
		expect(isNilOrEmpty(null)).toBe(true);
		expect(isNilOrEmpty({})).toBe(true);
	});
	it('should return false', () => {
		expect(isNilOrEmpty(false)).toBe(false);
		expect(isNilOrEmpty(0)).toBe(false);
	});
});
