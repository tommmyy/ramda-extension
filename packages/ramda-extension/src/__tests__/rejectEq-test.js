import { rejectEq } from '../';

describe('rejectEq', () => {
	it('should exist', () => {
		expect(rejectEq).toBeDefined();
	});
	it('should filter values that equals to first argument', () => {
		expect(rejectEq('foo', ['foo', 'bar', 'foo', 'bar'])).toEqual([
			'bar',
			'bar',
		]);
	});
	it('should support currying', () => {
		const rejectFoo = rejectEq('foo');
		expect(rejectFoo(['foo', 'bar', 'foo', 'bar'])).toEqual(['bar', 'bar']);
	});
});
