import { concat, always } from 'ramda';
import defaultArgs from '../defaultArgs';

describe('defaultArgs', () => {
	const calledFn = (...args) => args;
	it('should default arguments - args and input same length', () => {
		expect(
			defaultArgs(['default1', 'default2'], calledFn)(
				undefined,
				'defined'
			)
		).toEqual(['default1', 'defined']);
	});
	it('should default arguments - args are bigger than input', () => {
		expect(
			defaultArgs(['default1', 'default2', 'default3'], calledFn)(
				undefined,
				'defined'
			)
		).toEqual(['default1', 'defined', 'default3']);
	});
	it('should default arguments - input is bigger than args', () => {
		expect(
			defaultArgs(['default1', 'default2'], calledFn)(
				undefined,
				'defined',
				'also defined'
			)
		).toEqual(['default1', 'defined', 'also defined']);
	});
	it('should be ac when used on concat', () => {
		expect(defaultArgs(['a', 'b'], concat)(undefined, 'c')).toEqual('ac');
	});
	it('should be {} when used on always', () => {
		expect(defaultArgs([{}], always)(undefined)()).toEqual({});
	});
});
