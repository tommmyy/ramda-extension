import { keyMirror } from '../';

describe('keyMirror', () => {
	it('it should mirror keys to values', () => {
		expect(
			keyMirror({
				ITEM_REQUEST: null,
				ITEM_SUCCESS: null,
				ITEM_ERROR: null,
			})
		).toEqual({
			ITEM_REQUEST: 'ITEM_REQUEST',
			ITEM_SUCCESS: 'ITEM_SUCCESS',
			ITEM_ERROR: 'ITEM_ERROR',
		});
	});
});
