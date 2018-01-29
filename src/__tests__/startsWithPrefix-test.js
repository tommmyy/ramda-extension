import { startsWithPrefix } from '../';

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
