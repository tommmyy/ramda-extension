import { dotPath } from '../';

describe('dotPath', () => {
	it('should get property on the given dot path', () => {
		expect(dotPath('a.b', { a: { b: 2 } })).toEqual(2);
	});
	it('should return undefined when nothing found on the path', () => {
		expect(dotPath('b.c', { a: { b: 2 } })).toBeUndefined();
	});
});
