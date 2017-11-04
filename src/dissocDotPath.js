import { curryN, dissocPath, compose, apply } from 'ramda';
import splitByDoth from './splitByDot';
import argumentsToList from './argumentsToList';
import overHead from './overHead';

/**
 * Makes a shallow clone of an object, omitting the property at the given dot path. Note that this copies and flattens
 * prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 *
 * @category Object*
 *
 * @param {String} path The dot path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @example
 *
 *      R_.dissocDotPath('a.b.c', {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
export default curryN(2, compose(apply(dissocPath), overHead(splitByDoth), argumentsToList));
