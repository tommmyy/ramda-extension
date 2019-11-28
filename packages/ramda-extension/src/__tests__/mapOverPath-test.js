import { mapOverPath } from '../';
import { add } from 'ramda';

describe('mapOver', () => {
	it('Changes the specified property', () => {
		const objs = [
			{ value: { id: 1 } },
			{ value: { id: 2 } },
			{ value: { id: 3 } },
		];

		expect(mapOverPath(['value', 'id'])(add(100))(objs)).toEqual([
			{ value: { id: 101 } },
			{ value: { id: 102 } },
			{ value: { id: 103 } },
		]);
	});
});
