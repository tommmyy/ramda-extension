import { o, not } from 'ramda';
import isNumeric from './isNumeric';

export default o(not, isNumeric);
