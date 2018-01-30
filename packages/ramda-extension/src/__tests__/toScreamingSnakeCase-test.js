import { toScreamingSnakeCase } from '../';

describe('toScreamingSnakeCase', () => {
	describe('should convert string to SCREAMING_SNAKE_CASE', () => {
		const toScreamingSnakeCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toScreamingSnakeCase(str)).toBe(result));

		toScreamingSnakeCaseUtil('hello', 'HELLO');
		toScreamingSnakeCaseUtil('hello-', 'HELLO');
		toScreamingSnakeCaseUtil('   hello  ', 'HELLO');
		toScreamingSnakeCaseUtil('hello world', 'HELLO_WORLD');
		toScreamingSnakeCaseUtil('hello world AND univerSe', 'HELLO_WORLD_AND_UNIVERSE');
	});
});
