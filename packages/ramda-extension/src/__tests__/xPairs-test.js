import { xPairs } from '../';

describe('xPairs', () => {
	it('should creates list of pairs', () => {
		expect(xPairs(1, [1, 2])).toEqual([[1, 1], [1, 2]]);
	});
});
