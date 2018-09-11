import { identity, length, useWith, __ } from 'ramda';

/**
 * @private
 */
export const compareLength = useWith(__, [identity, length]);
