import constructRegExp from './constructRegExp';

export const emptyString = '';
export const emptyArray = [];
export const emptyObject = {};
export const nonAlphaNumericRegExp = constructRegExp('[^a-zA-Z0-9]+', 'g');
