import R from 'ramda';

/**
 * @sig a -> b -> b
 */
export default R.curry((x, y) => (console.log(x, y), y));
