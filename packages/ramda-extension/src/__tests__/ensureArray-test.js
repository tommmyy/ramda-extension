import { ensureArray } from '../';

describe('ensureArray', () => {
	it('should be defined', () => {
		expect(ensureArray).toBeDefined();
	});

	it('should wrap non-arrays in an array', () => {
		expect(ensureArray('A string yo.')).toEqual(['A string yo.']);
		expect(ensureArray({ consoleLog: 'yo' })).toEqual([{ consoleLog: 'yo' }]);
		expect(ensureArray(true)).toEqual([true]);
		expect(ensureArray(undefined)).toEqual([undefined]);
	});

	it('should keep arrays as is', () => {
		expect(ensureArray(['an array item yo.'])).toEqual(['an array item yo.']);
		expect(ensureArray([['yoNestedArrayItem']])).toEqual([['yoNestedArrayItem']]);
	});
});
