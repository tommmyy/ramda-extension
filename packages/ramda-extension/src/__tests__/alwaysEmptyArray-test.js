import { alwaysEmptyArray } from '../';

describe('alwaysEmptyArray', () => {
	it('returns []', () => {
		expect(alwaysEmptyArray()).toEqual([]);
	});

	it('always returns a new array', () => {
		expect(alwaysEmptyArray()).not.toBe(alwaysEmptyArray());
	});
});
