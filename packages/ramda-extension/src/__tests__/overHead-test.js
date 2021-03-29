import R from 'ramda';
import { overHead } from '../';

describe('overHead', () => {
	it('should remap first index of array', () => {
		expect(overHead(R.toUpper, ['foo', 'bar', 'baz'])).toEqual([
			'FOO',
			'bar',
			'baz',
		]);
	});
});
