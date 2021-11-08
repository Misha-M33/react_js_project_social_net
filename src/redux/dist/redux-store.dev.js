"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _authReducer = _interopRequireDefault(require("./auth-reducer"));

var _dialogsReducer = _interopRequireDefault(require("./dialogs-reducer"));

var _profileReducer = _interopRequireDefault(require("./profile-reducer"));

var _sidebarReducer = _interopRequireDefault(require("./sidebar-reducer"));

var _usersReducer = _interopRequireDefault(require("./users-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profPage: _profileReducer["default"],
  dialPage: _dialogsReducer["default"],
  sidebar: _sidebarReducer["default"],
  usersPage: _usersReducer["default"],
  auth: _authReducer["default"]
});
var store = (0, _redux.createStore)(reducers);
window.store = store;
var _default = store;
exports["default"] = _default;