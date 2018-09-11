import { clone } from 'ramda';
import thunkify from '../internal/thunkify';

/**
 * Returns a function that creates new instances of whatever argument
 * is passed in each time it's called.
 *
 * @func
 * @private
 * @example
 *
 *  const alwaysNewArray = alwaysNew([]);
 *  const a = alwaysNewArray();
 *  const b = alwaysNewArray();
 *  // a !== b
 *
 */
const alwaysNew = thunkify(clone);

export default alwaysNew;
