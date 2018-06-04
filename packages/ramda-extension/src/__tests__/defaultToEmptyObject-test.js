import { defaultToEmptyObject } from '../';

describe('defaultToEmptyObject', () => {
	it('returns {}', () => {
		expect(defaultToEmptyObject(null)).toEqual({});
		expect(defaultToEmptyObject(undefined)).toEqual({});
		expect(defaultToEmptyObject(parseInt('string'))).toEqual({});
	});

	it('returns "Ramda"', () => {
		expect(defaultToEmptyObject('Ramda')).toEqual('Ramda');
	});
});
