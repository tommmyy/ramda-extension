import { rejectNil } from '../';

describe('rejectNil', () => {
	it('should be defined', () => {
		expect(rejectNil).toBeDefined();
	});
	it('should filter nill values', () => {
		expect(rejectNil(['foo', null, 'foo', undefined])).toEqual(['foo', 'foo']);
	});
});
