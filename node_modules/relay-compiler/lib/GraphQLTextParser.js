/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule GraphQLTextParser
 * TODO: enable flow
 * @format
 */

'use strict';

var _toConsumableArray3 = _interopRequireDefault(require('babel-runtime/helpers/toConsumableArray'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Throws an error if parsing the file fails
function parseFile(baseDir, file, openTag, closeTag) {
  var text = require('fs').readFileSync(require('path').join(baseDir, file.relPath), 'utf8');
  var regex = new RegExp(openTag + '([\\s\\S]*?)' + closeTag, 'g');
  var graphqlText = void 0;
  var astDefinitions = [];
  while ((graphqlText = regex.exec(text)) !== null) {
    var ast = require('graphql').parse(new (require('graphql').Source)(graphqlText[1], file.relPath));
    require('fbjs/lib/invariant')(ast.definitions.length, 'GraphQLTextParser: Expected GraphQL text to contain at least one ' + 'definition (fragment, mutation, query, subscription), got `%s`.', graphqlText[1]);
    astDefinitions.push.apply(astDefinitions, (0, _toConsumableArray3['default'])(ast.definitions));
  }
  return {
    kind: 'Document',
    definitions: astDefinitions
  };
}

function getParser(baseDir) {
  return new (require('./FileParser'))({
    baseDir: baseDir,
    parse: parseFile
  });
}

module.exports = {
  getParser: getParser
};