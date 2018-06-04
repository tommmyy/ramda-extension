import { equalsToOne } from '../';

describe('equalsToOne', () => {
	it('should be false', () => {
		expect(equalsToOne(0)).toBe(false);
	});

	it('should be true', () => {
		expect(equalsToOne(1)).toBe(true);
	});
});
