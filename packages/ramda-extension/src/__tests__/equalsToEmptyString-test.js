import { equalsToEmptyString } from '../';

describe('equalsToEmptyString', () => {
	it('return true', () => {
		expect(equalsToEmptyString('')).toBe(true);
	});
	it('return false', () => {
		expect(equalsToEmptyString('Ramda')).toBe(false);
	});
});
