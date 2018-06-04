import constructRegExp from '../constructRegExp';
export const nonAlphaNumericRegExp = constructRegExp('[^a-zA-Z0-9]+', 'g');
