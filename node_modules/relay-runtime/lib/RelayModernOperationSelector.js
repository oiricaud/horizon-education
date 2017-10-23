/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayModernOperationSelector
 * 
 * @format
 */

'use strict';

var _require = require('./RelayConcreteVariables'),
    getOperationVariables = _require.getOperationVariables;

var _require2 = require('./RelayStoreUtils'),
    ROOT_ID = _require2.ROOT_ID;

/**
 * Creates an instance of the `OperationSelector` type defined in
 * `RelayStoreTypes` given an operation and some variables. The input variables
 * are filtered to exclude variables that do not match defined arguments on the
 * operation, and default values are populated for null values.
 */
function createOperationSelector(operation, variables) {
  var operationVariables = getOperationVariables(operation, variables);
  var dataID = ROOT_ID;
  return {
    fragment: {
      dataID: dataID,
      node: operation.fragment,
      variables: operationVariables
    },
    node: operation,
    root: {
      dataID: dataID,
      node: operation.query,
      variables: operationVariables
    },
    variables: operationVariables
  };
}

module.exports = {
  createOperationSelector: createOperationSelector
};