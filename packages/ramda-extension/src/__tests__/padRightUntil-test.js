import { T } from 'ramda';
import { padRightUntil } from '../';

describe('padRightUntil', () => {
	it("returns '1000000000'", () => {
		expect(padRightUntil((x) => x.length === 10, '0')('1')).toBe('1000000000');
	});

	it("returns '1'", () => {
		expect(padRightUntil(T, '')('1')).toBe('1');
	});
});
