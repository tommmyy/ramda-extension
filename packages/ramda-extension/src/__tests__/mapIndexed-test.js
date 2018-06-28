import { mapIndexed } from '../';

describe('mapIndexed', () => {
	it('should exist', () => {
		expect(mapIndexed((value, index) => `${value}-${index}`)([1, 2, 3])).toEqual(['1-0', '2-1', '3-2']);
	});
});
