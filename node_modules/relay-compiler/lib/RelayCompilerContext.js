/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @providesModule RelayCompilerContext
 * @format
 */

'use strict';

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./RelayCompilerUserError'),
    createUserError = _require.createUserError;

var ImmutableList = require('immutable').List,
    ImmutableOrderedMap = require('immutable').OrderedMap,
    Record = require('immutable').Record;

var Document = Record({
  errors: null,
  name: null,
  node: null
});

/**
 * An immutable representation of a corpus of documents being compiled together.
 * For each document, the context stores the IR and any validation errors.
 */

var RelayCompilerContext = function () {
  function RelayCompilerContext(schema) {
    (0, _classCallCheck3['default'])(this, RelayCompilerContext);

    this._documents = new ImmutableOrderedMap();
    this.schema = schema;
  }

  /**
   * Returns the documents for the context in the order they were added.
   */


  RelayCompilerContext.prototype.documents = function documents() {
    return this._documents.valueSeq().map(function (doc) {
      return doc.get('node');
    }).toJS();
  };

  RelayCompilerContext.prototype.updateSchema = function updateSchema(schema) {
    var context = new RelayCompilerContext(schema);
    context._documents = this._documents;
    return context;
  };

  RelayCompilerContext.prototype.add = function add(node) {
    require('fbjs/lib/invariant')(!this._documents.has(node.name), 'RelayCompilerContext: Duplicate document named `%s`. GraphQL ' + 'fragments and roots must have unique names.', node.name);
    return this._update(this._documents.set(node.name, new Document({
      name: node.name,
      node: node
    })));
  };

  RelayCompilerContext.prototype.addAll = function addAll(nodes) {
    return nodes.reduce(function (ctx, definition) {
      return ctx.add(definition);
    }, this);
  };

  RelayCompilerContext.prototype.addError = function addError(name, error) {
    var record = this._get(name);
    var errors = record.get('errors');
    if (errors) {
      errors = errors.push(error);
    } else {
      errors = ImmutableList([error]);
    }
    return this._update(this._documents.set(name, record.set('errors', errors)));
  };

  RelayCompilerContext.prototype.get = function get(name) {
    var record = this._documents.get(name);
    return record && record.get('node');
  };

  RelayCompilerContext.prototype.getFragment = function getFragment(name) {
    var record = this._documents.get(name);
    var node = record && record.get('node');
    if (!(node && node.kind === 'Fragment')) {
      var childModule = name.substring(0, name.lastIndexOf('_'));
      throw createUserError('Relay cannot find fragment `%s`.' + ' Please make sure the fragment exists in `%s`', name, childModule);
    }
    return node;
  };

  RelayCompilerContext.prototype.getRoot = function getRoot(name) {
    var record = this._documents.get(name);
    var node = record && record.get('node');
    require('fbjs/lib/invariant')(node && node.kind === 'Root', 'RelayCompilerContext: Expected `%s` to be a root, got `%s`.', name, node && node.kind);
    return node;
  };

  RelayCompilerContext.prototype.getErrors = function getErrors(name) {
    return this._get(name).get('errors');
  };

  RelayCompilerContext.prototype.remove = function remove(name) {
    return this._update(this._documents['delete'](name));
  };

  RelayCompilerContext.prototype._get = function _get(name) {
    var record = this._documents.get(name);
    require('fbjs/lib/invariant')(record, 'RelayCompilerContext: Unknown document `%s`.', name);
    return record;
  };

  RelayCompilerContext.prototype._update = function _update(documents) {
    var context = new RelayCompilerContext(this.schema);
    context._documents = documents;
    return context;
  };

  return RelayCompilerContext;
}();

module.exports = RelayCompilerContext;