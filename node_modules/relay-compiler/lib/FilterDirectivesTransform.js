/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FilterDirectivesTransform
 * 
 * @format
 */

'use strict';

/**
 * A transform that removes any directives that were not present in the
 * original schema.
 */
function transform(context, schema) {
  return require('./RelayIRTransformer').transform(context, { Directive: visitDirective }, function () {
    return schema;
  });
}

/**
 * @internal
 *
 * Skip directives not defined in the original schema.
 */
function visitDirective(directive, state) {
  if (state.getDirectives().some(function (schemaDirective) {
    return schemaDirective.name === directive.name;
  })) {
    return directive;
  }
  return null;
}

module.exports = { transform: transform };