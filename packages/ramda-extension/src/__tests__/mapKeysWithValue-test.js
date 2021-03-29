import mapKeysWithValue from '../mapKeysWithValue';
import { formatJSVal } from '../testUtils';

describe('mapKeysWithValue', () => {
	const itHelper = (input, obj, expected) =>
		it(`For ${formatJSVal(obj)} should be ${formatJSVal(expected)}`, () => {
			expect(mapKeysWithValue(input, obj)).toEqual(expected);
		});

	itHelper(
		(key, value) => value,
		{ foo: 'bar', baz: 'boo' },
		{ bar: 'bar', boo: 'boo' }
	);
});
