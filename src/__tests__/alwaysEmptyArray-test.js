import { alwaysEmptyArray } from '../';

describe('alwaysEmptyArray', () => {
	it('returns []', () => {
		expect(alwaysEmptyArray()).toEqual([]);
	});
});
