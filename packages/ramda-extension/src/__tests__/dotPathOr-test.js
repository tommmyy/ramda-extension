import { dotPathOr } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('dotPathOr', () => {
	const itHelper = (def, path, x, result) =>
		it(`for path ${s(path)}, default value ${s(def)} object ${s(
			x
		)} returns ${result}`, () => {
			expect(dotPathOr(def)(path)(x)).toEqual(result);
		});

	const def = 'N/A';

	itHelper(def, 'a.b', {}, def);
	itHelper(def, 'a.b', { a: { b: 1 } }, 1);
	itHelper(def, 'a.c', { a: { c: 3 } }, 3);
});
