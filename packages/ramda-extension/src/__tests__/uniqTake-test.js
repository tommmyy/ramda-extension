import { uniqTake } from '../';

describe('uniqTake', () => {
	it('returns unique result of take', () => {
		expect(uniqTake(2, ['foo', 'foo', 'baz'])).toEqual(['foo']);
		expect(uniqTake(3, ['foo', 'foo', 'baz'])).toEqual(['foo', 'baz']);
	});
});
