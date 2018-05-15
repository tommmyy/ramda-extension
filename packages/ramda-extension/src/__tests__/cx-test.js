import { cx } from '../';

describe('cx', () => {
	it('should exists', () => {
		expect(cx).toBeDefined();
	});
	it('should handle strings', () => {
		expect(cx('one', 'two')).toBe('one two');
	});
	it('should trim strings', () => {
		expect(cx('  one  ', '  two   ')).toBe('one two');
	});
	it('should handle arrays', () => {
		expect(cx(['one', 'two'])).toBe('one two');
	});
	it('should handle nested arrays', () => {
		expect(cx(['one', ['two', 'three']])).toBe('one two three');
	});
	it('should handle objects', () => {
		expect(cx({ one: true, two: false })).toBe('one');
	});
	it('should always overwrite other types', () => {
		expect(cx('one', { one: false, two: false, three: true }, 'two')).toBe('three');
	});
	it('should handle a mix of strings, arrays, and objects', () => {
		expect(cx(['one', ['two'], { three: true, four: 0 }], 'five six', { two: false })).toBe('one five six three');
	});
});
