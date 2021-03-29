import R from 'ramda';
import { reduceSource } from '../';

describe('reduceSource', () => {
	it('makes the source array available while reducing', () => {
		const sourceArr = [1, 2, 3];
		Object.freeze(sourceArr); // should not mutate source
		const sourceAcc = 10;
		const iteratorFn = (acc, v, sAcc, sArr) => {
			expect(sAcc).toBe(10);
			expect(sArr).toEqual([1, 2, 3]);
			return v + sAcc + acc;
		};
		reduceSource(iteratorFn, sourceAcc, sourceArr);
	});
	it('does not mutate sources', () => {
		const sourceArr = [1, 2, 3];
		Object.freeze(sourceArr); // should not mutate source
		const sourceAcc = 10;
		const iteratorFn = (acc, v, sAcc) => {
			return v + sAcc + acc;
		};
		reduceSource(iteratorFn, sourceAcc, sourceArr);

		expect(sourceAcc).toBe(10); // does not mutate source
		expect(sourceArr).toEqual([1, 2, 3]); // does not mutate source
	});
	it('reduces', () => {
		const sourceArr = [1, 2, 3];
		Object.freeze(sourceArr); // should not mutate source
		const sourceAcc = 10;
		const iteratorFn = (acc, v, sAcc) => {
			// 1 10 10
			// 2 10 21
			// 3 10 33
			return v + sAcc + acc;
		};
		const expected = 46;
		const actual = reduceSource(iteratorFn, sourceAcc, sourceArr);

		expect(actual).toBe(expected);
	});
	it('has working examples', () => {
		// (1+1+1) + (2+3+1) + (3+6+1) => 10
		const example1 = reduceSource((acc, v, sAcc) => v + acc + sAcc, 1, [
			1,
			2,
			3,
		]);
		// (0+1+0+1+2) + (4+2+0+1+2) => 9
		const example2 = reduceSource(R.pipe(R.unapply(R.flatten), R.sum), 0, [
			1,
			2,
		]);
		expect(example1).toBe(10);
		expect(example2).toBe(9);
	});
});
