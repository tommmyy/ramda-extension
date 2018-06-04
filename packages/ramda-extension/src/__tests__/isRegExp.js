import { isRegExp } from '../';

describe('isRegExp', () => {
	it('to be true', () => {
		expect(isRegExp(/foo/)).toBe(true);
	});

	it('to be false', () => {
		expect(isRegExp('foo')).toBe(false);
		expect(isRegExp(null)).toBe(false);
		expect(isRegExp({})).toBe(false);
		expect(isRegExp([])).toBe(false);
	});
});
