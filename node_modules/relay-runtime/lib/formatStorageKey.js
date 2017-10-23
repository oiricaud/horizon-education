/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule formatStorageKey
 * 
 * @format
 */

'use strict';

/**
 * Given a `fieldName` (eg. "foo") and an object representing arguments and
 * values (eg. `{first: 10, orberBy: "name"}`) returns a unique storage key
 * (ie. `foo{"first":10,"orderBy":"name"}`).
 */
function formatStorageKey(fieldName, argsWithValues) {
  if (!argsWithValues) {
    return fieldName;
  }
  var filtered = null;
  require('fbjs/lib/forEachObject')(argsWithValues, function (value, argName) {
    if (value != null) {
      if (!filtered) {
        filtered = {};
      }
      filtered[argName] = value;
    }
  });
  return fieldName + (filtered ? require('./stableJSONStringify')(filtered) : '');
}

module.exports = formatStorageKey;