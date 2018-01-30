import { assocDotPath } from '../';

describe('assocDotPath', () => {
	it('should set property on the given dot path', () => {
		expect(assocDotPath('a.b', 2, { a: undefined })).toEqual({ a: { b: 2 } });
	});
});
