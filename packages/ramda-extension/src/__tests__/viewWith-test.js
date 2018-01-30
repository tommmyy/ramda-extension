import R from 'ramda';
import { viewWith } from '../';

describe('viewWith', () => {
	it('it should use pathEq with lens view', () => {
		expect(viewWith(R.lensIndex(0), R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }])).toEqual(true);
	});
	it('it should use division with lens view', () => {
		expect(viewWith(R.lensIndex(0), R.divide(R.__, 2), [4])).toEqual(2);
	});
});
