import R from 'ramda';
import notNaN from './notNaN';

export default R.allPass([R.o(notNaN, parseFloat), isFinite]);
