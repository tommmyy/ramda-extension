import constructRegExp from '../constructRegExp';
/**
 * @private
 */
export const nonAlphaNumericRegExp = constructRegExp('[^a-zA-Z0-9]+', 'g');
