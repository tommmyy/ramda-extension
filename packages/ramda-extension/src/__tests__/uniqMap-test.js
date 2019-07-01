import { identity } from 'ramda';
import { uniqMap } from '../';

describe('uniqMap', () => {
	it('returns unique values of mapping', () => {
		expect(uniqMap(identity, ['hello', 'hello', 'world'])).toEqual([
			'hello',
			'world',
		]);
	});
});
