import { identity, useWith, __, o, test, unless } from 'ramda';
import searchInArrayWith from './searchInArrayWith';
import isReqExp from './isRegExp';
import constructReqExp from './constructRegExp';

const insensitiveReqExp = constructReqExp(__, 'gi');
const testRegexp = o(test, unless(isReqExp, insensitiveReqExp));

/**
 * Perform fulltext search with given search function.
 *
 * @func
 * @category Array
 *
 * @param  {Array} searchFn
 * @param  {Array} value
 * @return {Array} filtered array of values
 *
 * @example
 *
 *        R_.searchInArrayWith(R.contains('hi'),[
 *				'hi',
 *				{ foo: 'bar' },
 *				{ foo: 'hi' },
 *				{
 *					foo: {
 *						bar: ['cuuus', { foo: 'hi' }],
 *					},
 *				},
 *				['haha', 'hi'],
 *				['haha', { foo: 'hi' }],
 *			]);
 *			// [
 *			// 'hi',
 *			// { foo: 'hi' },
 *			// {
 *			//	foo: {
 *			//		bar: ['cuuus', { foo: 'hi' }],
 *			//	},
 *			// },
 *			// ['haha', 'hi'],
 *			// ['haha', { foo: 'hi' }],
 *			// ]
 *
 */
const searchInArray = useWith(searchInArrayWith, [testRegexp, identity]);

export default searchInArray;
