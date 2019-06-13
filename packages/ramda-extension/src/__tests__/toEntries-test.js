import { toEntries } from '../';

describe('toEntries', () => {
	it('creates entries from object', () => {
		expect(toEntries({ a: 'b', c: 'd' })).toEqual([{ a: 'b' }, { c: 'd' }]);
	});
});
