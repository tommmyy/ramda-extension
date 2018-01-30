import { identity, length, useWith, __ } from 'ramda';

export const compareLength = useWith(__, [identity, length]);
