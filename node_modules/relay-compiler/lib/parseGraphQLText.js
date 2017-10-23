/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule parseGraphQLText
 * 
 * @format
 */

'use strict';

var _require = require('./ASTConvert'),
    convertASTDocuments = _require.convertASTDocuments;

var _require2 = require('graphql'),
    extendSchema = _require2.extendSchema,
    parse = _require2.parse;

function parseGraphQLText(schema, text) {
  var ast = parse(text);
  var extendedSchema = extendSchema(schema, ast);
  var definitions = convertASTDocuments(extendedSchema, [ast], []);
  return {
    definitions: definitions,
    schema: extendedSchema !== schema ? extendedSchema : null
  };
}

module.exports = parseGraphQLText;