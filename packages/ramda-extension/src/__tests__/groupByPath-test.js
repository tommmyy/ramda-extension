import { groupByPath } from '../';

describe('groupByPath', () => {
	it('groups by path', () => {
		expect(
			groupByPath(['id'])([{ id: 1 }, { id: 3 }, { id: 1, name: 'c' }])
		).toEqual({ '1': [{ id: 1 }, { id: 1, name: 'c' }], '3': [{ id: 3 }] });
	});
});
