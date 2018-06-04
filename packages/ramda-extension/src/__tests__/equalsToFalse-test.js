import { equalsToFalse } from '../';

describe('equalsToFalse', () => {
	it('return true', () => {
		expect(equalsToFalse(false)).toBe(true);
	});
	it('return false', () => {
		expect(equalsToFalse(true)).toBe(false);
	});
});
