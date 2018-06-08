import { concat } from 'ramda';

import { mergeDeepAllWith } from '../';

describe('mergeDeepAllWith', () => {
	it('deeply merges array of objects', () => {
		expect(mergeDeepAllWith(concat, [
 			{ a: { b: [1] } },
 			{ a: { b: [2] } },
 			{ a: { b: [3] } },
 		])).toEqual({ a: { b: [1, 2, 3] } });
	});
});
