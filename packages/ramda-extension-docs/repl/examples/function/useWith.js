const double = y => y * 2;
const square = x => x * x;
const add = (a, b) => a + b;
// Adds any number of arguments together
const addAll = (...args) => R.reduce(add, 0, args);

// Basic example
const addDoubleAndSquare = R.useWith(addAll, [double, square]);

//≅ addAll(double(10), square(5));
addDoubleAndSquare(10, 5); //=> 45
