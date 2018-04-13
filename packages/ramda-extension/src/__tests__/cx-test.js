/**
 * @jest-environment node
 */
import { cx } from '../';
import Benchmark from 'benchmark';
import classNames from 'classnames';

describe('classNames', function() {
	it('keeps object keys with truthy values', function() {
		expect(
			cx({
				a: true,
				b: false,
				c: 0,
				d: null,
				e: undefined,
				f: 1,
			})
		).toEqual('a f');
	});

	it('joins arrays of class names and ignore falsy values', function() {
		expect(cx('a', 0, null, undefined, true, 1, 'b')).toEqual('a 1 b');
	});

	it('supports heterogenous arguments', function() {
		expect(cx({ a: true }, 'b', 0)).toEqual('a b');
	});

	it('should be trimmed', function() {
		expect(cx('', 'b', {}, '')).toEqual('b');
	});

	it('returns an empty string for an empty configuration', function() {
		expect(cx({})).toEqual('');
	});

	it('supports an array of class names', function() {
		expect(cx(['a', 'b'])).toEqual('a b');
	});

	it('joins array arguments with string arguments', function() {
		expect(cx(['a', 'b'], 'c')).toEqual('a b c');
		expect(cx('c', ['a', 'b'])).toEqual('c a b');
	});

	it('handles multiple array arguments', function() {
		expect(cx(['a', 'b'], ['c', 'd'])).toEqual('a b c d');
	});

	it('handles arrays that include falsy and true values', function() {
		expect(cx(['a', 0, null, undefined, false, true, 'b'])).toEqual('a b');
	});

	it('handles arrays that include arrays', function() {
		expect(cx(['a', ['b', 'c']])).toEqual('a b c');
	});

	it('handles arrays that include objects', function() {
		expect(cx(['a', { b: true, c: false }])).toEqual('a b');
	});

	it('handles deep array recursion', function() {
		expect(cx(['a', ['b', ['c', { d: true }]]])).toEqual('a b c d');
	});

	it('handles arrays that are empty', function() {
		expect(cx('a', [])).toEqual('a');
	});

	it('handles nested arrays that have empty nested arrays', function() {
		expect(cx('a', [[]])).toEqual('a');
	});

	it('handles all types of truthy and falsy property values as expected', function() {
		expect(
			cx({
				// falsy:
				null: null,
				emptyString: '',
				noNumber: NaN,
				zero: 0,
				negativeZero: -0,
				false: false,
				undefined,

				// truthy (literally anything else):
				nonEmptyString: 'foobar',
				whitespace: ' ',
				function: Object.prototype.toString,
				emptyObject: {},
				nonEmptyObject: { a: 1, b: 2 },
				emptyList: [],
				nonEmptyList: [1, 2, 3],
				greaterZero: 1,
			})
		).toEqual('nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero');
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
				.on('cycle', function(event) {
					console.log(String(event.target));
				})
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
