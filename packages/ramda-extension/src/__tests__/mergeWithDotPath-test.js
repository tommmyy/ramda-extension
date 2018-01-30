import R from 'ramda';
import { mergeWithDotPath } from '../';

describe('mergeWithDotPath', () => {
	it('should merge the data in resulting object', () => {
		expect(mergeWithDotPath('a.b', R.merge, { d: 30 }, { a: { b: { c: 20 } } })).toEqual({
			a: { b: { c: 20, d: 30 } },
		});
	});
});
