import { allPass, o } from 'ramda';
import notNaN from './notNaN';

export default allPass([o(notNaN, parseFloat), isFinite]);
