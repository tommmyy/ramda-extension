import R from 'ramda';
import { dispatch } from '../';

describe('dispatch', () => {
	it('should return first not nil result ', () => {
		expect(dispatch([R.always(null), R.identity, R.always(null)], 3)).toBe(3);
	});
	it('should return undefined', () => {
		expect(dispatch([R.always(null), R.identity, R.always(null)], null)).toBe(undefined);
	});
});
