# [Unpublished]
 Nothing :)

# 0.9.1 

#### List of new functions
* [uniqAppend](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqAppend.js)
* [uniqPrepend](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqPrepend.js)
* [groupByProp](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/groupByProp.js)
* [groupByPath](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/groupByPath.js)

# 0.9.0 

#### List of new functions
* [uniqMap](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqMap.js)
* [uniqFilter](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqFilter.js)
* [uniqLength](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqLength.js)
* [uniqTake](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqTake.js)
* [uniqTakeLast](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqTakeLast.js)
* [uniqTakeWhile](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqTakeWhile.js)
* [uniqTakeLastWhile](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqTakeLastWhile.js)
* [uniqDropLast](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqDropLast.js)
* [uniqDropWhile](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqDropWhile.js)
* [uniqDropLastWhile](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqDropLastWhile.js)
* [uniqMap](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/uniqMap.js)

#### Fixes
* [unfoldObjectDots](https://github.com/tommmyy/ramda-extension/pull/151) - unfoldObjectDots did not merge same objects properly

# 0.8.0

#### List of new functions
* [isBoolean](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isBoolean.js)
* [toEntries](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/toEntries.js)
* [get](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/get.js)
* [ensureArray](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/ensureArray.js)

#### Fixes
* [Tests for `isNumeric` and `isNumber`](https://github.com/tommmyy/ramda-extension/pull/141)

# 0.7.2
* We updated to be in sync with Ramda 0.26.1.
* Improved es build. See [#133](https://github.com/tommmyy/ramda-extension/pull/133)

# 0.7.1
We updated to be in sync with Ramda 0.26.0.

#### Depracations
* [includes](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/includes.js) and [notInclude](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notInclude.js) due to [ramda#2452](https://github.com/ramda/ramda/pull/2452)

#### List of new functions

* [callIfFunction](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/callIfFunction.js)
* [applyIfFunction](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/applyIfFunction.js)
* [flipIncludes](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/flipIncludes.js)
* [notFlipIncludes](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notFlipIncludes.js)

# 0.6.1

#### List of new functions

* [flattenValues](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/flattenValues.js)
* [searchInArray](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/searchInArray.js)
* [searchInArrayWith](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/searchInArrayWith.js)

# 0.6.0

#### List of new functions

* [isPlainObject](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isPlainObject.js)

# 0.5.1

#### List of new functions

* [isNumber](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNumber.js)
* [endsWithSuffixIgnoreCase](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/endsWithSuffixIgnoreCase.js)

#### Other

* [Babel 7](https://github.com/tommmyy/ramda-extension/issues/114) - Performance improvement


# 0.5.0

#### List of new functions

* [defaultArgs](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultArgs.js)
* [equalsStringIgnoreCase](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsStringIgnoreCase.js)
* [startsWithPrefixIgnoreCase](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/startsWithPrefixIgnoreCase.js)
* [isError](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isError.js)


#### Other

* [cx](https://github.com/tommmyy/ramda-extension/commit/2ddf1e58cd166c91c36654281d012cfc27a703be#diff-7903dade1d4b71c2d4cb8869b8254454) - Performance improvement

#### Bug fixing
* [`alwaysEmptyObject` and `alwaysEmptyArray` do not always return empty array or object](https://github.com/tommmyy/ramda-extension/issues/97)
* [indentation of examples](https://github.com/tommmyy/ramda-extension/issues/52)
* [Option 'run it here' does not work](https://github.com/tommmyy/ramda-extension/issues/68)

# 0.4.0

#### List of new functions
* [isTruthy](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isTruthy.js)
* [isFalsy](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isFalsy.js)
* [isNilOrEmpty](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNilOrEmpty.js)
* [mapIndexed](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/mapIndexed.js)

# 0.3.7

#### List of new functions
* [toggle](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/toggle.js)

#### Bug fixing
* [Missing function dispatchWith in documentation](https://github.com/tommmyy/ramda-extension/issues/89)

# 0.3.6

#### List of new functions
* [alwaysOne](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/alwaysOne.js)
* [alwaysZero](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/alwaysZero.js)
* [applyCompose](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/applyCompose.js)
* [applyPipe](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/applyPipe.js)
* [between](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/between.js)
* [defaultToEmptyArray](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultToEmptyArray.js)
* [defaultToEmptyObject](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultToEmptyObject.js)
* [defaultToEmptyString](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultToEmptyString.js)
* [defaultToFalse](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultToFalse.js)
* [defaultToOne](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultToOne.js)
* [defaultToTrue](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultToTrue.js)
* [defaultToZero](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/defaultToZero.js)
* [dispatchWith](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/dispatchWith.js)
* [equalsToEmptyArray](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToEmptyArray.js)
* [equalsToEmptyObject](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToEmptyObject.js)
* [equalsToEmptyString](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToEmptyString.js)
* [equalsToFalse](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToFalse.js)
* [equalsToNull](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToNull.js)
* [equalsToOne](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToOne.js)
* [equalsToTrue](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToTrue.js)
* [equalsToZero](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/equalsToZero.js)
* [isNotEmpty](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotEmpty.js)
* [isNotNaN](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotNaN.js)
* [isNotNil](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotNil.js)
* [isNotNumeric](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotNumeric.js)
* [isNotRegExp](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotRegExp.js)
* [isRegExp](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isRegExp.js)
* [isNotEmpty](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotEmpty.js)
* [isNotNaN](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotNaN.js)
* [isNotNil](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotNil.js)
* [isNotNumeric](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotNumeric.js)
* [isNotRegExp](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isNotRegExp.js)
* [isRegExp](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/isRegExp.js)
* [notEqualToEmptyArray](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToEmptyArray.js)
* [notEqualToEmptyObject](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToEmptyObject.js)
* [notEqualToEmptyString](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToEmptyString.js)
* [notEqualToFalse](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToFalse.js)
* [notEqualToNull](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToNull.js)
* [notEqualToOne](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToOne.js)
* [notEqualToTrue](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToTrue.js)
* [notEqualToZero](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/notEqualToZero.js)
* [objOfOver](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/objOfOver.js)
* [xPairs](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/xPairs.js)
* [xPairsRight](https://github.com/tommmyy/ramda-extension/blob/master/packages/ramda-extension/src/xPairsRight.js)

#### Deprecations
* equalsZero
* equalsEmptyString
* notNil
* notEmpty
* notNaN
* notNumeric

# 0.3.3-5

#### Bug fixing
* [#69](https://github.com/tommmyy/ramda-extension/issues/69)

# 0.3.2

#### Bug fixing
* [#64](https://github.com/tommmyy/ramda-extension/issues/64)
* [#66](https://github.com/tommmyy/ramda-extension/issues/66)

#### List of new functions
* [reduceSource](https://github.com/tommmyy/ramda-extension/blob/master/src/reduceSource.js)

# 0.3.1

* Refactor [notEqual](https://github.com/tommmyy/ramda-extension/blob/master/src/notEqual.js)
* Docs formatting


# 0.3.0

#### List of new functions
* [camelizeKeys](https://github.com/tommmyy/ramda-extension/blob/master/src/camelizeKeys.js)
* [headArg](https://github.com/tommmyy/ramda-extension/blob/master/src/headArg.js)
* [isNotNilObject](https://github.com/tommmyy/ramda-extension/blob/master/src/isNotNilObject.js)
* [includes](https://github.com/tommmyy/ramda-extension/blob/master/src/includes.js)
* [joinWithDash](https://github.com/tommmyy/ramda-extension/blob/master/src/joinWithDash.js)
* [joinWithUnderscore](https://github.com/tommmyy/ramda-extension/blob/master/src/joinWithUnderscore.js)
* [lastArg](https://github.com/tommmyy/ramda-extension/blob/master/src/lastArg.js)
* [mapKeysAndValues](https://github.com/tommmyy/ramda-extension/blob/master/src/mapKeysAndValues.js)
* [mapKeysWithValue](https://github.com/tommmyy/ramda-extension/blob/master/src/mapKeysWithValue.js)
* [notEqual](https://github.com/tommmyy/ramda-extension/blob/master/src/notEqual.js)
* [notInclude](https://github.com/tommmyy/ramda-extension/blob/master/src/notInclude.js)
* [rejectEq](https://github.com/tommmyy/ramda-extension/blob/master/src/rejectEq.js)

# 0.2.1
Hotfix release. Some of the new functions were not published to npm.

# 0.2.0

New release brings hand full of new functions.

Some of them are Ramda implementations of often used and well-known libraries:

* [cx](https://github.com/tommmyy/ramda-extension/blob/master/src/cx.js) - alternative to [classnames](https://github.com/JedWatson/classnames),
* [keyMirror](https://github.com/tommmyy/ramda-extension/blob/master/src/keyMirror.js), [valueMirror](https://github.com/tommmyy/ramda-extension/blob/master/src/valueMirror.js) - alternative to [keymirror](https://github.com/STRML/keyMirror)

For users of lens we have new helpful functions too:
* [viewEq](https://github.com/tommmyy/ramda-extension/blob/master/src/viewEq.js)
* [viewWith](https://github.com/tommmyy/ramda-extension/blob/master/src/viewWith.js)

#### List of new functions
* [applyIfNotNil](https://github.com/tommmyy/ramda-extension/blob/master/src/applyIfNotNil.js)
* [cx](https://github.com/tommmyy/ramda-extension/blob/master/src/cx.js)
* [duplicate](https://github.com/tommmyy/ramda-extension/blob/master/src/duplicate.js)
* [equalsLength](https://github.com/tommmyy/ramda-extension/blob/master/src/equalsLength.js)
* [flattenArgs](https://github.com/tommmyy/ramda-extension/blob/master/src/flattenArgs.js)
* [gtThanLength](https://github.com/tommmyy/ramda-extension/blob/master/src/gtThanLength.js)
* [gteThanLength](https://github.com/tommmyy/ramda-extension/blob/master/src/gteThanLength.js)
* [joinWithDot](https://github.com/tommmyy/ramda-extension/blob/master/src/joinWithDot.js)
* [joinWithSpace](https://github.com/tommmyy/ramda-extension/blob/master/src/joinWithSpace.js)
* [keyMirror](https://github.com/tommmyy/ramda-extension/blob/master/src/keyMirror.js)
* [ltThanLength](https://github.com/tommmyy/ramda-extension/blob/master/src/ltThanLength.js)
* [lteThanLength](https://github.com/tommmyy/ramda-extension/blob/master/src/lteThanLength.js)
* [pathNotEq](https://github.com/tommmyy/ramda-extension/blob/master/src/pathNotEq.js)
* [propNotEq](https://github.com/tommmyy/ramda-extension/blob/master/src/propNotEq.js)
* [replicate](https://github.com/tommmyy/ramda-extension/blob/master/src/replicate.js)
* [valueMirror](https://github.com/tommmyy/ramda-extension/blob/master/src/valueMirror.js)
* [viewEq](https://github.com/tommmyy/ramda-extension/blob/master/src/viewEq.js)
* [viewWith](https://github.com/tommmyy/ramda-extension/blob/master/src/viewWith.js)

#### Breaking Changes
_none_

# 0.1.0

#### Breaking Changes
* Change of build system and project structure to be same as ramda.
#### New Feature
#### Bug Fix
