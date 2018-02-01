import { __, identity, length, useWith } from 'ramda';

export const compareLength = useWith(__, [identity, length]);
