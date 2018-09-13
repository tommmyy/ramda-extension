import camelizeKeys from '../camelizeKeys';

describe('camelizeKeys', () => {
	it('should handle objects', () =>
		expect(
			camelizeKeys({
				'foo-bar': '',
				'foo-baz': '',
			})
		).toEqual({
			fooBar: '',
			fooBaz: '',
		})
	);

	it('should handle objects recursively', () =>
		expect(
			camelizeKeys({
				'foo-bar': '',
				'foo-baz': {
					'foo-bar': '',
					'foo-baz': '',
				},
			})
		).toEqual({
			fooBar: '',
			fooBaz: {
				fooBar: '',
				fooBaz: '',
			},
		})
	);

	it('should handle functions as values in objects', () => {
		const fn = () => {};

		expect(
			camelizeKeys({
				'foo-bar': '',
				'foo-baz': fn,
			})
		).toEqual({
			fooBar: '',
			fooBaz: fn,
		});
	});

	it('should handle primitive types as values in objects', () =>
		expect(
			camelizeKeys({
				'foo-bar': '',
				'foo-baz': 1,
				'foo-boo': true,
			})
		).toEqual({
			fooBar: '',
			fooBaz: 1,
			fooBoo: true,
		})
	);

	it('should handle arrays', () =>
		expect(camelizeKeys([{ 'foo-bar': '' }, { 'foo-bar': '' }])).toEqual([{ fooBar: '' }, { fooBar: '' }])
	);

	it('should handle arrays recursively', () =>
		expect(camelizeKeys([{ 'foo-bar': '' }, { 'foo-bar': '' }, [{ 'foo-bar': '' }, { 'foo-bar': '' }]])).toEqual([
			{ fooBar: '' },
			{ fooBar: '' },
			[{ fooBar: '' }, { fooBar: '' }],
		])
	);
});
