/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule writeLegacyFlowFile
 * 
 * @format
 */

'use strict';

function writeLegacyFlowFile(outputDirectory, name, flowTypes, platform) {
  var moduleName = name + '.legacyflow';
  var header = '/**\n * Copyright 2004-present Facebook. All Rights Reserved.\n *\n * ' + '@' + 'providesModule ' + moduleName + '\n * ' + require('signedsource').getSigningToken() + '\n * ' + '@' + 'flow\n */\n\n\'use strict\';\n\n/**\n * NOTE:\n * These are legacy flow types that have issues in some edge cases. For example:\n *\n *   fragment on Actor {\n *     ... on User {\n *       name\n *     }\n *     ... on Page {\n *       name\n *     }\n *   }\n *\n * generates invalid output. Please use the flow types from the *.graphql.js\n * file instead.\n */\n\n';

  var fileName = platform ? moduleName + '.' + platform : moduleName;
  outputDirectory.writeFile(fileName + '.js', require('signedsource').signFile(header + flowTypes + '\n'));
}

module.exports = writeLegacyFlowFile;