import { groupBy, useWith, prop, identity } from 'ramda';

/**
 * Groups values in the list by the property found by provided key.
 *
 * @func
 * @category Object
 *
 * @param  Array prop
 * @param  Array list
 *
 * @return Object An object with the output of determined by `prop` for keys,
 * mapped to arrays of elements that produced that key.
 *
 * @example
 *
 *        R_.groupByProp("id")([
 *          { id: 1 },
 *          { id: 3 },
 *          { id: 1, name: "c" }
 *       ])
 * // ->
 * // {
 * //    "1": [
 * //        {
 * //            id: 1
 * //        },
 * //        {
 * //            id: 1,
 * //            name: "c"
 * //        }
 * //    ],
 * //    "3": [
 * //        {
 * //            id: 3
 * //        }
 * //    ]
 * //  }
 *
 * @sig String -> [a] -> {String -> [a]}
 */
const groupByProp = useWith(groupBy, [prop, identity]);

export default groupByProp;
