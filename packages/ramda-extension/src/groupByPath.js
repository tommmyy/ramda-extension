import { groupBy, useWith, path, identity } from 'ramda';

/**
 * Groups values in the list by the property found by provided path.
 *
 * @func
 * @category Object
 *
 * @param  Array path
 * @param  Array list
 *
 * @return Object An object with the output of determined by `path` for keys,
 * mapped to arrays of elements that produced that key.
 *
 * @example
 *
 *        R_.groupByPath(["id"])([
 *          { id: 1 },
 *          { id: 3 },
 *          { id: 1, name: "c" }
 *       ])
 * // ->
 * {
 *    "1": [
 *        {
 *            id: 1
 *        },
 *        {
 *            id: 1,
 *            name: "c"
 *        }
 *    ],
 *    "3": [
 *        {
 *            id: 3
 *        }
 *    ]
 * *  }
 *
 *
 * @sig [String] -> [a] -> {String -> [a]}
 */
const groupByPath = useWith(groupBy, [path, identity]);

export default groupByPath;
