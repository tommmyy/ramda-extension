import memoizeWithIdentity from '../memoizeWithIdentity';

describe('memoizeWithIdentity', () => {
	it('should be defined', () => {
		expect(memoizeWithIdentity).toBeDefined();
	});
	it('should call target function', () => {
		const targetFunction = jest.fn();
		const memoizedFunction = memoizeWithIdentity(targetFunction);
		memoizedFunction();
		expect(targetFunction.mock.calls.length).toBe(1);
	});
	describe('when memoized function is called twice with same argument', () => {
		it('should call target function once', () => {
			const targetFunction = jest.fn();
			const memoizedFunction = memoizeWithIdentity(targetFunction);
			memoizedFunction(1);
			memoizedFunction(1);
			expect(targetFunction.mock.calls.length).toBe(1);
		});
		it('should return the same result for both calls', () => {
			const memoizedFunction = memoizeWithIdentity(jest.fn());
			const firstResult = memoizedFunction(1);
			const secondResult = memoizedFunction(1);
			expect(firstResult === secondResult).toBeTruthy();
		});
	});
	it('should call target function twice when called twice with different argument', () => {
		const targetFunction = jest.fn();
		const memoizedFunction = memoizeWithIdentity(targetFunction);
		memoizedFunction(1);
		memoizedFunction(2);
		expect(targetFunction.mock.calls.length).toBe(2);
	});
});
