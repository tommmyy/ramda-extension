import { padRight } from '../';

describe('padRight', () => {
	it("returns '1000000000'", () => {
		expect(padRight(10, '0')('1')).toBe('1000000000');
	});

	it("returns '1'", () => {
		expect(padRight(1, '0')('1')).toBe('1');
	});
});
