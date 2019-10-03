import { filterByPropInList } from '../';

describe('filterByPropInList', () => {
	it('Keeps only the props with the value defined in the given list', () => {
		const validKeys = ['A', 'D'];
		const objs = [{key: 'A'}, {key: 'B'}, {key: 'E'}];
		expect(filterByPropInList('key')(validKeys)(objs)).toEqual([{key: 'A'}]);
		expect(filterByPropInList('key')([])([])).toEqual([]);
	});
});
