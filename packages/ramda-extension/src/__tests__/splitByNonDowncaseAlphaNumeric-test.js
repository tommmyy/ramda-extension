import { splitByNonDowncaseAlphaNumeric } from '../';

describe('splitByNonDowncaseAlphaNumeric', () => {
	describe('should split string by non-alphanumeric, non-downcased characters', () => {
		const splitByNonAlphaNumericUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(splitByNonDowncaseAlphaNumeric(str)).toEqual(result));

		splitByNonAlphaNumericUtil('fooBar', ['foo', 'Bar']);
		splitByNonAlphaNumericUtil('FooBar', ['Foo', 'Bar']);
		splitByNonAlphaNumericUtil('hello world AND universe', ['hello', 'world', 'AND', 'universe']);
	});
});
