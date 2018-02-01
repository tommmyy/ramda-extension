import { apply, compose, curryN, dissocPath } from 'ramda';
import splitByDot from './splitByDot';
import argumentsToList from './argumentsToList';
import overHead from './overHead';

/**
 * Makes a shallow clone of an object, omitting the property at the given dot path.
 * Note that this copies and flattens
 * prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @category Object
 *
 * @param {String} path The dot path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @example
 *
 *      R_.dissocDotPath('a.b.c', {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
const dissocDotPath = curryN(2, compose(apply(dissocPath), overHead(splitByDot), argumentsToList));

export default dissocDotPath;
