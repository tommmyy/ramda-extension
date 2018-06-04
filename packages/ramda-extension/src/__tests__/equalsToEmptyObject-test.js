import { equalsToEmptyObject } from '../';

describe('equalsToEmptyObject', () => {
	it('return true', () => {
		expect(equalsToEmptyObject({})).toBe(true);
	});
	it('return false', () => {
		expect(equalsToEmptyObject({ramda: true})).toBe(false);
	});
});
