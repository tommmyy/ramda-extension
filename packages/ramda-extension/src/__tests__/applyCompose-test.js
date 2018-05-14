import { multiply, add } from 'ramda';

import { applyCompose } from '../';

describe('applyCompose', () => {
	it('should apply pipe to list of functions', () => {
		expect(applyCompose([multiply(2), add(1)])(3)).toBe(8);
	});
});
