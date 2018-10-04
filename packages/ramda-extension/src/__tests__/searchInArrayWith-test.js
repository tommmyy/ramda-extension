import { equals } from 'ramda';
import searchInArrayWith from '../searchInArrayWith';

const searchFn = equals('hi');

describe('searchInArrayWith', () => {
	it('should search in array of primitives', () => {
		expect(searchInArrayWith(searchFn, ['1', 2, 'hi'])).toEqual(['hi']);
	});
	it('should search in array of objects and primitives', () => {
		expect(
			searchInArrayWith(searchFn, ['hi', { foo: 'bar' }, { foo: 'hi' }])
		).toEqual(['hi', { foo: 'hi' }]);
	});
	it('should search in array of objects and nested objects', () => {
		expect(
			searchInArrayWith(searchFn, [
				'hi',
				{ foo: 'bar' },
				{ foo: 'hi' },
				{
					foo: {
						bar: 'hi',
					},
				},
			])
		).toEqual([
			'hi',
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
			searchInArrayWith(searchFn, [
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
