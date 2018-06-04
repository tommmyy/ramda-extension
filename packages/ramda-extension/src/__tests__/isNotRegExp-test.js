import { isNotRegExp } from '../';

describe('isNotRegExp', () => {
	it('should be true', () => {
		expect(isNotRegExp(1)).toBe(true);
	});

	it('should be false', () => {
		expect(isNotRegExp(/foo/)).toBe(false);
	});
});
