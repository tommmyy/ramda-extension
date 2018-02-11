import { applyCompose } from '../';
import { assoc, dissoc } from 'ramda'

describe('applyCompose', () => {
	it('should exist', () => {
		expect(applyCompose).toBeDefined();
	});
	it('should apply array of functions into compose', () => {
		const modifier = applyCompose([
			assoc('a', 1),
			assoc('c', 3),
			dissoc('b'),
		]);
		expect(modifier({ b: 2, d: 4 })).toEqual({ a: 1, c: 3, d: 4 })
	});
});
