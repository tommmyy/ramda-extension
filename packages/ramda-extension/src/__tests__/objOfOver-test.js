import R from 'ramda';
import { objOfOver } from '../';

describe('objOfOver', () => {
	it('returns result of over and set according to lens', () => {
		expect(
			objOfOver(R.lensPath(['a', 'b']), (x) => `Hello ${x}`, {
				a: { b: 'foo' },
				c: 'bar',
			})
		).toEqual({ a: { b: 'Hello foo' } });
	});
});
