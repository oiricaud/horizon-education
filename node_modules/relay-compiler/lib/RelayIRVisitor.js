/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayIRVisitor
 * 
 * @format
 */
'use strict';

var visit = require('graphql').visit;

var NodeKeys = {
  Argument: ['value'],
  Condition: ['condition', 'selections'],
  Directive: ['args'],
  Fragment: ['argumentDefinitions', 'directives', 'selections'],
  FragmentSpread: ['args', 'directives'],
  InlineFragment: ['directives', 'selections'],
  LinkedField: ['args', 'directives', 'selections'],
  Literal: [],
  LocalArgumentDefinition: [],
  Root: ['argumentDefinitions', 'directives', 'selections'],
  RootArgumentDefinition: [],
  ScalarField: ['args', 'directives'],
  Variable: []
};

function visitIR(root, visitor) {
  return visit(root, visitor, NodeKeys);
}

module.exports = { visit: visitIR };