import { reduceCallable } from '../';

describe('reduceCallable', () => {
	it('should return result after appling arguments ', () => {
		expect(reduceCallable((a) => (b) => a + b, [1, 2])).toBe(3);
	});
});
