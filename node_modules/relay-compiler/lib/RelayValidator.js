/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @providesModule RelayValidator
 * @format
 */

'use strict';

var _toConsumableArray3 = _interopRequireDefault(require('babel-runtime/helpers/toConsumableArray'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./GraphQLValidator'),
    GLOBAL_RULES = _require.GLOBAL_RULES,
    LOCAL_RULES = _require.LOCAL_RULES,
    validate = _require.validate;

function DisallowIdAsAliasValidationRule(context) {
  return {
    Field: function Field(field) {
      if (field.alias && field.alias.value === 'id' && field.name.value !== 'id') {
        throw new Error('RelayValidator: Relay does not allow aliasing fields to `id`. ' + 'This name is reserved for the globally unique `id` field on ' + '`Node`.');
      }
    }
  };
}

var relayGlobalRules = GLOBAL_RULES;

var relayLocalRules = [].concat((0, _toConsumableArray3['default'])(LOCAL_RULES), [DisallowIdAsAliasValidationRule]);

module.exports = {
  GLOBAL_RULES: relayGlobalRules,
  LOCAL_RULES: relayLocalRules,
  validate: validate
};