import { valueMirror } from '../';

describe('valueMirror', () => {
	it('it should mirror keys to values', () => {
		expect(valueMirror(['ITEM_REQUEST', 'ITEM_SUCCESS', 'ITEM_ERROR'])).toEqual(
			{
				ITEM_REQUEST: 'ITEM_REQUEST',
				ITEM_SUCCESS: 'ITEM_SUCCESS',
				ITEM_ERROR: 'ITEM_ERROR',
			}
		);
	});
});
