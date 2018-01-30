import { toLowerFirst } from '../';

describe('toLowerFirst', () => {
	it('decapitalize first letter', () => {
		expect(toLowerFirst('HELLO')).toBe('hELLO');
	});
});
