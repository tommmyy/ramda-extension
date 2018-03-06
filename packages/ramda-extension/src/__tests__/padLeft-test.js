import { padLeft } from '../';

describe('padLeft', () => {
	it("returns '0000000001'", () => {
		expect(padLeft(10, '0')('1')).toBe('0000000001');
	});

	it("returns '1'", () => {
		expect(padLeft(1, '0')('1')).toBe('1');
	});
});
