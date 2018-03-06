import { append } from 'ramda';
import pipeC from '../pipeC';
import rejectNil from '../rejectNil';

describe('pipeC', () => {
	it('should provide curried pipe', () => {
		const appendAndRejectNil = pipeC(append, rejectNil);
		const appendCAndRejectNil = appendAndRejectNil('c');
		expect(appendCAndRejectNil(['a', null])).toEqual(['a', 'c']);
	});
});
