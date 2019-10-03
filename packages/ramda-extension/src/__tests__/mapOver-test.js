import { mapOver } from '../';
import { add } from 'ramda';

describe('mapOver', () => {
	it('Changes the specified property', () => {
		const objs = [
			{ value: 1 },
			{ value: 2 },
			{ value: 3 },
		];

		expect(mapOver(add(100))('value')(objs)).toEqual([
			{ value: 101 },
			{ value: 102 },
			{ value: 103 },
		]);
	});
});
