import { get } from '../';

describe('get', () => {
	it('returns slice of object', () => {
		expect(get({ foo: 'bar' }, ['foo'])).toBe('bar');
	});
});
