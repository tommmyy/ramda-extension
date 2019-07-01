import { uniqTakeLast } from '../';

describe('uniqTakeLast', () => {
	it('returns unique result of takeLast', () => {
		expect(uniqTakeLast(2, ['foo', 'baz', 'baz'])).toEqual(['baz']);
		expect(uniqTakeLast(3, ['foo', 'baz', 'baz'])).toEqual(['foo', 'baz']);
	});
});
