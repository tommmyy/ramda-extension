import { defaultToEmptyString } from '../';

describe('defaultToEmptyString', () => {
	it('returns ""', () => {
		expect(defaultToEmptyString(null)).toEqual('');
		expect(defaultToEmptyString(undefined)).toEqual('');
		expect(defaultToEmptyString(parseInt('string'))).toEqual('');
	});

	it('returns "Ramda"', () => {
		expect(defaultToEmptyString('Ramda')).toEqual('Ramda');
	});
});
