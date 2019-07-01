import { uniqDropLastWhile } from '../';

describe('uniqDropLastWhile', () => {
	it('returns unique result of dropLastWhile', () => {
		expect(
			uniqDropLastWhile((x) => x !== 4, [1, 1, 1, 2, 3, 4, 3, 2, 1])
		).toEqual([1, 2, 3, 4]);
	});
});
