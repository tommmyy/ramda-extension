import { dotPathEq } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('dotPathEq', () => {
	const itHelper = (eq, path, x, result) =>
		it(`for path ${s(path)}, value to equal ${s(eq)} object ${s(
			x
		)} returns ${result}`, () => {
			expect(dotPathEq(eq)(path)(x)).toEqual(result);
		});

	itHelper(3, 'a.b', {}, false);
	itHelper(3, 'a.b', { a: { b: 1 } }, false);
	itHelper(3, 'a.b', { a: { b: 3 } }, true);
});
