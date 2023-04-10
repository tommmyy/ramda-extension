import { mergeRight } from 'ramda';
import { mergeWithDotPath } from '../';

describe('mergeWithDotPath', () => {
	it('should merge the data in resulting object', () => {
		expect(
			mergeWithDotPath('a.b', mergeRight, { d: 30 }, { a: { b: { c: 20 } } })
		).toEqual({
			a: { b: { c: 20, d: 30 } },
		});
	});
});
