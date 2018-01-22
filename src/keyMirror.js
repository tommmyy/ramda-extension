import { mapObjIndexed, nthArg } from 'ramda';

/**
 * Copies keys of object to appropriate values.
 *
 * @func
 * @category Object
 *
 *
 * @param {Object} Object where should be keys copied as values.
 *
 * @return {Object}
 *
 * @example
 *
 *  	const actionTypes = R_.keyMirror({
 *  		ITEM_REQUEST: null,
 *  		ITEM_SUCCESS: null,
 *  		ITEM_ERROR: null,
 *  	});
 *
 * 		const action = { type: actionTypes.ITEM_REQUEST };
 *
 * 		action.type === actionTypes.ITEM_REQUEST // true
 *
 * @sig a -> b
 *
 */
const keyMirror = mapObjIndexed(nthArg(1));

export default keyMirror;
