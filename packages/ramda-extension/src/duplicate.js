import replicate from './replicate';

/**
 * Creates pair. Every item of pair equals to input parameter.
 *
 * @param {a} input Value for duplication
 *
 * @return List Pair in which every item equals to `input` parameter
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.duplicate(1) // [1, 1]
 *
 * @sig a -> [a]
 */
const duplicate = replicate(2);

export default duplicate;
