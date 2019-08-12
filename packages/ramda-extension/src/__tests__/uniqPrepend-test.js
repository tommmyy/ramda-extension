import { uniqPrepend } from '../';

describe('uniqPrepend', () => {
	it('prepends to unique list', () => {
		expect(uniqPrepend('b', ['a', 'b'])).toEqual(['b', 'a']);
		expect(uniqPrepend('d', ['a', 'b'])).toEqual(['d', 'a', 'b']);
	});
});
