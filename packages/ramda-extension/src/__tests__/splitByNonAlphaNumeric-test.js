import { splitByNonAlphaNumeric } from '../';

describe('splitByNonAlphaNumeric', () => {
	describe('should split string by non-alphanumeric characters', () => {
		const splitByNonAlphaNumericUtil = (str, result) =>
			it(`${str} to be ${result}`, () =>
				expect(splitByNonAlphaNumeric(str)).toEqual(result));

		splitByNonAlphaNumericUtil('h  e.l//l o wo.../r8****ld', [
			'h',
			'e',
			'l',
			'l',
			'o',
			'wo',
			'r8',
			'ld',
		]);
	});
});
