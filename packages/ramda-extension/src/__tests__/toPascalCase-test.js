import { toPascalCase } from '../';

describe('toPascalCase', () => {
	describe('should convert string to PascalCase', () => {
		const toPascalCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () =>
				expect(toPascalCase(str)).toBe(result));

		toPascalCaseUtil('hello', 'Hello');
		toPascalCaseUtil('hello-', 'Hello');
		toPascalCaseUtil('   hello  ', 'Hello');
		toPascalCaseUtil('hello world', 'HelloWorld');
		toPascalCaseUtil('hello world AND univerSe', 'HelloWorldANDUniverSe');
	});
});
