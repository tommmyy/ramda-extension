import R from 'ramda';

// (a → ... → b) → [a, ..., b] → c
// @xample:
// const f = (a) => (b) => a + b
// reduceCallable(f, [1, 2]) // 3
export default R.reduce((acc, next) => acc(next));
