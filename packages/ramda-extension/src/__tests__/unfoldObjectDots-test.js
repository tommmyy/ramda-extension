import { unfoldObjectDots } from '../';

describe('unfoldObjectDots', () => {
	it('should unfold object', () => {
		expect(unfoldObjectDots({ 'a.b.c': 1, 'd.e.f': 2, g: 3 })).toEqual({
			a: { b: { c: 1 } },
			d: { e: { f: 2 } },
			g: 3,
		});
	});
	it('should merge same objects', () => {
		expect(unfoldObjectDots({ 'a.b': 1, 'a.c': 1 })).toEqual({
			a: { b: 1, c: 1 },
		});
	});
});
