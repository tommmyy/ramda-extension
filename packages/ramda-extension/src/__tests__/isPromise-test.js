import { isPromise } from '../';

describe('isPromise', () => {
	it('to be true', () => {
		expect(isPromise({ then: () => {} })).toBe(true);
	});
});
