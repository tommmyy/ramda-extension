import { uniqFilter, equalsLength } from '../';

describe('uniqFilter', () => {
	it('returns unique result of filter', () => {
		expect(
			uniqFilter(equalsLength(5), ['h', 'hello', 'hello', 'world'])
		).toEqual(['hello', 'world']);
	});
});
