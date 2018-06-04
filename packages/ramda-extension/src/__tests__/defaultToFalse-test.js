import { defaultToFalse } from '../';

describe('defaultToFalse', () => {
	it('returns false', () => {
		expect(defaultToFalse(null)).toEqual(false);
		expect(defaultToFalse(undefined)).toEqual(false);
		expect(defaultToFalse(parseInt('string'))).toEqual(false);
	});

	it('returns "Ramda"', () => {
		expect(defaultToFalse('Ramda')).toEqual('Ramda');
	});
});
