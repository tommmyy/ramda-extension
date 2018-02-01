import { compose, flatten } from 'ramda';
import argumentsToList from './argumentsToList';

/**
 * Applies flatten on array of arguments
 *
 * @func
 * @category List
 *
 * @return {Array} flatten array
 *
 * @example
 *
 * 		R_.flattenArgs('e', 'f', 'a') // ['e', 'f', 'a']
 * 		R_.flattenArgs('e', ['f', 'a']) // ['e', 'f', 'a']
 * 		R_.flattenArgs('e', ['f', ['a']]) // ['e', 'f', 'a']
 *
 * @sig (a, [b, c]...) -> [a, b, c]
 */
const flattenArgs = compose(flatten, argumentsToList);

export default flattenArgs;
