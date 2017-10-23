/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeRelayPayload
 * 
 * @format
 */

'use strict';

var _require = require('./RelayStoreUtils'),
    ROOT_ID = _require.ROOT_ID,
    ROOT_TYPE = _require.ROOT_TYPE;

function normalizeRelayPayload(selector, payload, errors) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };

  var source = new (require('./RelayInMemoryRecordSource'))();
  source.set(ROOT_ID, require('./RelayModernRecord').create(ROOT_ID, ROOT_TYPE));
  var fieldPayloads = require('./RelayResponseNormalizer').normalize(source, selector, payload, options);
  return {
    errors: errors,
    fieldPayloads: fieldPayloads,
    source: source
  };
}

module.exports = normalizeRelayPayload;