import { uniqDrop } from '../';

describe('uniqDrop', () => {
	it('returns uniq result of drop', () => {
		expect(uniqDrop(2, ['foo', 'foo', 'foo'])).toEqual(['foo']);
	});
});
