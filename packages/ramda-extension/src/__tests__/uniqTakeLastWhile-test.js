import { uniqTakeLastWhile } from '../';

describe('uniqTakeLastWhile', () => {
	it('returns uniq result of takeLastWhile', () => {
		expect(
			uniqTakeLastWhile((x) => x !== 4, [1, 2, 3, 4, 3, 2, 1, 1])
		).toEqual([3, 2, 1]);
	});
});
