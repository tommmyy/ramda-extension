import { uniqDropWhile } from '../';

describe('uniqDropWhile', () => {
	it('returns unique result of dropWhile', () => {
		expect(uniqDropWhile((x) => x !== 4, [1, 2, 2, 1, 3, 4, 3, 2, 1])).toEqual([
			4,
			3,
			2,
			1,
		]);
	});
});
