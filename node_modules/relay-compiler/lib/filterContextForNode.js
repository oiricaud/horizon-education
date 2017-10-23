/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule filterContextForNode
 * 
 * @format
 */

'use strict';

var _require = require('./RelayIRVisitor'),
    visit = _require.visit;

/**
 * Returns a RelayCompilerContext containing only the documents referenced
 * by and including the provided node.
 */
function filterContextForNode(node, context) {
  var queue = [node];
  var filteredContext = new (require('./RelayCompilerContext'))(context.schema).add(node);
  var visitorConfig = {
    FragmentSpread: function FragmentSpread(fragmentSpread) {
      var name = fragmentSpread.name;

      if (!filteredContext.get(name)) {
        var fragment = context.getFragment(name);
        filteredContext = filteredContext.add(fragment);
        queue.push(fragment);
      }
    }
  };
  while (queue.length) {
    visit(queue.pop(), visitorConfig);
  }
  return filteredContext;
}

module.exports = filterContextForNode;