import { mergeDeepLeftAll } from '../';

describe('mergeDeepLeftAll', () => {
	it('merges all objects in a list from the left', () => {
		const a = { fooA: { bar: 'a' }, shared: { baz: 1 } };
		const b = { fooB: { bar: 'b' }, shared: { baz: 2 } };
		const c = { fooC: { bar: 'c' }, shared: { baz: 3 } };

		expect(mergeDeepLeftAll([a, b, c])).toEqual({
			fooA: { bar: 'a' },
			fooB: { bar: 'b' },
			fooC: { bar: 'c' },
			shared: { baz: 1 },
		});
	});
});
