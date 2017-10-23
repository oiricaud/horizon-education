/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cloneRelayHandleSourceField
 * 
 * @format
 */

'use strict';

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./RelayStoreUtils'),
    getHandleFilterValues = _require.getHandleFilterValues;

var LINKED_FIELD = require('./RelayConcreteNode').LINKED_FIELD;

/**
 * @private
 *
 * Creates a clone of the supplied `handleField` by finding the original linked
 * field (on which the handle was declared) among the sibling `selections`, and
 * copying its selections into the clone.
 */


function cloneRelayHandleSourceField(handleField, selections, variables) {
  var sourceField = selections.find(function (source) {
    return source.kind === LINKED_FIELD && source.name === handleField.name && source.alias === handleField.alias && require('fbjs/lib/areEqual')(source.args, handleField.args);
  });
  require('fbjs/lib/invariant')(sourceField && sourceField.kind === LINKED_FIELD, 'cloneRelayHandleSourceField: Expected a corresponding source field for ' + 'handle `%s`.', handleField.handle);
  var handleKey = require('./getRelayHandleKey')(handleField.handle, handleField.key, handleField.name);
  if (handleField.filters && handleField.filters.length > 0) {
    var filterValues = getHandleFilterValues(handleField.args || [], handleField.filters, variables);
    handleKey = require('./formatStorageKey')(handleKey, filterValues);
  }

  var clonedField = (0, _extends3['default'])({}, sourceField, {
    args: null,
    name: handleKey,
    storageKey: handleKey
  });
  return clonedField;
}

module.exports = cloneRelayHandleSourceField;