import R from 'ramda';
import isNumeric from './isNumeric';

export default R.o(R.not, isNumeric);
