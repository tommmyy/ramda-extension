import { defaultToZero } from '../';

describe('defaultToZero', () => {
	it('returns 0', () => {
		expect(defaultToZero(null)).toEqual(0);
		expect(defaultToZero(undefined)).toEqual(0);
		expect(defaultToZero(parseInt('string'))).toEqual(0);
	});

	it('returns "Ramda"', () => {
		expect(defaultToZero('Ramda')).toEqual('Ramda');
	});
});
