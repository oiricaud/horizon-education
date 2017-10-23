/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FileParser
 * 
 * @format
 */

'use strict';

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('immutable'),
    ImmutableMap = _require.Map;

var FileParser = function () {
  function FileParser(config) {
    (0, _classCallCheck3['default'])(this, FileParser);
    this._documents = new Map();

    this._baseDir = config.baseDir;
    this._parse = config.parse;
  }

  // Short-term: we don't do subscriptions/delta updates, instead always use all definitions


  FileParser.prototype.documents = function documents() {
    return ImmutableMap(this._documents);
  };

  // parse should return the set of changes


  FileParser.prototype.parseFiles = function parseFiles(files) {
    var _this = this;

    var documents = ImmutableMap();

    files.forEach(function (file) {
      var doc = function () {
        try {
          return _this._parse(_this._baseDir, file);
        } catch (error) {
          throw new Error('Parse error: ' + error + ' in "' + file.relPath + '"');
        }
      }();

      if (!doc) {
        _this._documents['delete'](file.relPath);
        return;
      }

      documents = documents.set(file.relPath, doc);
      _this._documents.set(file.relPath, doc);
    });

    return documents;
  };

  return FileParser;
}();

module.exports = FileParser;