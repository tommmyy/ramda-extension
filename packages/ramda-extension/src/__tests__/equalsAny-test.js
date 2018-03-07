import equalsAny from '../equalsAny';

describe('equalsAny', () => {
	it('should exist', () => {
		expect(equalsAny).toBeDefined();
	});
	it('should be truthy when any equals', () => {
		expect(equalsAny(['a', 'b', 'c'], 'b')).toBeTruthy();
	});
	it('should be falsy when none equals', () => {
		expect(equalsAny(['a', 'b', 'c'], 'e')).toBeFalsy();
	});
	it('should curry', () => {
		const isIn = equalsAny(['a', 'b', 'c']);
		expect(isIn('b')).toBeTruthy();
	});
});
