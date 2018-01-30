import { alwaysEmptyString } from '../';

describe('alwaysEmptyString', () => {
	it("returns ''", () => {
		expect(alwaysEmptyString()).toBe('');
	});
});
