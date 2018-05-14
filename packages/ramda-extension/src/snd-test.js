import { snd } from '../';

describe('snd', () => {
	it('should return second item in a list', () => {
		expect(snd([1, 2])).toBe(2);
	});
});
