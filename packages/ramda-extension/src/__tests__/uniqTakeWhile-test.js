import { uniqTakeWhile } from '../';

describe('uniqTakeWhile', () => {
	it('returns uniq result of takeWhile', () => {
		expect(
			uniqTakeWhile((x) => x !== 4, [1, 2, 2, 1, 3, 4, 3, 2, 1])
		).toEqual([1, 2, 3]);
	});
});
