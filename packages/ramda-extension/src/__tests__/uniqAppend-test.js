import { uniqAppend } from '../';

describe('uniqAppend', () => {
	it('appends unique item', () => {
		const result = uniqAppend('a', ['a', 'b']);
		expect(result).toEqual(['a', 'b']);
	});
});
