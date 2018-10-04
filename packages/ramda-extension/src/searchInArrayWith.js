import { filter, flip, any, call, o, pipe, curryN, useWith } from 'ramda';
import flattenValues from './flattenValues';

const pipe2 = curryN(2, pipe);

const useFilterFnAndWaitForValues = o(pipe2(flattenValues), any);

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
const searchInArrayWith = useWith(flip(call), [
	useFilterFnAndWaitForValues,
	flip(filter),
]);

export default searchInArrayWith;
