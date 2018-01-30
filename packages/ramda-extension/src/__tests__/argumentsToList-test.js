import { argumentsToList } from '../';

describe('argumentsToList', () => {
	it('converts variadic arguments into list', () => {
		expect(argumentsToList(1, 3, 4, 3)).toEqual([1, 3, 4, 3]);
	});
});
