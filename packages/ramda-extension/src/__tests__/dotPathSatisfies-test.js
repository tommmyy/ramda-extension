import { dotPathSatisfies } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('dotPathSatisfies', () => {
	const itHelper = (pred, path, x, result) =>
		it(`for path ${s(path)} and object ${s(x)} returns ${result}`, () => {
			expect(dotPathSatisfies(pred)(path)(x)).toEqual(result);
		});

	const positive = (y) => y > 0;

	itHelper(positive, 'a.b', {}, false);
	itHelper(positive, 'a.b', { a: { b: 1} }, true);
	itHelper(positive, 'a.b', { a: { c: 3 } }, false);
	itHelper(positive, 'a.c', { a: { b: -3} }, false);
});
