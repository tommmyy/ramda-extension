import { mapOver } from '../';
import { add, lensProp } from 'ramda';

describe('mapOver', () => {
	it('Changes the specified property', () => {
		const objs = [{ value: 1 }, { value: 2 }, { value: 3 }];

		const lensValue = lensProp('value');

		expect(mapOver(lensValue)(add(100))(objs)).toEqual([
			{ value: 101 },
			{ value: 102 },
			{ value: 103 },
		]);
	});
});
