import { dotPathNotSatisfies } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('dotPathNotSatisfies', () => {
	const itHelper = (pred, path, x, result) =>
		it(`for path ${s(path)} and object ${s(x)} returns ${result}`, () => {
			expect(dotPathNotSatisfies(pred)(path)(x)).toEqual(result);
		});

	const positive = (y) => y > 0;

	itHelper(positive, 'a.b', {}, true);
	itHelper(positive, 'a.b', { a: { b: 1} }, false);
	itHelper(positive, 'a.b', { a: { c: 3 } }, true);
	itHelper(positive, 'a.c', { a: { b: -3} }, true);
});
