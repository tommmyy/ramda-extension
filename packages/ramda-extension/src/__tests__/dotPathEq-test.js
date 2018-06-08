import { dotPathEq } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('dotPathEq', () => {
	const itHelper = (path, eq, x, result) =>
		it(`for path ${s(path)}, value to equal ${s(eq)} object ${s(x)} returns ${result}`, () => {
			expect(dotPathEq(path)(eq)(x)).toEqual(result);
		});


	itHelper('a.b', 3, { }, false);
	itHelper('a.b', 3, { a: { b: 1} }, false);
	itHelper('a.b', 3, { a: { b: 3} }, true);
});
