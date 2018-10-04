import searchInArray from '../searchInArray';

const searchFor = 'hi';

describe('searchInArrayWith', () => {
	it('should search in array of primitives', () => {
		expect(searchInArray(searchFor, ['1', 2, 'hia'])).toEqual(['hia']);
	});
	it('should search in array of objects and primitives', () => {
		expect(
			searchInArray(searchFor, ['hi', { foo: 'bar' }, { foo: 'hi' }])
		).toEqual(['hi', { foo: 'hi' }]);
	});
	it('should search in array of objects and nested objects', () => {
		expect(
			searchInArray(/h./, [
				'hi',
				{ foo: 'baahor' },
				{ foo: 'hi' },
				{
					foo: {
						bar: 'hi',
					},
				},
			])
		).toEqual([
			'hi',
			{ foo: 'baahor' },
			{ foo: 'hi' },
			{
				foo: {
					bar: 'hi',
				},
			},
		]);
	});
	it('should search in array of objects and nested arrays', () => {
		expect(
			searchInArray(searchFor, [
				'hi',
				{ foo: 'bar' },
				{ foo: 'hi' },
				{
					foo: {
						bar: ['cuuus', { foo: 'hi' }],
					},
				},
				['haha', 'hi'],
				['haha', { foo: 'hi' }],
			])
		).toEqual([
			'hi',
			{ foo: 'hi' },
			{
				foo: {
					bar: ['cuuus', { foo: 'hi' }],
				},
			},
			['haha', 'hi'],
			['haha', { foo: 'hi' }],
		]);
	});
});
