import { dissocDotPath } from '../';

describe('dissocDotPath', () => {
	it('should return object without attribute defined in given path', () => {
		const result = dissocDotPath('k1.k2', {
			k1: { k2: { a: '', b: 2, c: [] }, k3: {} },
		});
		expect(result.k1).toBeDefined();
		expect(result.k1.k3).toBeDefined();
		expect(result.k1.k2).toBeUndefined();
	});
	it('should return whole object when nothing find on path', () => {
		const result = dissocDotPath('key1.key4', {
			k1: { k2: { a: '', b: 2, c: [] }, k3: {} },
		});
		expect(result).toEqual({ k1: { k2: { a: '', b: 2, c: [] }, k3: {} } });
	});
});
