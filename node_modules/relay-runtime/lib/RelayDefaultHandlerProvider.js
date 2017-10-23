/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayDefaultHandlerProvider
 * 
 * @format
 */

'use strict';

function RelayDefaultHandlerProvider(handle) {
  switch (handle) {
    case 'connection':
      return require('./RelayConnectionHandler');
    case 'viewer':
      return require('./RelayViewerHandler');
  }
  require('fbjs/lib/invariant')(false, 'RelayDefaultHandlerProvider: No handler provided for `%s`.', handle);
}

module.exports = RelayDefaultHandlerProvider;