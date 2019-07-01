import { uniqLength } from '../';

describe('uniqLength', () => {
	it('returns length of unique values', () => {
		expect(uniqLength).toBeTruthy();
		expect(uniqLength(['hello', 'world', 'world'])).toEqual(2);
	});
});
