import { pathNotSatisfies } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('pathNotSatisfies', () => {
	const itHelper = (pred, path, x, result) =>
		it(`for path ${s(path)}, value object ${s(x)} returns ${result}`, () => {
			expect(pathNotSatisfies(pred)(path)(x)).toEqual(result);
		});

	const positive = (x) => x > 0;
	itHelper(positive, ['a', 'b'], {}, true);
	itHelper(positive, ['a', 'b'], { a: { b: -2 } }, true);
	itHelper(positive, ['a', 'b'], { a: { b: 3 } }, false);
});
