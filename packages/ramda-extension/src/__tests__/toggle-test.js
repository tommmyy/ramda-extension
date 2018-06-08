import toggle from '../toggle';

describe('toggle', () => {
	it('toggles a value to the other of two values', () => {
		expect(toggle('on', 'off')('on')).toEqual('off');
		expect(toggle('active', 'inactive')('inactive')).toEqual('active');
		expect(toggle(10, 100)(10)).toEqual(100);
	});
	it('returns the given value if it matches neither of the provided two options', () => {
		expect(toggle('on', 'off')('other')).toEqual('other');
	});
});
