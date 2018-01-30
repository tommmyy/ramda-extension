import R from 'ramda';
import { viewEq } from '../';

describe('viewEq', () => {
	it('lens prop foo should be same as bar', () => {
		expect(viewEq(R.lensProp('foo'), 'bar', { foo: 'bar' })).toEqual(true);
	});
});
