import R from 'ramda';
import { constructRegExp } from '../';

describe('constructRegExp', () => {
	it('should return RegExp ', () => {
		expect(constructRegExp('end$', 'gi') instanceof RegExp).toBe(true);
	});

	it('should return proper RegExp ', () => {
		expect(R.test(constructRegExp('end$', 'gi'), 'in the end')).toBe(true);
	});
});
