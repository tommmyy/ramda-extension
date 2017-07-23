import R from 'ramda';
import isObject from './isObject';

const deepMerge = R.curry(
	(a, b) => (isObject(a) && isObject(b) ? R.mergeWith(deepMerge, a, b) : b)
);

export default deepMerge;
