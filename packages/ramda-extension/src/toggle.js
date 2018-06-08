import { juxt, flip, T, always, useWith, compose, equals, identity, cond } from 'ramda';
import argumentsToList from './argumentsToList';

const equalsAndAlways = useWith(argumentsToList, [equals, always]);

/**
 * Returns the opposite value comparing against a given set of two values.
 *
 * @func
 * @category Function
 *
 * @param {Array} options - must be array of two items
 * @param {*} val
 * @return {*} opposite of options
 * @example
 *
 *      R_.toggle('on', 'off')('on'); //  'off'
 *      R_.toggle('active', 'inactive')('inactive'); // 'active'
 *      R_.toggle(10, 100)(10); // 100
 *      R_.toggle('on', 'off')('other'); // 'other'
 */

const toggle = compose(
	cond,
	juxt([equalsAndAlways, flip(equalsAndAlways), always([T, identity])])
);

export default toggle;
