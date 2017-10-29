import { o, equals, split, reject } from 'ramda';
import { emptyString, nonAlphaNumericRegExp } from './internal';

export default o(reject(equals(emptyString)), split(nonAlphaNumericRegExp));
