import { defaultToEmptyArray } from '../';

describe('defaultToEmptyArray', () => {
	it('returns []', () => {
		expect(defaultToEmptyArray(null)).toEqual([]);
		expect(defaultToEmptyArray(undefined)).toEqual([]);
		expect(defaultToEmptyArray(parseInt('string'))).toEqual([]);
	});

	it('returns "Ramda"', () => {
		expect(defaultToEmptyArray('Ramda')).toEqual('Ramda');
	});
});
