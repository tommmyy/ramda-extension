import { xPairsRight } from '../';

describe('xPairsRight', () => {
	it('should creates list of pairs', () => {
		expect(xPairsRight(1, [2, 3])).toEqual([[2, 1], [3, 1]]);
	});
});
