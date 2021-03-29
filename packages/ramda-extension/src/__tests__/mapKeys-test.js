import { mapKeys, toUpperFirst } from '../';

describe('mapKeys', () => {
	it('should map keys of the object', () => {
		expect(mapKeys(toUpperFirst, { x: 1, y: 2, z: 3 })).toEqual({
			X: 1,
			Y: 2,
			Z: 3,
		});
	});
});
