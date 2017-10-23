/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule GraphQLFileParser
 * 
 * @format
 */

'use strict';

var _require = require('graphql'),
    parse = _require.parse,
    Source = _require.Source;

function parseFile(baseDir, file) {
  var text = require('fs').readFileSync(require('path').join(baseDir, file.relPath), 'utf8');
  return parse(new Source(text, file.relPath));
}

exports.getParser = function getParser(baseDir) {
  return new (require('./FileParser'))({ baseDir: baseDir, parse: parseFile });
};