import { T } from 'ramda';
import { padLeftUntil } from '../';

describe('padLeftUntil', () => {
	it("returns '0000000001'", () => {
		expect(padLeftUntil((x) => x.length === 10, '0')('1')).toBe('0000000001');
	});

	it("returns '1'", () => {
		expect(padLeftUntil(T, '')('1')).toBe('1');
	});
});
