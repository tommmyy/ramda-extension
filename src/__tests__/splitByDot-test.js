import { splitByDot } from '../';

describe('splitByDot', () => {
	it('splits string by dot', () => {
		expect(splitByDot('a.b.c')).toEqual(['a', 'b', 'c']);
	});
});
