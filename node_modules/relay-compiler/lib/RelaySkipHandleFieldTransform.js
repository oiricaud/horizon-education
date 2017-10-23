/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelaySkipHandleFieldTransform
 * 
 * @format
 */

'use strict';

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A transform that removes field `handles`. Intended for use when e.g.
 * printing queries to send to a GraphQL server.
 */
function transform(context, schema) {
  return require('./RelayIRTransformer').transform(context, {
    LinkedField: visitField,
    ScalarField: visitField
  }, function () {
    return true;
  });
}

function visitField(field, state) {
  var transformedNode = this.traverse(field, state);
  if (transformedNode.handles) {
    return (0, _extends3['default'])({}, transformedNode, {
      handles: null
    });
  }
  return transformedNode;
}

module.exports = { transform: transform };