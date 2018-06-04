import { defaultToOne } from '../';

describe('defaultToOne', () => {
	it('returns 1', () => {
		expect(defaultToOne(null)).toEqual(1);
		expect(defaultToOne(undefined)).toEqual(1);
		expect(defaultToOne(parseInt('string'))).toEqual(1);
	});

	it('returns "Ramda"', () => {
		expect(defaultToOne('Ramda')).toEqual('Ramda');
	});
});
