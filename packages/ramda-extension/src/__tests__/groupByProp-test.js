import { groupByProp } from '../';

describe('groupByProp', () => {
	it('groups by path', () => {
		expect(
			groupByProp('id')([{ id: 1 }, { id: 3 }, { id: 1, name: 'c' }])
		).toEqual({ 1: [{ id: 1 }, { id: 1, name: 'c' }], 3: [{ id: 3 }] });
	});
});
