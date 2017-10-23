/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayMultiReporter
 * 
 * @format
 */

'use strict';

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RelayMultiReporter = function () {
  function RelayMultiReporter() {
    (0, _classCallCheck3['default'])(this, RelayMultiReporter);

    for (var _len = arguments.length, reporters = Array(_len), _key = 0; _key < _len; _key++) {
      reporters[_key] = arguments[_key];
    }

    this._reporters = reporters;
  }

  RelayMultiReporter.prototype.reportError = function reportError(caughtLocation, error) {
    this._reporters.forEach(function (reporter) {
      reporter.reportError(caughtLocation, error);
    });
  };

  return RelayMultiReporter;
}();

module.exports = RelayMultiReporter;