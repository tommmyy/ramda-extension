import { equalsToNull } from '../';

describe('equalsToNull', () => {
	it('return true', () => {
		expect(equalsToNull(undefined)).toBe(false);
	});
	it('return false', () => {
		expect(equalsToNull(null)).toBe(true);
	});
});
