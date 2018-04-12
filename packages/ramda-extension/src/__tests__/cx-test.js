/**
 * @jest-environment node
 */
import { cx } from '../';
import Benchmark from 'benchmark';
import classNames from 'classnames';

describe('cx', () => {
	it('should exists', () => {
		expect(cx).toBeDefined();
	});
	it('should handle strings', () => {
		expect(cx('one', 'two')).toBe('one two');
	});
	it('should trim strings', () => {
		expect(cx('  one  ', '  two   ')).toBe('one two');
	});
	it('should handle arrays', () => {
		expect(cx(['one', 'two'])).toBe('one two');
	});
	it('should handle nested arrays', () => {
		expect(cx(['one', ['two', 'three']])).toBe('one two three');
	});
	it('should handle objects', () => {
		expect(cx({ one: true, two: false })).toBe('one');
	});
	it('should always overwrite other types', () => {
		expect(cx('one', { one: false, two: false, three: true }, 'two')).toBe('three');
	});
	it('should handle a mix of strings, arrays, and objects', () => {
		expect(cx(['one', ['two'], { three: true, four: 0 }], 'five six', { two: false })).toBe('one five six three');
	});
	xit('should be fast as classnames +- 100 ops/sec', () => {
		return new Promise((resolve, reject) => {
			const suite = new Benchmark.Suite();
			const args = ['foo', { bar: true, duck: false }, 'baz', { quux: true }, ['b', { c: true, d: false }]];
			suite
				.add('classNames', function() {
					classNames(...args);
				})
				.add('cx', function() {
					cx(...args);
				})
				// .on('cycle', function(event) {
				// console.log(String(event.target));
				// })
				.on('complete', function() {
					// console.log(`Fastest is ${this.filter('fastest').map('name')}`);
					const classNamesOps = this['0'].hz;
					const cxOps = this['1'].hz;
					if (cxOps >= classNames - 100) {
						resolve();
					}
					reject(`cx is about ${Math.round(classNamesOps / cxOps)} times slower`);
				})
				.run();
		});
	});
});
