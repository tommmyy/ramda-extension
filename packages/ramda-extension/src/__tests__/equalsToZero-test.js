import { equalsToZero } from '../';

describe('equalsToZero', () => {
	it('should be false', () => {
		expect(equalsToZero(1)).toBe(false);
	});

	it('should be true', () => {
		expect(equalsToZero(0)).toBe(true);
	});
});
