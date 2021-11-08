"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewMessTextActionCreator = exports.addMessActionCreator = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var APDATE_NEW_MESS_TEXT = 'APDATE-NEW-MESS-TEXT';
var ADD_MESS = 'ADD-MESS';
var initialState = {
  dialData: [{
    id: 1,
    name: 'Dimych'
  }, {
    id: 2,
    name: 'Andrey'
  }, {
    id: 3,
    name: 'Sveta'
  }, {
    id: 4,
    name: 'Sasha'
  }, {
    id: 5,
    name: 'Viktor'
  }, {
    id: 6,
    name: 'Valera'
  }],
  mesData: [{
    id: 1,
    message: 'Hi'
  }, {
    id: 2,
    message: 'How is your it-kamasytra'
  }, {
    id: 3,
    message: 'Yo-Yo'
  }, {
    id: 4,
    message: 'Yo-Yo'
  }, {
    id: 5,
    message: 'Yo-Yo'
  }],
  newMessText: ''
};

var dialogsReducer = function dialogsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case APDATE_NEW_MESS_TEXT:
      return _objectSpread({}, state, {
        newMessText: action.nText
      });
    //state.newMessText=action.nText
    //stateCopy.newMessText=action.nText  

    case ADD_MESS:
      var newMess = state.newMessText;
      return _objectSpread({}, state, {
        newMessText: '',
        mesData: [].concat(_toConsumableArray(state.mesData), [{
          id: 6,
          message: newMess
        }])
      });
    //stateCopy.newMessText = {...state.newMessText}
    //let newMess = { id: 6, message: state.newMessText }
    //stateCopy.mesData = [...state.mesData]
    //stateCopy.mesData.push(newMess)
    //stateCopy.newMessText=''

    default:
      return state;
  }
};

var addMessActionCreator = function addMessActionCreator() {
  return {
    type: ADD_MESS
  };
};

exports.addMessActionCreator = addMessActionCreator;

var updateNewMessTextActionCreator = function updateNewMessTextActionCreator(text) {
  return {
    type: APDATE_NEW_MESS_TEXT,
    nText: text
  };
};

exports.updateNewMessTextActionCreator = updateNewMessTextActionCreator;
var _default = dialogsReducer;
exports["default"] = _default;