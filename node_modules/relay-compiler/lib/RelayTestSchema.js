/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayTestSchema
 * 
 * @format
 */

'use strict';

var _require = require('graphql'),
    buildASTSchema = _require.buildASTSchema,
    parse = _require.parse;

var schemaPath = require('path').join(__dirname, 'testschema.graphql');
module.exports = buildASTSchema(parse(require('fs').readFileSync(schemaPath, 'utf8')));