import { applyIfNotNil } from '../';

describe('applyIfNotNil', () => {
	it('should call fn when exist', () => {
		const fn = jest.fn();
		applyIfNotNil(fn, []);
		expect(fn).toHaveBeenCalled();
	});
	it('should not call fn when undefined', () => {
		const fn = undefined;
		expect(applyIfNotNil(fn, [])).toBe(null);
	});
	it('should call fn with arguments', () => {
		const fn = jest.fn();
		applyIfNotNil(fn, [1, 2, 3]);
		expect(fn).toHaveBeenCalledWith(1, 2, 3);
	});
	it('should return result from fn', () => {
		const fn = jest.fn((arg) => {
			return arg;
		});
		expect(applyIfNotNil(fn, [1])).toBe(1);
	});
	it('should support currying', () => {
		const fn = jest.fn();
		const curry = applyIfNotNil(fn);
		curry([6, 2]);
		expect(fn).toHaveBeenCalledWith(6, 2);
	});
});
