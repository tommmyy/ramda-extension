import isNotNilObject from '../isNotNilObject';
import { formatJSVal } from '../testUtils';


describe('isNotNilObject', () => {
	const itHelper = (input, expected) =>
		it(`${formatJSVal(input)} should be ${expected}`, () => {
			expect(isNotNilObject(input)).toBe(expected);
		});

	itHelper({}, true);
	itHelper([], true);
	itHelper(() => {}, true);
	itHelper(null, false);
	itHelper(undefined, false);
	itHelper(1, false);
	itHelper('', false);
	itHelper(false, false);
});
