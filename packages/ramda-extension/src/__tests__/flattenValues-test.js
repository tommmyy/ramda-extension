import flattenValues from '../flattenValues';

describe('flattenValues', () => {
	it('should recursively flatten values', () => {
		expect(
			flattenValues([
				'ahoj',
				{ foo: 'bar' },
				{ foo: 'ahoj' },
				{
					foo: {
						bar: ['cuuus', { foo: 'ahoj' }],
					},
				},
				['haha', 'ahoj'],
				['haha', { foo: 'ahoj' }],
			])
		).toEqual([
			'ahoj',
			'bar',
			'ahoj',
			'cuuus',
			'ahoj',
			'haha',
			'ahoj',
			'haha',
			'ahoj',
		]);
	});
});
