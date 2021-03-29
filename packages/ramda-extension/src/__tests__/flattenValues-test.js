import flattenValues from '../flattenValues';

describe('flattenValues', () => {
	it('should recursively flatten values', () => {
		expect(
			flattenValues([
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
		).toEqual(['hi', 'bar', 'hi', 'cuuus', 'hi', 'haha', 'hi', 'haha', 'hi']);
	});
});
