/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayCompilerUserError
 * 
 * @format
 */

'use strict';

var createUserError = function createUserError(format) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var index = 0;
  var formatted = format.replace(/%s/g, function (match) {
    return args[index++];
  });
  var err = new Error(formatted);
  err.isRelayUserError = true;
  return err;
};

module.exports = { createUserError: createUserError };