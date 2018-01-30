import { endsWithSuffix } from '../';

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
