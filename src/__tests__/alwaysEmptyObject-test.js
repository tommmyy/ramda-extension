import { alwaysEmptyObject } from '../';

describe('alwaysEmptyObject', () => {
	it('returns {}', () => {
		expect(alwaysEmptyObject()).toEqual({});
	});
});
