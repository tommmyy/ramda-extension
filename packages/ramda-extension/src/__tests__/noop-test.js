import { noop } from '../';

describe('noop', () => {
	it('returns null', () => {
		expect(noop()).toBe(null);
	});
});
