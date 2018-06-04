import { defaultToTrue } from '../';

describe('defaultToTrue', () => {
	it('returns true', () => {
		expect(defaultToTrue(null)).toEqual(true);
		expect(defaultToTrue(undefined)).toEqual(true);
		expect(defaultToTrue(parseInt('string'))).toEqual(true);
	});

	it('returns "Ramda"', () => {
		expect(defaultToTrue('Ramda')).toEqual('Ramda');
	});
});
