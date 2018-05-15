import R from 'ramda';
import { setOver } from '../';

describe('setOver', () => {
	it('returns result of over and set according to lens', () => {
		expect(setOver(
			R.lensPath(['a', 'b']),
			(x) => `Hello ${x}`,
			{
				a: { b: 'foo' },
				c: 'bar',
			}
		)).toEqual({ a: { b: 'Hello foo' } });
	});
});
