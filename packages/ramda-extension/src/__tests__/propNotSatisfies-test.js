import { propNotSatisfies } from '../';

const s = (x) => JSON.stringify(x, null, 2);

describe('propNotSatisfies', () => {
	const itHelper = (pred, prop, x, result) =>
		it(`for prop ${s(prop)}, value object ${s(x)} returns ${result}`, () => {
			expect(propNotSatisfies(pred)(prop)(x)).toEqual(result);
		});

	const positive = (x) => x > 0;

	itHelper(positive, 'a', { }, true);
	itHelper(positive, 'a', { a: -1 }, true);
	itHelper(positive, 'a', { a: 3 }, false);
});
