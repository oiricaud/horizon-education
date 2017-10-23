/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayFileIRParser
 * 
 * @format
 */

'use strict';

var _toConsumableArray3 = _interopRequireDefault(require('babel-runtime/helpers/toConsumableArray'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Throws an error if parsing the file fails
function parseFile(baseDir, file) {
  var text = require('fs').readFileSync(require('path').join(baseDir, file.relPath), 'utf8');

  require('fbjs/lib/invariant')(text.indexOf('graphql') >= 0, 'RelayFileIRParser: Files should be filtered before passed to the ' + 'parser, got unfiltered file `%s`.', file);

  var astDefinitions = [];
  require('./FindGraphQLTags').memoizedFind(text, baseDir, file).forEach(function (_ref) {
    var tag = _ref.tag,
        template = _ref.template;

    if (!(tag === 'graphql' || tag === 'graphql.experimental')) {
      throw new Error('Invalid tag ' + tag + ' in ' + file.relPath + '. ' + 'Expected graphql`` (common case) or ' + 'graphql.experimental`` (if using experimental directives).');
    }
    if (tag !== 'graphql.experimental' && /@argument(Definition)?s\b/.test(template)) {
      throw new Error('Unexpected use of fragment variables: @arguments and ' + '@argumentDefinitions are only supported in ' + 'graphql.experimental literals. Source: ' + template);
    }
    var ast = require('graphql').parse(new (require('graphql').Source)(template, file.relPath));
    require('fbjs/lib/invariant')(ast.definitions.length, 'RelayFileIRParser: Expected GraphQL text to contain at least one ' + 'definition (fragment, mutation, query, subscription), got `%s`.', template);

    astDefinitions.push.apply(astDefinitions, (0, _toConsumableArray3['default'])(ast.definitions));
  });

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

function getFileFilter(baseDir) {
  return function (file) {
    var text = require('fs').readFileSync(require('path').join(baseDir, file.relPath), 'utf8');
    return text.indexOf('graphql') >= 0;
  };
}

module.exports = {
  getParser: getParser,
  getFileFilter: getFileFilter
};