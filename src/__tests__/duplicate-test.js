import { duplicate } from '../';

describe('duplicate', () => {
	it('it should duplicate a value', () => {
		expect(duplicate(1)).toEqual([1, 1]);
	});
});
