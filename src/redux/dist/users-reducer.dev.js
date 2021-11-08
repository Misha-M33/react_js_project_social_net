"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.toggleisFetching = exports.setTotalUsersCount = exports.setCurentPage = exports.setUsers = exports.unfollow = exports.follow = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLLOW = 'FOLLOW';
var UNFOLLOW = 'UNFOLLOW';
var SET_USERS = 'SET_USERS';
var SET_CURENT_PAGE = 'SET_CURENT_PAGE';
var SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
var TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
var initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  curentPage: 1,
  isFetching: true
};

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (u) {
          if (u.id === action.userId) {
            return _objectSpread({}, u, {
              followed: true
            });
          }

          return u;
        })
      });

    case UNFOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (u) {
          if (u.id === action.userId) {
            return _objectSpread({}, u, {
              followed: false
            });
          }

          return u;
        })
      });

    case SET_USERS:
      {
        return _objectSpread({}, state, {
          users: action.users
        });
      }

    case SET_CURENT_PAGE:
      {
        return _objectSpread({}, state, {
          curentPage: action.curentPage
        });
      }

    case SET_TOTAL_USERS_COUNT:
      {
        return _objectSpread({}, state, {
          totalUsersCount: action.count
        });
      }

    case TOGGLE_IS_FETCHING:
      {
        return _objectSpread({}, state, {
          isFetching: action.isFetching
        });
      }

    default:
      return state;
  }
};

var follow = function follow(userId) {
  return {
    type: FOLLOW,
    userId: userId
  };
};

exports.follow = follow;

var unfollow = function unfollow(userId) {
  return {
    type: UNFOLLOW,
    userId: userId
  };
};

exports.unfollow = unfollow;

var setUsers = function setUsers(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsers = setUsers;

var setCurentPage = function setCurentPage(curentPage) {
  return {
    type: SET_CURENT_PAGE,
    curentPage: curentPage
  };
};

exports.setCurentPage = setCurentPage;

var setTotalUsersCount = function setTotalUsersCount(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
  };
};

exports.setTotalUsersCount = setTotalUsersCount;

var toggleisFetching = function toggleisFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

exports.toggleisFetching = toggleisFetching;
var _default = usersReducer;
exports["default"] = _default;