import { toKebabCase } from '../';

describe('toKebabCase', () => {
	describe('should convert string to kebab-case', () => {
		const toKebabCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toKebabCase(str)).toBe(result));

		toKebabCaseUtil('hello', 'hello');
		toKebabCaseUtil('hello-', 'hello');
		toKebabCaseUtil('   hello  ', 'hello');
		toKebabCaseUtil('hello world', 'hello-world');
		toKebabCaseUtil('hello world AND univerSe', 'hello-world-and-universe');
		toKebabCaseUtil('Ahoj světe', 'ahoj-svete');
		toKebabCaseUtil('   Tschüss Freund', 'tschuss-freund');
		toKebabCaseUtil('Adiós  amigo español   ', 'adios-amigo-espanol');
	});
});
