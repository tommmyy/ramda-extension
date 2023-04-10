import { dotPathNotEq } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('dotPathNotEq', () => {
	const itHelper = (eq, path, x, result) =>
		it(`for path ${s(path)}, value to equal ${s(eq)} object ${s(
			x
		)} returns ${result}`, () => {
			expect(dotPathNotEq(eq)(path)(x)).toEqual(result);
		});

	itHelper(3, 'a.b', {}, true);
	itHelper(3, 'a.b', { a: { b: 1 } }, true);
	itHelper(3, 'a.b', { a: { b: 3 } }, false);
});
