import { pathNotEq } from '../';

describe('pathNotEq', () => {
	it('should return true when object literal does not contain the path at all', () => {
		expect(pathNotEq(['a', 'b'], 1, {})).toBeTruthy();
	});

	it('should return true when object literal does not contain the path', () => {
		expect(pathNotEq(['a', 'b'], 1, { a: {} })).toBeTruthy();
	});

	describe('when object literal contains the path', () => {
		it('should return true when the value of path differs', () => {
			expect(pathNotEq(['a', 'b'], 1, { a: { b: 2 } })).toBeTruthy();
		});
		it('should return false when the value of path equals', () => {
			expect(pathNotEq(['a', 'b'], 1, { a: { b: 1 } }));
		});
	});
});
