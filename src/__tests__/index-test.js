import { noop } from '../index';

describe('noop', () => {
	it('returns null', () => {
		expect(noop()).toBe(null);
	});
});
