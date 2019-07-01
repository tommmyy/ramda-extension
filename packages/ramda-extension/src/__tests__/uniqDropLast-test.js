import { uniqDropLast } from '../';

describe('uniqDropLast', () => {
	it('returns uniq result of dropLast', () => {
		expect(uniqDropLast(2, ['foo', 'foo', 'foo'])).toEqual(['foo']);
	});
});
