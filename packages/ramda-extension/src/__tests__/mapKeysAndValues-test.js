import mapKeysAndValues from '../mapKeysAndValues';

describe('mapKeysAndValues', () => {
	it('maps keys and values', () => {
		expect(mapKeysAndValues(([a, b]) => [b, a], { foo: 'bar', baz: 'boo' })).toEqual({ bar: 'foo', boo: 'baz' });
	});
});
