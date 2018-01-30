import { toCamelCase } from '../';

describe('toCamelCase', () => {
	describe('should convert string to cascalCase', () => {
		const toCamelCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toCamelCase(str)).toBe(result));

		toCamelCaseUtil('hello', 'hello');
		toCamelCaseUtil('hello-', 'hello');
		toCamelCaseUtil('   hello  ', 'hello');
		toCamelCaseUtil('hello world', 'helloWorld');
		toCamelCaseUtil('hello world AND univerSe', 'helloWorldANDUniverSe');
	});
});
