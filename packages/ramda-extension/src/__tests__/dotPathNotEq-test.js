import { dotPathNotEq } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('dotPathNotEq', () => {
	const itHelper = (path, eq, x, result) =>
		it(`for path ${s(path)}, value to equal ${s(eq)} object ${s(
			x
		)} returns ${result}`, () => {
			expect(dotPathNotEq(path)(eq)(x)).toEqual(result);
		});

	itHelper('a.b', 3, {}, true);
	itHelper('a.b', 3, { a: { b: 1 } }, true);
	itHelper('a.b', 3, { a: { b: 3 } }, false);
});
