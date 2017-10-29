import R from 'ramda';
import {
	toUpperFirst,
	toLowerFirst,
	toCamelCase,
	toPascalCase,
	toSnakeCase,
	toKebabCase,
	toDotCase,
	toScreamingSnakeCase,
	alwaysNull,
	startsWithPrefix,
	endsWithSuffix,
	dispatch,
	noop,
	isNumeric,
	unfoldObject,
	reduceCallable,
	constructRegExp,
	listToString,
	splitByNonAlphaNumeric,
} from '../';

describe('noop', () => {
	it('returns null', () => {
		expect(noop()).toBe(null);
	});
});

describe('alwaysNull', () => {
	it('returns null', () => {
		expect(alwaysNull()).toBe(null);
	});
});

describe('isNumeric', () => {
	it('returns true for finite numbers', () => {
		expect(R.any(R.equals(true), [isNumeric(-1), isNumeric(0), isNumeric(1), isNumeric(1.1)])).toBe(true);
	});

	it('returns false for infinite numbers and non-number types', () => {
		expect(
			R.any(R.equals(true), [
				isNumeric(Infinity),
				isNumeric(NaN),
				isNumeric(''),
				isNumeric(() => {}),
				isNumeric(false),
				isNumeric(null),
				isNumeric(undefined),
				isNumeric({}),
				isNumeric([]),
			])
		).toBe(false);
	});
});

describe('unfoldProject', () => {
	it('should unfold object', () => {
		expect(unfoldObject({ 'a.b.c': 1, 'd.e.f': 2, g: 3 })).toEqual({
			a: { b: { c: 1 } },
			d: { e: { f: 2 } },
			g: 3,
		});
	});
});

describe('dispatch', () => {
	it('should return first not nil result ', () => {
		expect(dispatch([R.always(null), R.identity, R.always(null)], 3)).toBe(3);
	});
	it('should return undefined', () => {
		expect(dispatch([R.always(null), R.identity, R.always(null)], null)).toBe(undefined);
	});
});

describe('reduceCallable', () => {
	it('should return result after appling arguments ', () => {
		expect(reduceCallable((a) => (b) => a + b, [1, 2])).toBe(3);
	});
});

describe('startsWithPrefix', () => {
	const startsWithPrefixUtil = (prefix, str, result) =>
		it(`should return ${result} if '${str}' starts with '${prefix}'`, () => {
			expect(startsWithPrefix(prefix, str)).toBe(result);
		});

	startsWithPrefixUtil('', 'hello', true);
	startsWithPrefixUtil('h', 'hello', true);
	startsWithPrefixUtil('he', 'hello', true);
	startsWithPrefixUtil('h', 'good bye', false);
});
describe('endsWithSuffix', () => {
	const endsWithSuffixUtil = (suffix, str, result) =>
		it(`should return ${result} if '${str}' to ends with '${suffix}'`, () => {
			expect(endsWithSuffix(suffix, str)).toBe(result);
		});

	endsWithSuffixUtil('', 'hello', true);
	endsWithSuffixUtil('o', 'hello', true);
	endsWithSuffixUtil('lo', 'hello', true);
	endsWithSuffixUtil('d', 'good bye', false);
});

describe('constructRegExp', () => {
	it('should return RegExp ', () => {
		expect(constructRegExp('end$', 'gi') instanceof RegExp).toBe(true);
	});

	it('should return proper RegExp ', () => {
		expect(R.test(constructRegExp('end$', 'gi'), 'in the end')).toBe(true);
	});
});

describe('toUpperFirst', () => {
	it('capitalize first letter', () => {
		expect(toUpperFirst('hello')).toBe('Hello');
	});
});

describe('toLowerFirst', () => {
	it('decapitalize first letter', () => {
		expect(toLowerFirst('HELLO')).toBe('hELLO');
	});
});

describe('splitByNonAlphaNumeric', () => {
	describe('should split string by non-alphanumeric characters', () => {
		const splitByNonAlphaNumericUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(splitByNonAlphaNumeric(str)).toEqual(result));

		splitByNonAlphaNumericUtil('h  e.l//l o wo.../r8****ld', ['h', 'e', 'l', 'l', 'o', 'wo', 'r8', 'ld']);
	});
});

describe('listToString', () => {
	it('converts list to string', () => {
		expect(listToString(['h', 'e', 'l', 'l', 'o'])).toBe('hello');
	});
});

describe('toPascalCase', () => {
	describe('should convert string to PascalCase', () => {
		const toPascalCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toPascalCase(str)).toBe(result));

		toPascalCaseUtil('hello', 'Hello');
		toPascalCaseUtil('hello-', 'Hello');
		toPascalCaseUtil('   hello  ', 'Hello');
		toPascalCaseUtil('hello world', 'HelloWorld');
		toPascalCaseUtil('hello world AND univerSe', 'HelloWorldANDUniverSe');
	});
});

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


describe('toKebabCase', () => {
	describe('should convert string to kebab-case', () => {
		const toKebabCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toKebabCase(str)).toBe(result));

		toKebabCaseUtil('hello', 'hello');
		toKebabCaseUtil('hello-', 'hello');
		toKebabCaseUtil('   hello  ', 'hello');
		toKebabCaseUtil('hello world', 'hello-world');
		toKebabCaseUtil('hello world AND univerSe', 'hello-world-and-universe');
	});
});


describe('toDotCase', () => {
	describe('should convert string to dot.case', () => {
		const toDotCaseUtil = (str, result) =>
			it(`${str} to be ${result}`, () => expect(toDotCase(str)).toBe(result));

		toDotCaseUtil('hello', 'hello');
		toDotCaseUtil('hello-', 'hello');
		toDotCaseUtil('   hello  ', 'hello');
		toDotCaseUtil('hello world', 'hello.world');
		toDotCaseUtil('hello world AND univerSe', 'hello.world.and.universe');
	});
});
