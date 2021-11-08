"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers2 = exports.usersAPI = void 0;

var axios = _interopRequireWildcard(require("axios"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var instance = axios["default"].create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8nqK2b_StWRrxcv'
  }
});
var usersAPI = {
  getUsers: function getUsers() {
    var curentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return instance.get("users?page=".concat(curentPage, "&count=").concat(pageSize)).then(function (response) {
      return response.data;
    });
  }
};
exports.usersAPI = usersAPI;

var getUsers2 = function getUsers2() {
  var curentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return instance.get("follow?page=".concat(curentPage, "&count=").concat(pageSize)).then(function (response) {
    return response.data;
  });
};

exports.getUsers2 = getUsers2;