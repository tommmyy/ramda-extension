import { alwaysEmptyObject } from '../';

describe('alwaysEmptyObject', () => {
	it('returns {}', () => {
		expect(alwaysEmptyObject()).toEqual({});
	});

	it('always returns a new object', () => {
		expect(alwaysEmptyObject()).not.toBe(alwaysEmptyObject());
	});
});
