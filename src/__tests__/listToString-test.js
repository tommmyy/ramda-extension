import { listToString } from '../';

describe('listToString', () => {
	it('converts list to string', () => {
		expect(listToString(['h', 'e', 'l', 'l', 'o'])).toBe('hello');
	});
});
