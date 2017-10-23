"use strict";

exports.__esModule = true;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATE_KEY_PREFIX = "@@scroll|";

var SessionStorage = function () {
  function SessionStorage() {
    (0, _classCallCheck3.default)(this, SessionStorage);
  }

  SessionStorage.prototype.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);
    var value = sessionStorage.getItem(stateKey);
    return JSON.parse(value);
  };

  SessionStorage.prototype.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = (0, _stringify2.default)(value);
    sessionStorage.setItem(stateKey, storedValue);
  };

  SessionStorage.prototype.getStateKey = function getStateKey(location, key) {
    var locationKey = location.key;
    var stateKeyBase = "" + STATE_KEY_PREFIX + locationKey;
    return key == null ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.default = SessionStorage;