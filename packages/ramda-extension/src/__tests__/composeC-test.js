import { append } from 'ramda';
import composeC from '../composeC';
import rejectNil from '../rejectNil';

describe('composeC', () => {
	it('should provide curried compose', () => {
		const appendAndRejectNil = composeC(rejectNil, append);
		const appendCAndRejectNil = appendAndRejectNil('c');
		expect(appendCAndRejectNil(['a', null])).toEqual(['a', 'c']);
	});
});
