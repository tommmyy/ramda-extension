import { flattenArgs } from '../';

describe('flattenArgs', () => {
	it('should exists', () => {
		expect(flattenArgs).toBeDefined();
	});
	it('should return array of arguments', () => {
		expect(flattenArgs('one', 'two')).toEqual(['one', 'two']);
	});
	it('should return flatten array of arguments', () => {
		expect(flattenArgs('one', ['two', 'tree'])).toEqual(['one', 'two', 'tree']);
	});
	it('should return flatten array from nested array arguments', () => {
		expect(flattenArgs('one', ['two', ['tree', 'four'], 'five']))
			.toEqual(['one', 'two', 'tree', 'four', 'five']);
	});
});
