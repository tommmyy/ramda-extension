import { toSnakeCase } from '../';

describe('toSnakeCase', () => {
	describe('should convert string to snake_case', () => {
		const toSnakeCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toSnakeCase(str)).toBe(result));

		toSnakeCaseUtil('hello', 'hello');
		toSnakeCaseUtil('hello-', 'hello');
		toSnakeCaseUtil('   hello  ', 'hello');
		toSnakeCaseUtil('hello world', 'hello_world');
		toSnakeCaseUtil('hello world AND univerSe', 'hello_world_and_universe');
	});
});
