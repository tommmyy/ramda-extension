import { concat } from 'ramda';

import { mergeDeepAllWithKey } from '../';

describe('mergeDeepAllWithKey', () => {
	it('deeply merges array of objects', () => {
		expect(mergeDeepAllWithKey((key, l, r) => key === 'b' ? concat(l, r) : r, [
			{ a: { b: [1], c: [1] } },
			{ a: { b: [2], c: [2] } },
			{ a: { b: [3], c: [3] } },
		])).toEqual({ a: { b: [1, 2, 3], c: [3] } });
	});
});
