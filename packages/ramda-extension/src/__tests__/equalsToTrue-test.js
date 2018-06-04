import { equalsToTrue } from '../';

describe('equalsToTrue', () => {
	it('return true', () => {
		expect(equalsToTrue(true)).toBe(true);
	});
	it('return false', () => {
		expect(equalsToTrue(false)).toBe(false);
	});
});
