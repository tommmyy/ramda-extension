import { toDotCase } from '../';

describe('toDotCase', () => {
	describe('should convert string to dot.case', () => {
		const toDotCaseUtil = (str, result) => it(`${str} to be ${result}`, () => expect(toDotCase(str)).toBe(result));

		toDotCaseUtil('hello', 'hello');
		toDotCaseUtil('hello-', 'hello');
		toDotCaseUtil('   hello  ', 'hello');
		toDotCaseUtil('hello world', 'hello.world');
		toDotCaseUtil('hello world AND univerSe', 'hello.world.and.universe');
	});
});
