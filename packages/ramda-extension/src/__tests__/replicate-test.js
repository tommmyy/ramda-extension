import { replicate } from '../';

describe('replicate', () => {
	it('it should replicate a value n times', () => {
		expect(replicate(3, 6)).toEqual([6, 6, 6]);
	});
	it('it should be curried', () => {
		expect(replicate(3)(6)).toEqual([6, 6, 6]);
	});
});
