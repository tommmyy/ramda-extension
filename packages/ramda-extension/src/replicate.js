import { flip, repeat } from 'ramda';

/**
 * Creates list of length `n`. Every item in list equals to `input` parameter.
 *
 * @param {Number} n How many times replicate `input`
 * @param {a} input Value for replication
 *
 * @return List List of length `n`. Every item in list equals to `input` parameter
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.replicate(1, 6) // [6]
 *        R_.replicate(2, 6) // [6, 6]
 *        R_.replicate(3, 6) // [6, 6, 6]
 *
 * @sig Number -> a -> [a]
 */
const replicate = flip(repeat);

export default replicate;
