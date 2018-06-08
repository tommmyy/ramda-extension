import { multiply, add } from 'ramda';

import { applyPipe } from '../';

describe('applyPipe', () => {
	it('should apply pipe to list of functions', () => {
		expect(applyPipe([multiply(2), add(1)])(3)).toBe(7);
	});
});
